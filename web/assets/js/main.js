$(document).ready(function () {

    $(".hero-home").mousemove(function (e) {

        var screenWidth = $(window).width();
        var screenHeight = $(window).height();

        $(".hero-home img").css({
            transform:
                "translate(-" + e.pageX / screenWidth * 10 + "px, -" + e.pageY / screenHeight * 30 + "px)"
        });

    });

    AOS.init({
        once: true,
        disable: 'mobile'
    });

    jQuery('header nav').meanmenu({
        meanScreenWidth: 1024,
        meanMenuContainer: '.site-wrapper'
    });

    var mySwiper = new Swiper ('.swiper-container', {

        // Optional parameters
        loop: true,

        // Disable preloading of all images
        preloadImages: false,

        // Enable lazy loading
        lazy: {
            loadPrevNext: true,
        },

        fadeEffect: {
            crossFade: true
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    function modal() {
        const openModal = document.querySelectorAll('.modal-open');
        if (openModal) {
            for (var i = 0; i < openModal.length; i++) {
                openModal[i].addEventListener('click', function (event) {
                    event.preventDefault();
                    const modalTarget = this.getAttribute('data-modal');
                    toggleModal(modalTarget);
                })
            }
        }

        const overlay = document.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', function (event) {
                const modalTarget = this.getAttribute('data-modal');
                toggleModal(modalTarget);
            });
        }

        const closeModal = document.querySelectorAll('.modal-close');
        if (closeModal) {
            for (var i = 0; i < closeModal.length; i++) {
                closeModal[i].addEventListener('click', function (event) {
                    const modalTarget = this.getAttribute('data-modal');
                    toggleModal(modalTarget);
                });
            }
        }

        document.onkeydown = function (evt) {
            evt = evt || window.event
            var isEscape = false
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }
            if (isEscape && document.body.classList.contains('modal-active')) {
                toggleModal();
            }
        };
    }

    function toggleModal(modalTarget) {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal[data-modal="' + modalTarget + '"]');
        modal.classList.toggle('opacity-0');
        modal.classList.toggle('pointer-events-none');
        body.classList.toggle('modal-active');
    }

    function cookieModal() {
        const modal = document.getElementById('cookieModal');
        const body = document.querySelector('body');
        const cookieName = 'modalClosed';
        modal.style.display = 'flex';

        if (modal) {
            if (typeof Cookies.get(cookieName) !== 'undefined') {
                modal.style.display = 'none';
            }

            $('.modal-close').on('click', function () {
                Cookies.set(cookieName, 'ok', {expires: 7, path: "/"});
            })
        }
    }

    initMap();
    cookieModal();
    modal();
});
