function contactsMap() {
    const maps = document.querySelectorAll('[data-js="contactsMap"]')

    if(!maps.length) return

    maps.forEach(mapEl => {
        let coordsList = mapEl.dataset.coords ? mapEl.dataset.coords.replace(/\s/g,"").split("-") : ['57.998042,56.266634']

        console.log(mapEl.dataset.coords)

        ymaps.ready(function () {

            let center = coordsList[0].split(',')

            let windowWidth = window.innerWidth
            let zoom = 12;

            if(windowWidth < 768) {
                zoom = 12
            }
        
            let map = new ymaps.Map(mapEl, {
                center: center,
                zoom: zoom,
                controls: []
            });

            let myGeoObjects = []
            
            coordsList.forEach(placemark => {
                
                let currentPlacemark = new ymaps.Placemark(
                    placemark.split(","),
                    {},
                    {
                        openEmptyBalloon: false,
                        iconLayout: 'default#image',
                        iconImageHref: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='30' fill='white'/%3E%3Cg clip-path='url(%23clip0_478_1477)'%3E%3Cmask id='mask0_478_1477' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='14' y='13' width='156' height='34'%3E%3Cpath d='M169.2 13.5H14V46.485H169.2V13.5Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_478_1477)'%3E%3Cpath d='M31.8753 23.1996L35.3572 24.4314V26.4151L31.8753 25.1835V23.1996ZM17.3165 31.46V27.4652L22.1625 25.7506V25.3322L16.918 27.1873V31.46H15.9746C15.4055 29.8987 15.0946 28.2155 15.0946 26.4601C15.0946 21.245 17.8335 16.6634 21.9656 14.0445C21.4722 13.6647 20.784 13.6613 20.284 14.0323C19.6413 14.5093 18.912 15.1756 18.38 15.6848C17.7793 16.2599 17.232 16.8876 16.7616 17.5711C16.6809 17.6882 16.6018 17.8067 16.5241 17.9261C14.3716 20.8444 14.0279 25.5346 14.0279 25.5346C14.01 25.8412 14 26.1493 14 26.4601C14 26.7707 14.01 27.079 14.0279 27.3851C14.0279 27.3851 14.4694 32.4887 16.5241 34.9941C16.8622 35.5148 17.2302 36.0145 17.6259 36.4911L15.3136 40.2503C17.0071 42.0138 19.0219 43.4719 21.2652 44.5337L24.1652 41.196C24.7438 41.42 25.3386 41.6115 25.9476 41.7685L26.3104 46.1539C27.5039 46.3707 28.7336 46.485 29.9903 46.485C31.2471 46.485 32.4768 46.3707 33.6703 46.1539L34.0333 41.7685C34.6421 41.6115 35.2371 41.42 35.8157 41.196L38.7155 44.5337C40.9587 43.4719 42.9736 42.0138 44.6671 40.2503L42.355 36.4911C42.7502 36.0145 43.1186 35.5148 43.4565 34.9941C43.4565 34.9941 45.8336 31.6081 45.9527 27.3851C45.9706 27.079 45.9807 26.7707 45.9807 26.4601C45.9807 26.1493 45.9706 25.8412 45.9527 25.5346C45.9527 25.5346 45.5829 20.9403 43.4565 17.9261C43.4531 17.9207 43.4497 17.9157 43.4463 17.9105C42.8541 17 42.1425 16.1713 41.3483 15.4266C40.7969 14.9099 40.0731 14.2788 39.3147 13.7507C38.8046 13.3953 38.1176 13.4198 37.6353 13.8112C41.9783 16.3858 44.8862 21.0867 44.8862 26.4601C44.8862 28.2155 44.5751 29.8987 44.0061 31.46H43.0625V27.1873L37.8182 25.3322V31.46H36.9544V23.3268L31.4825 21.391V15.5098L29.9904 14.0338V20.8631V31.46H23.4248V26.5716V23.6046L25.7743 22.7732V22.3546V22.3544V19.8173L24.4627 18.52V22.8185L23.0264 23.3267V31.46H17.3165ZM28.542 18.1428L27.2266 16.8415V22.2595L28.542 21.7943V18.1428ZM24.6234 26.4151L28.1054 25.1835V23.1996L24.6234 24.4315V26.4151Z' fill='%23000000'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_478_1477'%3E%3Crect width='32' height='33' fill='white' transform='translate(14 13.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
                        iconImageSize: [60, 60],
                        iconImageOffset: [-30, -30],
                    }
                );

                myGeoObjects.push(currentPlacemark)
                
            });

            var clusterer = new ymaps.Clusterer({
                gridSize: 120,
                preset: 'islands#redClusterIcons'
            });

            clusterer.add(myGeoObjects);

            map.geoObjects.add(clusterer);


        });
    })
}