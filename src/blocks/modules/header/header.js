function header() {
    const header = document.querySelector("[data-js='siteHeader']");
    const isFull = header.classList.contains('site-header--full') ? true : false
    const headerSmall = header.querySelector("[data-js='siteHeaderSmall']")
    const initScroll = $(window).scrollTop();
    const headerSides = header.querySelectorAll("[data-js='siteHeaderSide']")

    let headerSmallHeight = 0

    if(headerSmall) {
        headerSmall.querySelectorAll('[data-js="siteHeaderSmallHeight"]').forEach(item => {
            if(item.offsetHeight > headerSmallHeight) {
                headerSmallHeight = item.offsetHeight
            }
        })
    }

    if(isFull) {
        let sideWidth = 0

        headerSides.forEach(item => {
            sideWidth = item.scrollWidth > sideWidth ? item.scrollWidth : sideWidth
        })

        headerSides.forEach(item => {
            item.style.minWidth = sideWidth + 'px'
        })

        if(initScroll > 20) {
            header.classList.add("site-header--fixed");
            headerSmall.style.height = headerSmallHeight + 'px';
        } else {
            
        }

        $(window).scroll(function() {
            const scroll = $(window).scrollTop();
    
            if(scroll > 40) {
                header.classList.add("site-header--fixed");
                headerSmall.style.height = headerSmallHeight + 'px';
            } else {
                header.classList.remove("site-header--fixed");
                headerSmall.style.height = '0px';
            }
        });
    } else {
        if(initScroll > 20) {
            header.classList.add("site-header--fixed");
        }

        $(window).scroll(function() {
            const scroll = $(window).scrollTop();
    
            if(scroll > 40) {
                header.classList.add("site-header--fixed");
            } else {
                header.classList.remove("site-header--fixed");
            }
        });
    }
}