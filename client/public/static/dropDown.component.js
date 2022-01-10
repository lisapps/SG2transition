(function() {

    // ########################## //
    // ### PRIVATE PROPERTIES ### //
    // ########################## //
    /*
        These act as a "const" variables, a type of variables that
        act as a global and aren't inteded to be redifined within the class module.
    */
    var rootClass = "c-dropDown";
    var typePrefix = rootClass.charAt(0);
    var objectName = rootClass.replace(typePrefix + "-", "");

    var resizeDelay = 250;
    var components, resizeTimeout;
    var activeDropDown = null;

    // -- Verify if manager exists
    /*
        The manager is intended to be as a service to the other modules
        you can (should) register the module to the manager using it's ID
        so that it can be quickly referenced when cross-communication is needed
    */
    var $SUPER = (this.Rexus) ? this.Rexus : false;
    if(!$SUPER) {
        console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
        return;
    }


    function DropDown() {

        components = document.getElementsByClassName(rootClass);
        
        if (components) {
            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                component.id = (component.id) ? component.id : "dropDown" + a;

                var cmpChildren = component.children;
                var cmpChildrenCount = (cmpChildren.length-1);
                var toggler = cmpChildren[0];


				//- hover check
				if (component.classList.contains(rootClass + "--hover")) {
                    component.addEventListener('mouseover', function(e) {
						if(window.innerWidth>=767) toggleDropDown(e);
					});
                    component.addEventListener('mouseout', function(e) {
						if(window.innerWidth>=767) toggleDropDown(e);
					});
				}
				toggler.addEventListener("click", function(e) {
					let element = e.currentTarget;
					let _root;

					if (element.classList.contains(rootClass)) _root = element;
					else _root = element.parentNode;

					if (_root.classList.contains(rootClass+"--hover")) {
						if(window.innerWidth<=767) toggleDropDown(e);
					} else toggleDropDown(e);
				});

				toggler.setAttribute("aria-expanded", "false");

				var panelID;
				if (toggler.getAttribute("aria-controls")) {
					panelID = toggler.getAttribute("aria-controls")
				} else {
					panelID =  "dropDownPanel" + a;
					toggler.setAttribute("aria-controls", panelID);
				}

                var panel = cmpChildren[cmpChildrenCount];

				if (panel != toggler) panel.id = panelID;
				
                switch (component.dataset.type) {
					case "selection": 
                        var liItems = panel.getElementsByTagName("li");
                        var liItem;

                        var inputSelection = toggler.getElementsByTagName("span")[0];
                        var inputSelectionValue = inputSelection.getElementsByClassName(rootClass + "__toggler__selection__value")[0];
                    
                        if (liItems.length > 0) {
                            inputSelectionValue.innerText = liItems[0].textContent;
                            liItems[0].classList.add(rootClass + "__panel__item--active");
                            for (b = (liItems.length - 1); b >= 0; b--) {
                                liItem = liItems[b];
                                liItem.addEventListener("click", selectionChange);
                            }
                        }
                        break;
                }
			}
		}
		document.addEventListener("click", deactivateAllDropDowns);
		window.addEventListener("resize", resizeAction);
	}


	// -- initialize drop down component
	//DropDown.prototype.init = function() {}

	// -- update drop down component
	//DropDown.prototype.update = function() {}
	DropDown.prototype.activeDropDown = function(dropDown) {
		dropDown.classList.add("c-dropDown--active");
		var toggler = dropDown.getElementsByClassName("c-dropDown__toggler")[0];
		var panel = toggler.nextElementSibling;
		toggler.setAttribute("aria-expanded", "true");
		panel.setAttribute("aria-hidden", "false");
	}

	// -- generate and return component
	DropDown.prototype.createDropDown = function() {

		// -- component drop down
		var cDropDown = document.createElement("div");
		cDropDown.classList.add("c-dropDown");

		// -- drop down toggler
		var cDropDownToggler = document.createElement("div");
		cDropDownToggler.classList.add("c-dropDown__toggler");
		cDropDownToggler.addEventListener("click", toggleDropDown);
		cDropDown.appendChild(cDropDownToggler);

		// -- drop down panel
		var cDropDownPanel = document.createElement("div");
		cDropDownPanel.classList.add("c-dropDown__panel");
		cDropDown.appendChild(cDropDownPanel);

		return cDropDown;
	}

	DropDown.prototype.setListSelection = function(liItem) {
		liItem.addEventListener("click", selectionChange);
	}
	
	// -- Drop Down Toggler Action -- //
	function toggleDropDown(e) {
		var _root;
		var element = e.currentTarget;

		if (element.classList.contains(rootClass)) _root = element;
		else _root = element.parentNode;

		if(_root.classList.contains("c-dropDown--disabled")) return false; // -- end script if drop down is disabled
		else e.stopPropagation(); // -- prevent other listeners from triggering

		// -- toggle active state of drop down
		_root.classList.toggle("c-dropDown--active");

		// -- deactivate any other drop downs
		if(activeDropDown && (activeDropDown != _root))
			activeDropDown.classList.remove("c-dropDown--active");

		// -- set as current active
		activeDropDown = _root;

		var toggler, panel;
		if (element.classList.contains(rootClass)) {
			toggler = element.getElementsByClassName(rootClass + "__toggler")[0]
			panel = element.getElementsByClassName(rootClass + "__panel")[0];
		} else {
			toggler = element;
			panel = toggler.nextElementSibling;
		}

		if (_root.classList.contains("c-dropDown--active")) {
			toggler.setAttribute("aria-expanded", "true");
			panel.setAttribute("aria-hidden", "false");
		}
		else {
			toggler.setAttribute("aria-expanded", "false");
			panel.setAttribute("aria-hidden", "true");
		}
	}

	// -- Update Drop Down Value -- //
	function selectionChange() {
		var panel = this.parentNode.parentNode;
		var listItems = panel.getElementsByTagName("li");
		var listItems;

		for (c = (listItems.length - 1); c >= 0; c--) {
			listItem = listItems[c];
			if (listItem.classList.contains(rootClass + "__panel__item--active")) {
				listItem.classList.remove(rootClass + "__panel__item--active");
				break;
			}
		}

		this.classList.add(rootClass + "__panel__item--active");

		var dropDown = panel.parentNode;
		var toggler = dropDown.getElementsByClassName(rootClass + "__toggler")[0];
		var inputSelection = toggler.getElementsByTagName("span")[0];
		var inputSelectionValue = inputSelection.getElementsByClassName(rootClass + "__toggler__selection__value")[0];
		inputSelectionValue.innerText = this.innerText || this.textContent;
		dropDown.classList.remove(rootClass + "--active");
	}

	// -- Deactivate all dropdowns on outside click -- //
	function deactivateAllDropDowns(e) {
		if(e && e.target!=activeDropDown) return;
		let component;
		let a = components.length - 1;
		for (a; a >= 0; a--) {
			component = components[a];
			component.classList.remove(rootClass + "--active");
		}
		activeDropDown = null;
	}

	// -- triggers on resize event
	function resizeAction() {
		// -- limit resize action to fire at "end" of resize
		if(resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(deactivateAllDropDowns, resizeDelay);
	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new DropDown();
})();