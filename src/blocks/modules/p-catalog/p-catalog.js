function pCatalogBanner() {
    const catalogSections = document.querySelectorAll('[data-js="pCatalog"]')

    if(!catalogSections.length) return

    catalogSections.forEach(section => {
        const banner = section.querySelector('[data-js="productBanner"]')
        const list = section.querySelector('[data-js="pCatalogList"]')

        if(banner && list) {
            const columns = getGridColumnCount(list)
            const items = list.children
            console.log(columns)
            banner.style.gridColumn = `1 / ${columns + 1}`
            list.insertBefore(banner, items[columns - 1].nextSibling)

        }
    })
}

function getGridColumnCount(gridElement) {
    if (!gridElement) return 0;
    
    const computedStyle = window.getComputedStyle(gridElement);
    if (computedStyle.display !== 'grid') {
        return 0;
    }
    
    const templateColumns = computedStyle.getPropertyValue('grid-template-columns');
    const columns = templateColumns.split(' ').filter(width => width !== '0px').length;
    
    return columns || 1;
}