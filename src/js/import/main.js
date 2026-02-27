function lockBody() {
	$('body').addClass('no-scroll');

    let scrollbarWidth = getScrollbarWidth()

    $('body').css('padding-right', scrollbarWidth)
    $('[data-js="siteHeader"]').css('padding-right', scrollbarWidth)
}

function unlockBody() {
	$('body').removeClass('no-scroll');
    $('body').css('padding-right', 0);
    $('[data-js="siteHeader"]').css('padding-right', 0)
}

function getScrollbarWidth() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const jsTemplatePath = (typeof SITE_TEMPLATE_PATH !== 'undefined' && SITE_TEMPLATE_PATH ? SITE_TEMPLATE_PATH + '/' : '');

document.addEventListener('DOMContentLoaded', () => {
    $('[data-js="customScrollbar"]').each((index, el) => {
        new SimpleBar(el, { autoHide: false });
    })
    fancyboxInit()
    anchorsInit()
})

// Инициализация фансибокса
function fancyboxInit() {
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: '<svg><use xlink:href="'+jsTemplatePath+'img/sprites/sprite.svg#slider_prev"></use></svg>',
                nextTpl: '<svg><use xlink:href="'+jsTemplatePath+'img/sprites/sprite.svg#slider_next"></use></svg>',
              },
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            enabled: true,
            display: {
                left: [],
                middle: [],
                right: [
                  "close",
                ],
            },
        }

    });
}

// добавление аттрибутов элементу
function setAttributes(el, list) {
    if(Object.keys(list).length > 0) {
        Object.entries(list).forEach(([key, value]) => {
            el.setAttribute(key, value)
        });

    }
}

// подсчёт колонок в гриде
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

// якорные ссылки
function anchorsInit() {

    const anchors = document.querySelectorAll('a[href^="#"]');

    if(anchors.length < 1) return

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const anchorName = this.getAttribute('href').replace('#', '');
            const targetEl = document.getElementById(anchorName);
            let scrollTopOffset = document.querySelector('[data-js="siteHeader"]') ? document.querySelector('[data-js="siteHeader"]').offsetHeight : '0'
            const targetElPos = Math.ceil($(targetEl).offset().top - scrollTopOffset)

            window.scrollTo({
                top: targetElPos,
                behavior: 'smooth'
            })
    
        });
    });
}