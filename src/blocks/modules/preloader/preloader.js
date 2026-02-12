function preloader() {
    const preloader = document.querySelector('[data-js="preloader"]')

    if(!preloader) return

    lockBody()
    preloaderAnim()

    async function preloaderAnim() {
        const bg = preloader.querySelector('[data-js="preloaderBg"]')
        const text = preloader.querySelector('[data-js="preloaderText"]')
        const textList = text?.querySelectorAll('span')

        if(text) {
            text.addEventListener('transitionend', async function() {
                if(textList.length) {
                    for(let i = 0; i < textList.length; i++) {
                        textList[i].classList.add('animated')
                        await delay(200)
                    }
                }
                endPreloader()
            })
        } else {
            endPreloader(1600)
        }

        await delay(500)

        bg?.classList.add('animated')
        text?.classList.add('animated')

    }

    async function endPreloader(coeff = 0) {
        await delay(1000 + coeff)
        preloader.style.opacity = '0',
        await delay(1000)
        AOS.init({
            offset: 100,
            duration: 600,
            delay: 100,
        });
        preloader.remove()
        unlockBody()
    }

}