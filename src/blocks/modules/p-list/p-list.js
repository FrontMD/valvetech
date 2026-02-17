function pListCentered() {
    const blocks = document.querySelectorAll('[data-js="pList"]')

    if(!blocks.length) return

    blocks.forEach(block => {
        const list = block.querySelector('[data-js="pListItems"]')
        
        if(list) {
            const columns = getGridColumnCount(list)
            const cards = [...list.children]
            const width = cards[0].offsetWidth

            if(cards.length < columns) {
                cards.forEach(card => {
                    card.style.width = width + 'px'
                })
    
                list.style.display = `flex`
                list.style.justifyContent = `center`
            }
        }
    })
}