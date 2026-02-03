function mainBurger() {
    const menuOpenBtns = document.querySelectorAll('[data-js="mainBurgerOpen"]')
    const burger = document.querySelector('[data-js="mainBurger"]')

    if(!menuOpenBtns.length || !burger) return

    const menuCloseBtns = burger.querySelectorAll('[data-js="mainBurgerClose"]')

    
    menuOpenBtns.forEach(menuOpenBtn => {
        menuOpenBtn.addEventListener('click', () => {
            burger.classList.add('active')
            lockBody()
        })
    })

    if(menuCloseBtns.length > 0) {
        menuCloseBtns.forEach(menuCloseBtn => {
            menuCloseBtn.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                burger.classList.remove('active')
                unlockBody()
            })
        })
    }
}