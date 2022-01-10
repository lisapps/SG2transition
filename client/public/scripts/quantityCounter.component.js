(function() {
    var components = document.getElementsByClassName("js-quantity");
    var componentsLog = {};
    var a = components.length - 1;
    var component, quantityBtns, quantityInput;

    if(components) {
        for(a; a>=0; a--) {
            component = components[a];
            component.id = "jsQuantity" + a;

            // -- activate buttons
            quantityBtns = component.getElementsByClassName("js-quantity__btn");
            quantityBtns[0].addEventListener("click", updateQuantity);
            quantityBtns[0].classList.add("f-quantity__counter__btn--disable");
            quantityBtns[0].setAttribute("tabindex", "-1");
            quantityBtns[1].addEventListener("click", updateQuantity);
            quantityBtns[1].dataset.add = true;

            // -- activate input
            quantityInput = component.getElementsByTagName("input")[0];
            quantityInput.addEventListener("blur", inputQuantity);
            if(!quantityInput.name && component.dataset.name)
                quantityInput.name = component.dataset.name;
            else quantityInput.name = "fQuantity" + a;

            // -- prepare value tracking
            if(!componentsLog[component.id]) componentsLog[component.id] = {}
            componentsLog[component.id]["value"] = 1;
            componentsLog[component.id]["input"] = quantityInput;
        }
    }

    // ### PRIVATE METHODS ### //
    function inputQuantity() {
        var rootID = this.parentNode.parentNode.id;
        var isNum = /^\d{1,2}$/.test(this.value);
        console.log("hi", isNum);
        if(isNum) componentsLog[rootID]['value'] = parseInt(this.value, 10);
        else componentsLog[rootID]['value'] = 1;
        if(componentsLog[rootID]['value'] < 2) componentsLog[rootID]['value'] = 1;
        if(componentsLog[rootID]['value'] > 99) componentsLog[rootID]['value'] = 99;
        componentsLog[rootID]['input'].value = componentsLog[rootID]['value'];
    }

    function updateQuantity(e) {
        e.preventDefault();

        var rootID = this.parentNode.parentNode.id;
        var counter = this.parentNode;
        if(this.dataset.add) componentsLog[rootID]['value']++;
        else componentsLog[rootID]['value']--;
        if(componentsLog[rootID]["value"] >= 2 || componentsLog[rootID]["value"] <= 98 ) {
            var disabledBtn = counter.getElementsByClassName("f-quantity__counter__btn--disable")[0];
            if (disabledBtn) {
                disabledBtn.classList.remove("f-quantity__counter__btn--disable");
                disabledBtn.setAttribute("tabindex", "");
            }
        }
        if(componentsLog[rootID]['value'] <= 1) {
            this.classList.add("f-quantity__counter__btn--disable");
            this.setAttribute("tabindex", "-1");
            componentsLog[rootID]['value'] = 1;
        }
        if(componentsLog[rootID]['value'] >= 99) {
            this.classList.add("f-quantity__counter__btn--disable");
            this.setAttribute("tabindex", "-1");
            componentsLog[rootID]['value'] = 99;
        }

        componentsLog[rootID]['input'].value = componentsLog[rootID]['value'];
    }
})();