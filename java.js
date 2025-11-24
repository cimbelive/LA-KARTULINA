
type="text/javascript"
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

// Script de Tawk.to (chat widget)
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/68c302fb80aa45192485bb61/1j4ss79fc';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

// Inicialización de Swiper
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que Swiper esté disponible
    if (typeof Swiper === 'undefined') {
        console.error('Swiper no está cargado. Asegúrate de incluir la librería Swiper.');
        return;
    }

    // Verificar que el contenedor exista
    const swiperElement = document.querySelector('.swiper');
    if (!swiperElement) {
        console.error('No se encontró el elemento .swiper en el DOM');
        return;
    }

    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        initialSlide: 0,
        
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            580: {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
        },
        
        speed: 600,
        resistance: true,
        resistanceRatio: 0.85,
    });

    // Ajustar altura del contenedor
    function adjustSwiperHeight() {
        const container = document.querySelector('.container');
        if (container) {
            const viewportHeight = window.innerHeight;
            container.style.height = Math.max(viewportHeight, 600) + 'px';
        }
    }

    adjustSwiperHeight();
    window.addEventListener('resize', adjustSwiperHeight);

    // Prevenir scroll del body durante interacción
    if (swiperElement) {
        swiperElement.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        }, { passive: true });

        swiperElement.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, { passive: true });
    }
});





  