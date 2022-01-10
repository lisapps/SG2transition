(function() {

    // ### CONSTRUCTOR ### //
    var cExplorers = function() {
        var components = document.querySelectorAll(".c-explorer");
        if(components) {
            for(var a = 0; a < components.length; a++) {
                var component = components[a];
                var componentBtns = component.querySelectorAll("button");

                for(var b = 0; b < componentBtns.length; b++) {
                    var componentBtn = componentBtns[b];
                    componentBtn.addEventListener("click", actionEvent);
                }
            }
        }
    }

    // ### PRIVATE METHODS ### //
    function actionEvent() {
        var action = this.dataset.action;
        var _target = document.getElementById(this.dataset.target);
        switch(action) {
            case "edit":                
                toggleEditableItems(_target);
                _target.classList.add("c-explorer__listing--active");
                break;
            case "delete":
                console.log('DELETE ME');
                break;
            case "save":
                toggleEditableItems(_target);
                _target.classList.remove("c-explorer__listing--active");
                break;
            case "cancel":
                toggleEditableItems(_target);
                _target.classList.remove("c-explorer__listing--active");
                break;
        }
    }

    function toggleEditableItems(target) {
        var _contentEditable = target.querySelectorAll("[contenteditable]");
        for(var i = 0; i < _contentEditable.length; i++) {
            var obj = _contentEditable[i];
            if(obj.contentEditable == "false") obj.contentEditable = "true";
            else obj.contentEditable = "false";
        }
    }

    this.Rexus.explorer = new cExplorers();
})();