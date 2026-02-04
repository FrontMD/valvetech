function preloader() {
    const preloader = document.querySelector('[data-js="preloader"]')

    if(!preloader) return

    lockBody()
    preloaderAnim()

    async function preloaderAnim() {
        const bg = preloader.querySelector('[data-js="preloaderBg"]')
        const text = preloader.querySelector('[data-js="preloaderText"]')

        bg?.classList.add('animated')
        text?.classList.add('animated')
    }

}