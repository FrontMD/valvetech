@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/copy-text/copy-text.js")
@@include("../../blocks/components/catalog-filter/catalog-filter.js")
@@include("../../blocks/components/field-range/field-range.js")

document.addEventListener('DOMContentLoaded', () => {
    validation();
    copyText();
    filterMobile();
    filterBlockCollapse();
    fieldsRangeController();
})