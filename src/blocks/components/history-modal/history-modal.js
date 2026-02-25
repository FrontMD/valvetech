function historyModal() {
    // развернуть/свернуть текст
    textItems = historyModal.querySelectorAll('[data-js="collapsibleTextWrapper"]')

    if(textItems.length > 0) {
        
        const maxLines = 3;
        const showMoreLayout =  `
                                <span class="show">Развернуть</span>
                                <span class="hide">Свернуть</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                `
        
        const lineHeight = window.getComputedStyle(textItems[0]).lineHeight;
        let shortHeight = parseFloat(lineHeight) * maxLines;
    
        textItems.forEach(textItem => {
        
            let fullHeight = textItem.offsetHeight;

            if(fullHeight > shortHeight) {


                let showHideBtn = document.createElement('button');
                showHideBtn.setAttribute('type', 'button');
                showHideBtn.classList.add('collapsible-text__btn');
                showHideBtn.innerHTML = showMoreLayout

                let collapsibleText = document.createElement('div');
                collapsibleText.classList.add("collapsible-text")
    
                textItem.before(collapsibleText)

                collapsibleText.appendChild(textItem)
                collapsibleText.appendChild(showHideBtn)

                textItem.style.maxHeight = shortHeight + 'px'
                
                showHideBtn.addEventListener('click', function(e) {
                    if(collapsibleText.classList.contains('collapsible-text--opened')) {
                        collapsibleText.classList.remove('collapsible-text--opened')
                        textItem.style.maxHeight = shortHeight + 'px'
                    } else {
                        collapsibleText.classList.add('collapsible-text--opened')
                        textItem.style.maxHeight = fullHeight + 'px'
                    }
                })
            }
 
        })
        
    }

    // прогресс скролла
    const historyModalProgress = historyModal.querySelector('[data-js="historyModalProgress"]');
    const historyModalScroller = historyModal.querySelector('[data-js="historyModalScroller"]');

    if(historyModalProgress && historyModalScroller) {
        
        const progressTopPosition = parseInt(window.getComputedStyle(historyModalProgress).getPropertyValue('top'));
        const scrollerGap = parseInt(window.getComputedStyle(historyModalScroller).getPropertyValue('gap'));
        const line = historyModalScroller.querySelector('[data-js="historyModalProgressLine"]');
        const blockHeight = historyModalScroller.offsetHeight;
        let blockScrollHeight = historyModalScroller.scrollHeight;
        let startScrollHeight = blockScrollHeight;

        const rows = historyModalScroller.querySelectorAll('[data-js="historyModalRow"]')
        const points = historyModalScroller.querySelectorAll('[data-js="historyModalPoint"]')

        let lineHeight = blockScrollHeight - progressTopPosition
        let pointPercentsArr = getpointPercentsArr()

        historyModalProgress.style.height = lineHeight + 'px';

        scrollController()

        historyModalScroller.addEventListener('scroll', scrollController)

        historyModalScroller.addEventListener("transitionend", function () {
            historyModalProgress.style.height = startScrollHeight - progressTopPosition + 'px';
            blockScrollHeight = historyModalScroller.scrollHeight;
            lineHeight = blockScrollHeight - progressTopPosition;
            pointPercentsArr = getpointPercentsArr();
            historyModalProgress.style.height = lineHeight + 'px';
            scrollController()
        }, false);

        function scrollController() {
            let fullScroll = blockScrollHeight - blockHeight
            let currentProgress = fullScroll > 0 ? historyModalScroller.scrollTop / fullScroll * 100 : 100

            line.style.height = currentProgress + '%'

            pointPercentsArr.forEach((pointPercent, index) => {
                if(currentProgress >= pointPercent) {
                    points[index].classList.add('active')
                } else {
                    points[index].classList.remove('active')
                }
            })
           
        }

        function getpointPercentsArr() {
            let arr = []
            let acc = 0
            rows.forEach((row, index) => {

                if(index == 0) {
                    acc = 0
                } else {
                    acc += rows[index - 1].offsetHeight + scrollerGap
                }

                arr.push(Math.round(acc / lineHeight * 100))

            })

            return arr
        }
        
    
    }
}

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