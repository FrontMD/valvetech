function historyModalProgress() {
    const modals = document.querySelectorAll('[data-js="historyModal"]')

    if(!modals.length) return

    modals.forEach(modal => {
        const progress = modal.querySelector('[data-js="historyModalProgress"]')
        const rows = modal.querySelectorAll('[data-js="historyModalRow"]')

        if(progress && rows.length) {
            progress.style.height = `calc(100% - ${rows[rows.length - 1].offsetHeight}px)`
        }
    })
}