function filterBlockCollapse() {
    const filterBlocks = document.querySelectorAll('[data-js="filterBlock"][collapsible]')

    if(!filterBlocks.length) return

    filterBlocks.forEach(block => {
        const content = block.querySelector('[data-js="filterBlockContent"]');
        const header = block.querySelector('[data-js="filterBlockHeader"]');
        const maxHeight = content.scrollHeight;

        block.classList.add('filter-block--collapsible');

        header.addEventListener('click', () => {
            if(block.classList.contains('expanded')) {
                content.style.maxHeight = '0px';
                block.classList.remove('expanded')
            } else {
                content.style.maxHeight = maxHeight + 'px';
                block.classList.add('expanded')
            }
        })

    })
}

function filterMobile() {
    const filters = document.querySelectorAll('[data-js="catalogFilter"]')

    if(!filters.length) return

    filters.forEach(filter => {
        const parent = filter.parentElement;
        const opens = parent.querySelectorAll('[data-js="catalogFilterOpen"]');
        const closes = parent.querySelectorAll('[data-js="catalogFilterClose"]');
        const overlay = parent.querySelector('.catalog-filter__overlay')
        
        opens.forEach(open => {
            open.addEventListener('click', () => {
                filterOpen(filter, overlay)
            })
        })

        closes.forEach(close => {
            close.addEventListener('click', () => {
                filterClose(filter, overlay)
            })
        })
    })
}

function filterOpen(filter, overlay) {
    lockBody();
    filter.classList.add('opened');
    filter.style.transition = 'all 0.3s linear';
    overlay?.classList.add('active');
}

function filterClose(filter, overlay) {
    filter.classList.remove('opened');
    overlay?.classList.remove('active');
    unlockBody();
}