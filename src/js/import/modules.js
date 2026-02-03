@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")
@@include("../../blocks/modules/main-burger/main-burger.js")
@@include("../../blocks/modules/preloader/preloader.js")

document.addEventListener('DOMContentLoaded', () => {
    header();
    preloader();
    modalsInit();
    mainBurger();
})