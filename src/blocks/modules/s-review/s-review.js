function sReviewSlider() {
    const reviewsSections = document.querySelectorAll('[data-js="sReview"]')

    if(!reviewsSections.length) return

    reviewsSections.forEach(gallery => {
        const slider = gallery.querySelector('[data-js="sReviewItems"]')
        const controls = gallery.querySelector('[data-js="sliderControls"]')
        let prev = controls ? controls.querySelector('[data-js="sliderPrev"]') : null
        let next = controls ? controls.querySelector('[data-js="sliderNext"]') : null

        if(slider) {
            const swiperEx = new Swiper(slider, {
                slidesPerView: 1.2,
                spaceBetween: 12,
                navigation: {
                    prevEl: prev,
                    nextEl: next
                },
                breakpoints: {
                    768: {
                       slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 2,
                       spaceBetween: 24, 
                    },
                    1261: {
                       slidesPerView: 3,
                       spaceBetween: 24,
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