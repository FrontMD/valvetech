function copyText() {
    const blocks = document.querySelectorAll('[data-js="copyText"]')

    if(!blocks.length) return

    blocks.forEach(block => {
        const content = block.querySelector('[data-js="copyTextContent"]')
        const btn = block.querySelector('[data-js="copyTextBtn"]')
        const notice = block.querySelector('[data-js="copyTextNotice"]')

        if(content && btn) {
            btn.addEventListener('click', () => {
                const text = content.innerText
                writeCopy(text)
            })
        }

        async function writeCopy(text) {
            await navigator.clipboard.writeText(text)

            if(notice) {
                notice.classList.add('active')
                await delay(1500)
                notice.classList.remove('active')
            }
        }
    })
}