function fieldsRangeController() {
    const rangeFields = document.querySelectorAll('[data-js="fieldRange"]')

    if(rangeFields.length < 1) return
    
    const formater = {
        from: function (formattedValue) {
            return Number(formattedValue);
        },
        to: function (numericValue) {
            return Math.round(numericValue);
        },
        };

    rangeFields.forEach(rangeField => {
        const slider = rangeField.querySelector('[data-js="fieldRangeSlider"]');
        if(!slider.noUiSlider) {
            const min = parseInt(rangeField.dataset.min);
            const max = parseInt(rangeField.dataset.max);
            const step = parseInt(rangeField.dataset.step);
            const unit = rangeField.dataset.unit
            const isRange = rangeField.dataset.type == 'range' ? true : false
            
            let inputsList = [
                rangeField.querySelector('[data-js="fieldRangeMin"]')
            ]

            let mobTTooltips = [
                rangeField.querySelector('[data-js="fieldRangeMinVal"]')
            ]

            let sliderEx = false
            
            if(isRange) {

                inputsList.push(rangeField.querySelector('[data-js="fieldRangeMax"]'))
                mobTTooltips.push(rangeField.querySelector('[data-js="fieldRangeMaxVal"]'))

                sliderEx = noUiSlider.create(slider, {
                    start: [min, max],
                    format: formater,
                    connect: true,
                    tooltips: false,
                    step: step,
                    range: {
                        'min': min,
                        'max': max
                    }
                });

            } else {
                sliderEx = noUiSlider.create(slider, {
                    start: min,
                    format: formater,
                    connect: 'lower',
                    tooltips: false,
                    step: step,
                    range: {
                        'min': min,
                        'max': max
                    }
                });
            }

            sliderEx.on("update", function (values, handle) {
                inputsList[handle].value = values[handle]
                inputsList[handle].dispatchEvent(new Event('change'));
                mobTTooltips[handle].innerHTML = `${handle == 0 ? '<span>от</span>' : '<span>до</span>'}` + Math.round(values[handle]).toLocaleString() + `<span style="margin-left: auto;">${unit}</span>`
            });

            inputsList.forEach((currentInput, index) => {
                if(index == 0) {
                    currentInput.addEventListener('input', function() {
                        sliderEx.set([this.value, null])
                    })
                } else if(index == 1) {
                    currentInput.addEventListener('input', function() {
                        sliderEx.set([null, this.value])
                    })
                }

                currentInput.addEventListener('keydown', function(e) {
                    if (e.keyCode === 13) {
                        e.preventDefault()
                        e.stopPropagation()
                        this.blur()
                    }
                })
            })

            const parentForm = rangeField.closest('form')

            if(parentForm) {
                parentForm.addEventListener('reset', function() {
                    sliderEx.reset();
                    setTimeout(() => {
                        sliderEx.set([null, null])
                    }, 0)
                })
            }
        
        }
        
    })
}
