function gallerySlider() {
    const galleries = document.querySelectorAll('[data-js="gallerySlider"]')

    if(!galleries.length) return

    galleries.forEach(gallery => {
        const slider = gallery.querySelector('[data-js="gallerySliderSlider"]')
        const controls = gallery.querySelector('[data-js="sliderControls"]')
        let prev = controls ? controls.querySelector('[data-js="sliderPrev"]') : null
        let next = controls ? controls.querySelector('[data-js="sliderNext"]') : null
        const ww = window.innerWidth
        let slidesPerView = gallery.dataset.slides ? parseInt(gallery.dataset.slides) : 2

        if(ww < 1024 && gallery.dataset.slides) {
            slidesPerView = 2.5
        }
        
        if(slider) {
            const swiperEx = new Swiper(slider, {
                slidesPerView: 1.2,
                spaceBetween: 12,
                navigation: {
                    prevEl: prev,
                    nextEl: next
                },
                breakpoints: {
                    501: {
                       slidesPerView: slidesPerView 
                    },
                    1024: {
                       spaceBetween: 24, 
                       slidesPerView: slidesPerView 
                    }
                },
                on: {
                    init: (swiper) => {
                        if(swiper.slides.length > swiper.params.slidesPerView && controls) {
                            controls.classList.add('active')
                        }
                    }
                }
            })
        }
    })
}