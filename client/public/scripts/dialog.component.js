(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "c-dialog";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
	var components;

	var KEYCODE = {
		SPACE: 32,
		ENTER: 13
	}


	// -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	// ################### //
	// ### CONSTRUCTOR ### //
	// ################### //
	function Dialog() {
        
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //
		components = document.getElementsByClassName(rootClass);
		if (components) {

            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];

				var header = component.getElementsByTagName("header")[0];
				if (!header.id) header.id = "dialogHeader" + a;
				
				component.setAttribute("aria-labeledby", header.id);
				
				var contentRadios = component.getElementsByClassName(rootClass + "__content__radio")[0];
				if (contentRadios) {
					var options = contentRadios.getElementsByTagName("label");
					var option;
					for (b = (options.length - 1); b >= 0; b--) {
						option = options[b];
						option.addEventListener("click", optionAction);
						option.addEventListener("keydown", optionAction);
					}
				}

                if (component.classList.contains(rootClass + "--popup")) {
                    var dialogTriggers = document.querySelectorAll("[data-popUp]");
    
                    for (b = (dialogTriggers.length - 1); b >= 0; b--) {
                        var toggleBtn = dialogTriggers[b];
                        toggleBtn.addEventListener("click", togglePopUp);
                    }
                }
            }
		}
	}


	// ###################### //
	// ### PUBLIC METHODS ### //
	// ###################### //


	// ####################### //
	// ### PRIVATE METHODS ### //
	// ####################### //

    function togglePopUp() {
        var popup = document.getElementById(this.dataset.popup);
        popup.classList.toggle(rootClass + "--active");
    }  

	function optionAction(e) {
		var type = e.type;
		var node = e.currentTarget;
		var input = node.previousElementSibling;

		if (type == "keydown") {
		
			if (e.keyCode == KEYCODE.SPACE || e.keyCode == KEYCODE.ENTER) {
				if (node.getAttribute("aria-checked") != "true") {
					input.checked = true;
					node.setAttribute("aria-checked", "true");
				}
				else {
					input.checked = false;
					node.setAttribute("aria-checked", "false");
				}
			}
		} else if (type == "click") {
			if (node.getAttribute("aria-checked") != "true") node.setAttribute("aria-checked", "true");
			else node.setAttribute("aria-checked", "false");
		}
	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new Dialog();
})();
