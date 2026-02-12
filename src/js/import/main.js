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
    animSequence()
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

// последовательная анимация карточек
function animSequence() {
    const lists = document.querySelectorAll('[data-anim-list]')

    if(!lists.length) return

    const counter = 10

    lists.forEach((list, i) => {
        const animType = list.getAttribute('data-anim-list') ? getAttribute('data-anim-list') : 'fade-up'
        const items = list.querySelectorAll('[data-anim-item]')
        const anchorId = 'list' + i

        list.setAttribute('data-anim-id', anchorId)

        items.forEach((item, id) => {
            setAttributes(item, {
                'data-aos': `${animType}`,
                'data-aos-delay': `${id < counter ? id * 200 : counter * 200}`,
                'data-aos-anchor': `[data-anim-id="${anchorId}"]`
            })
        })
        
    })
}

// добавление аттрибутов элементу
function setAttributes(el, list) {
    if(Object.keys(list).length > 0) {
        Object.entries(list).forEach(([key, value]) => {
            el.setAttribute(key, value)
        });

    }
}