document.addEventListener('DOMContentLoaded', () => {
    animSequence()
})

// последовательная анимация карточек
function animSequence() {
    const lists = document.querySelectorAll('[data-anim-list]')

    if(!lists.length) return

    const counter = 10

    lists.forEach((list, i) => {
        const animType = list.getAttribute('data-anim-list') ? list.getAttribute('data-anim-list') : 'fade-up'
        const items = list.querySelectorAll('[data-anim-item]')
        const anchorId = 'list' + i

        list.setAttribute('data-anim-id', anchorId)

        items.forEach((item, id) => {
            setAttributes(item, {
                'data-aos': `${animType}`,
                'data-aos-delay': `${id < counter ? id * 200 : counter * 200}`,
                'data-aos-anchor': `[data-anim-id="${anchorId}"]`
            })
        })
        
    })
}