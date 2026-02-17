function ciMedia() {
    const ciMediaList = document.querySelectorAll('[data-js="ciMedia"]')

    if(!ciMediaList.length) return

    ciMediaList.forEach(ciMedia => {
        const slider = ciMedia.querySelector('[data-js="ciMediaSlider"]')
        const thumbs = ciMedia.querySelector('[data-js="ciMediaThumbs"]')
        let thumbsEx = null
        let sliderEx = null

        if(thumbs) {
            thumbsEx = new Swiper(thumbs, {
                slidesPerView: 'auto',
                direction: 'vertical',
                spaceBetween: 10,
                breakpoints: {
                    1801: {
                        spaceBetween: 24
                    }
                }
            })
        }

        if(slider) {
            sliderEx = new Swiper(slider, {
                slidesPerView: 1,
                effect: 'fade',
                thumbs: {
                    swiper: thumbsEx
                }
            })
        }

    })
}