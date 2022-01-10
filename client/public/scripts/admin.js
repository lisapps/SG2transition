// ### ADMIN CLASS ### //
(function() {

    var adminProperties = {};
    
    var AdminManager = function() {
        return this;
    }

    this.AdminManager = new AdminManager();

})();

// ### AJAX HANDLER ### //
(function() {
    
    // --- PRIVATE PROPERTEIS --- //
    var fnQueue;

    // --- CONSTRUCTOR --- //
    var AJAX = function() {
        return this;
    }

    // --- PUBLIC METHODS --- //
    AJAX.prototype.getData = function(options, fn) {
        var oReq = new XMLHttpRequest();
        var oReqMethod = (options.method) ? options.method : "POST";
        oReq.addEventListener("progress", ajaxProgress);
        oReq.addEventListener("load", ajaxComplete);
        oReq.addEventListener("error", ajaxFailed);
        oReq.addEventListener("abort", ajaxCanceled);
        oReq.open(oReqMethod, options.url);
        oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        oReq.send(JSON.stringify(options.data));

        fnQueue = fn;
    }
    AJAX.prototype.postData = function() {

    }

    // --- PRIVATE METHODS --- //
    function ajaxProgress (oEvent) {
        if (oEvent.lengthComputable) {
            var percentComplete = oEvent.loaded / oEvent.total * 100;
            // ...
        } else {
            // Unable to compute progress information since the total size is unknown
        }
    }
    function ajaxComplete() {
        fnQueue(this.response);
    }
    function ajaxFailed() {
        console.log('error');
    }
    function ajaxCanceled() {
        console.log("The transfer has been canceled by the user.");
    }

    this.AdminManager.ajax = new AJAX();

})();

// ### FORM CLASS ### //
(function() {

    // ### PRIVATE PROPERTIES ### //
    var fnList = {};
    var _change = false;

    // ### CONSTRUCTOR ### //
    function Form() {
        
        var _forms = document.querySelectorAll("form");
        

        for(let f = _forms.length; f > 0; f--) {
            let _form = _forms[f-1];
            if(_form.classList.contains("js-reactive")) activateReactiveForms(_form);
            _form.addEventListener("submit", formSubmit);
        }
    }

    // ### PUBLIC METHODS ### //
    Form.prototype.addFormAction = function(obj) {
        fnList[obj.id] = obj.fn;
    }
    
    // ### PRIVATE METHODS ### //
    function activateReactiveForms(_jsForm) {
        var _inputs = _jsForm.querySelectorAll("input,textarea,select");
        for(let i = _inputs.length; i > 0; i--) {
            let _input = _inputs[i-1];
            _input.addEventListener("focus", reactFocus);
            _input.addEventListener("change", reactChangeEvent);
            _input.addEventListener("blur", reactBlurEvent);
        }
    }

    function reactFocus(e) {
        console.log('focused');
    }

    function reactChangeEvent(e) {
        // let type = this.type;
        let _form = this.form;
        let tag = this.tagName.toLowerCase();
        _change = true;
        if(tag === "select") fnList[_form.id](_form);
    }

    function reactBlurEvent(e) {
        // let type = this.type;
        let _form = this.form;
        let tag = this.tagName.toLowerCase();
        if(_change) {
            _change = false;
            if(tag != "select") fnList[_form.id](_form);
        } 
    }

    function formSubmit(e) {
        e.preventDefault();
        fnList[this.id](this);
    }

    this.AdminManager.forms = new Form();
})();

// ### ITEM EDITOR ### //
(function() {

    var keyLinks = document.querySelectorAll(".e-keyLink");
    var _outputDisplay = document.getElementById("output");
    var _formsClass = this.AdminManager.forms;
    var _ajax = this.AdminManager.ajax;
    var fd, _output, keyLink;
    var a = 0;

    // -- activate navigation actions
    for(a = (keyLinks.length - 1); a >= 0; a--) {
        keyLink = keyLinks[a];
        keyLink.addEventListener("click", function(e) {
            let _ajax = window.AdminManager.ajax;
            _ajax.getData({
                url: "/api/elements/" + this.dataset.key,
                method: "GET"
            }, showOutput)
        })
    }


    // -- register new item form
    _formsClass.addFormAction({
        "id": "adminNewItem",
        "fn": updateOutput
    })

    // -- register new default form
    _formsClass.addFormAction({
        "id": "adminNewDefault",
        "fn": addDefault
    })
    
    
    
    // --- New Item Functions --- //
    function updateOutput(form) {
        fd = new FormData(form);
        _ajax.getData({
            url: "/api/schema/item",
            data: updateValues(fd)
        }, showOutput);
    }

    function updateValues(_fd) {
        let _obj = {};
        _fd.forEach(function(value, key) {
            if(!_obj.hasOwnProperty(key)){
                _obj[key] = value;
                return;
            }
            if(!Array.isArray(_obj[key])){
                _obj[key] = [_obj[key]];    
            }
            _obj[key].push(value);
        });
        return _obj;
    }
    
    function showOutput(str) {
        _output = JSON.parse(str);
        console.log(_output.name);
        _outputDisplay.innerHTML = str;
    }


    // --- New Default Functions --- //
    let _historyBlock;
    let _dataDefaults = {};
    var selectDataType = document.getElementById("typeSelect");
    selectDataType.addEventListener("change", updateForm);

    function addDefault(form) {
        fd = new FormData(form);
        let dataValues = Object.entries(updateValues(fd));
        console.log(dataValues);
        // _ajax.getData({
        //     url: window.location.href,
        //     data: updateValues(fd)
        // }, function() {
        //     console.log(this);
        // });
        form.reset();
    }

    function updateForm() {
        let inputBlock;
        switch(this.value) {
            case "number":
                inputBlock = document.getElementById("numberValue");
                break;
            case "boolean":
                inputBlock = document.getElementById("booleanValue");
                break;
            default:
                inputBlock = document.getElementById("stringValue");
        }

        // -- activate/deactivate inputs
        let _inputs = inputBlock.querySelectorAll("input,textarea");
        for(let i = _inputs.length; i > 0; i--) {
            let _input = _inputs[i-1];
            _input.disabled = false;
        }

        // -- update visibility
        if(_historyBlock) {
            _historyBlock.classList.add("u-invisible");
            let _historyInputs = _historyBlock.querySelectorAll("input,textarea");
            for(let h = _historyInputs.length; h > 0; h--) {
                let _historyInput = _historyInputs[h-1];
                _historyInput.disabled = true;
                console.log(_historyInput);
            }
        }
        inputBlock.classList.remove("u-invisible");
        _historyBlock = inputBlock;
    }
    updateForm();   

})();