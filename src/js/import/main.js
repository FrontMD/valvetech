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
 
})

// Фоновый слайдер
/*function sectionBgSlider() {
    const sectionBgSliders = document.querySelectorAll('[data-js="sectionBgSlider"]')

    if(sectionBgSliders.length < 1) return

    sectionBgSliders.forEach(slider => {
        const sliderEx = new Swiper(slider, {
            slidesPerView: 1
        })
    })
}*/



// Инициализация фансибокса
/*function fancyboxInit() {
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: '<svg><use xlink:href="'+jsTemplatePath+'img/sprites/sprite.svg#chevron_slider_prev"></use></svg>',
                nextTpl: '<svg><use xlink:href="'+jsTemplatePath+'img/sprites/sprite.svg#chevron_slider_next"></use></svg>',
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
}*/

// добавление аттрибутов элементу
function setAttributes(el, list) {
    if(Object.keys(list).length > 0) {
        Object.entries(list).forEach(([key, value]) => {
            el.setAttribute(key, value)
        });

    }
}