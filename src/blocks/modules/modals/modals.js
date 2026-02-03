
let modals = false

function modalsInit() {
    modals = new HystModal({
        linkAttributeName: "data-modal",
        beforeOpen: function () {
            lockBody()
            check3d()
        },
        afterClose: function () {
            unlockBody()
        }
    });
}

let load3d=false;

function check3d() {

    let modelEl = document.getElementById('d3-model-wrap')
    
    if(!modelEl) return

    if(load3d===false){
        main3d(modelEl.dataset.mtl, modelEl.dataset.obj);
        load3d=true;
    }
}

