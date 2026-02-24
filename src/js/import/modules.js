@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")
@@include("../../blocks/modules/main-burger/main-burger.js")
@@include("../../blocks/modules/preloader/preloader.js")
@@include("../../blocks/modules/p-catalog/p-catalog.js")
@@include("../../blocks/modules/catalog-item/catalog-item.js")
@@include("../../blocks/modules/p-list/p-list.js")
@@include("../../blocks/modules/gallery-slider/gallery-slider.js")
@@include("../../blocks/modules/accordion/accordion.js")
@@include("../../blocks/modules/s-review/s-review.js")

document.addEventListener('DOMContentLoaded', () => {
    header();
    preloader();
    modalsInit();
    mainBurger();
    pCatalogBanner();
    ciMedia();
    pListCentered();
    gallerySlider();
    accordion();
    sReviewSlider();
})