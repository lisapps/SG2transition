(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
    // ########################## //
    
	var rootClass = "c-filterCard";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
    var components;

    var filterSelected = [];
    /* 
        id
        selected: []
    */

    var filterFocusables = [];
    /* 
        id
        focusableElement
        firstFocus
        closeFocus
        applyFocus
    */


    var slideMenuRX = window.Rexus.slideMenu;

	// -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	// ################### //
	// ### CONSTRUCTOR ### //
	// ################### //
	function FilterCard() {
        
        // ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //

		components = document.getElementsByClassName(rootClass); 
		if (components) {
            
            var component, filterDropDown;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                if (!component.dataset.filterid) {
                    component.id = "filter" + a;
                    component.dataset.filterid = component.id;
                }
                else component.id = component.dataset.filterid;

                if (component.dataset.dropdown == "true") {
                    filterDropDown = document.querySelector('[data-target="'+ component.id +'"]');
                    filterDropDown.dataset.id = component.id;
                }
                
                var filterSelectedInfo = {
                    "id": component.id,
                    "selected": []
                }

                filterSelected.push(filterSelectedInfo);

                // -- Filter Radio Buttons
                var filterLis = component.getElementsByTagName("li");
                var filterLi;
                // var filterCheckBoxes = component.getElementsByClassName("f-input__checkbox");
                var filterCheckBox;
                for (b = (filterLis.length - 1); b >= 0; b--) {
                    filterLi = filterLis[b];
                    var filterCheckBox = filterLi.getElementsByClassName("f-input__checkbox")[0];
                    if (filterCheckBox) {
                        filterLi.addEventListener("keydown", detectFilterSelection);
                        var label = filterCheckBox.getElementsByTagName("label")[0];
                        label.addEventListener("click", detectFilterSelection);
                    }
                }

                //-- Setting Event Listeners to Sliders
                var filterCTA = component.getElementsByClassName(rootClass + "__details__cta")[0];
                var filterBtns = filterCTA.getElementsByTagName("button");
                var fctaReset = filterBtns[0];
                fctaReset.addEventListener("click", resetFilters);


                // //-- Setting Event Listeners to Sliders
                var fctaApply = fctaApply = filterBtns[filterBtns.length - 1];
                fctaApply.addEventListener("click", applyFilters);


                // -- Filter -- Add Event Listener to Clear All;
                if (filterDropDown) {
                    var filterPanel = filterDropDown.getElementsByClassName("c-dropDown__panel")[0];
                    var clearBtn = filterPanel.getElementsByClassName("c-dropDown__panel__clearBtn")[0];
                    clearBtn.addEventListener("click", resetFilters);
                }

                var focusableElements = component.querySelectorAll('a, .e-btn, textarea, select, details');
                // var focusableElements = component.querySelectorAll('a, .e-btn, textarea, select, details, [tabindex]:not([tabindex="-1"]');
                var firstFocusableElement = focusableElements[0];
                var closeFocusableElement = focusableElements[(focusableElements.length - 1) - 1];
                var applyFocusableElement = focusableElements[focusableElements.length - 1];

                var filterFocusableElementsInfo = {
                    "id": component.id,
                    "focusableElements": focusableElements,
                    "firstFocus": firstFocusableElement,
                    "closeFocus": closeFocusableElement,
                    "applyFocus": applyFocusableElement,
                }

                filterFocusables.push(filterFocusableElementsInfo);
                component.addEventListener("keydown", trapFocus);
            }
		}
	}


	// ###################### //
	// ### PUBLIC METHODS ### //
	// ###################### //


	// ####################### //
	// ### PRIVATE METHODS ### //
	// ####################### //

    //-- Apply Filters
    function applyFilters() {
        if (window.Rexus.overlay) window.Rexus.overlay.close();
        slideMenuRX.closePanel();
    }

    
    //-- Reset Applied Filters
    function resetFilters() {

        var filterCard, filterDropDown; 
        var hasDropDown = false;
        if (this.classList.contains(rootClass + "__details__cta__reset")) {
            filterCard = getClosestClass(this, rootClass);

            if (filterCard.dataset.dropdown == "true") {
                filterDropDown = document.querySelector('[data-id="'+ filterCard.dataset.filterid +'"]');
                hasDropDown = true;
            }

        } else {
            filterDropDown = getClosestClass(this, rootClass + "__dropDown");
            filterCard = document.querySelector('[data-filterid='+ filterDropDown.dataset.id +']');
            hasDropDown = true;
        }

        var filterUL, filterItems, filterItem;
        if (hasDropDown) {
            var filterUL = filterDropDown.getElementsByTagName("ul")[0];
            var filterItems = filterUL.getElementsByTagName("li");
            var filterItem;

            //-- Filter Applied Drop Down: Remove the li and then hide the Filter Applied Drop Down when it's empty
            for (e = (filterItems.length - 1); e >=0; e--) {
                filterItem = filterItems[e];
                filterUL.removeChild(filterItem);
            }
            filterDropDown.classList.add("u-hide");
        }

        //-- Clear the selected[] and uncheck the radio inputs for this Filter Layout
        var filterSelection;
        for (f = (filterSelected.length - 1); f >= 0; f--) {
            filterSelection = filterSelected[f];
            
            if (filterSelection.id == filterCard.dataset.filterid) {
                var selected;

                for (g = (filterSelection.selected.length - 1); g >= 0; g--) {
                    selected = filterSelection.selected[g];
                    var radioInput = selected.getElementsByTagName("input")[0];
                    radioInput.checked = false;
                    filterSelection.selected.pop();
                }
            }
        }

        //-- Filter Slider: Clear the applied number circle
        filterApply = filterCard.getElementsByClassName(rootClass + "__title")[0];
        
        filterApply.dataset.applied = "";
        filterCard.classList.remove(rootClass + "--applied");

    }

    //-- Detecting the Selected Filters
    function detectFilterSelection(e) {
        var label, fInputRadio;
        
        if (e.target) {
            
            if (e.keyCode == 9 || e.shiftKey) return;
            
            if (e.keyCode == 13) {
                fInputRadio = this.getElementsByClassName("f-input__checkbox")[0];
                label = fInputRadio.getElementsByTagName("label")[0];
            } else {
                label = this;
                fInputRadio = getClosestClass(label, "f-input__checkbox");
            }
            
        }
        
        var filterCard = getClosestClass(fInputRadio, "c-filterCard");
        var hasDropDown = false;
        
        var filterId, filterDropDown;
        if (filterCard.dataset.dropdown == "true") {
            console.log("here");
            filterDropDown = document.querySelector('[data-id="'+ filterCard.dataset.filterid +'"]');
            filterId = filterDropDown.dataset.id;
            hasDropDown = true;
        } else {
            filterId = filterCard.dataset.filterid;
        }

        var filterObj, filterDetails, filterObjLength;

        for (h = (filterSelected.length - 1); h >= 0; h--) {
            filterObj = filterSelected[h];
            console.log(filterObj);

            if (filterObj.id == filterId) {
                isFilterIdFound = true; 

                // If "selected" does not have the current filter radio button (fInputRadio), then push the current radio button into the "selected" array, and then update the Filter Applied Drop Down.

                if (!filterObj.selected.includes(fInputRadio)) {
                    filterObj.selected.push(fInputRadio);
                    filterObjLength = filterObj.selected.length;
                    if (hasDropDown) {
                        filterDetails = {
                            "id": filterId,
                            "number": filterObjLength,
                            "filter": label,
                            "filterDropDown": filterDropDown,
                        }
                        updateAppliedDropDown(filterDetails);
                    }
                } else removeApplied(fInputRadio);
            }
        }
        
        //-- Filter Slider: Update the Filter Applied Number Circle
        if (filterObjLength != null) {
            var filterApply = filterCard.getElementsByClassName(rootClass + "__title")[0];
            filterApply.dataset.applied = filterObjLength;
            
            if (!filterCard.classList.contains(rootClass + "--applied")) {
                filterCard.classList.add(rootClass + "--applied");
            }
        }
    }


    //-- Update the Filter Applied Drop Down
    function updateAppliedDropDown(_obj) {
        console.log("updating");
        var filterDropDown = _obj.filterDropDown;

        var dropDown = filterDropDown.getElementsByClassName("c-dropDown")[0];
        var dropDownPanel = dropDown.getElementsByClassName("c-dropDown__panel")[0];
        var selection = dropDown.getElementsByClassName("c-dropDown__toggler__selection")[0];
        var inputSelectionValue = selection.getElementsByClassName("c-dropDown__toggler__selection__value")[0];
        var optionList = dropDownPanel.getElementsByTagName("ul")[0];

        //-- Create the li with the Filter Applied and Close Button to remove it
        var option = document.createElement("li");
        option.innerText = _obj.filter.innerText;
        option.dataset.id = _obj.filter.getAttribute("for");
        option.dataset.filterId = _obj.id;

        var removeBtn = document.createElement("button");
        removeBtn.classList.add("c-dropDown__panel__close");
        removeBtn.innerHTML = "<svg viewBox=\"0 0 14 14\"><path d=\"M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z\"/><path d=\"M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z\"/></svg>"
        removeBtn.addEventListener("click", removeApplied);
        option.appendChild(removeBtn);
        
        //-- If there's no UL in the drop down, create it, append option to UL, and append UL to Filter Drop Down
        if (optionList == "undefined" || optionList == null ) {
            optionList = document.createElement("ul");
            optionList.appendChild(option);
            dropDownPanel.insertBefore(optionList, dropDownPanel.firstChild);
        } else optionList.appendChild(option);

        //-- Filter has been applied so remove "u-hide" to display the Filter Applied Drop Down and update the number of filters applied
        filterDropDown.classList.remove("u-hide");
        inputSelectionValue.innerText = _obj.number;  
        
        if (_obj.number > 1 && !selection.classList.contains("c-dropDown__toggler__selection--pluralActive")) {
            selection.classList.add("c-dropDown__toggler__selection--pluralActive");
        }
    }


    //-- Remove an Applied Filter from the Filter Applied Drop Down
    function removeApplied(e) {

        var appliedLI, radioButton, radioInput, filterCard, filterDropDown, hasDropDown;
        if (e.target) {
            appliedLI = this.parentElement;
            // -- Uncheck the radio button associated with removal
            radioInput = document.getElementById(appliedLI.dataset.id);
            radioInput.checked = false;
            
            // -- Remove the checked filter from array with all the selected filters
            radioButton = getClosestClass(radioInput, "f-input__checkbox");
            filterCard = getClosestClass(radioButton, rootClass);

            if (filterCard.dataset.dropdown == "true") {
                filterDropDown = getClosestClass(this, rootClass + "__dropDown");
                hasDropDown = true;
            }

        } else {

            // -- Checkbox is unchecked so it's trying to remove the dropdown items
            radioButton = e;
            radioInput = radioButton.getElementsByTagName("input")[0];
            filterCard = getClosestClass(radioButton, rootClass);
            
            if (filterCard.dataset.dropdown == "true") {
                filterDropDown = document.querySelector('[data-id="'+ filterCard.dataset.filterid +'"]');
                appliedLI = filterDropDown.querySelector('[data-id="'+ radioInput.id +'"]');
                hasDropDown = true;
            }

        }

        var filterObj, filterObjArray;
        for (i = (filterSelected.length - 1); i >= 0; i--) {
            filterObj = filterSelected[i];

            if (filterObj.id == filterCard.dataset.filterid) {
                var item;

                for (j = (filterObj.selected.length - 1); j >= 0; j--) {
                    item = filterObj.selected[j];
                    if (item == radioInput.parentElement) {
                        filterObj.selected.splice(j, j + 1);
                    }
                }
                filterObjArray = filterObj.selected;
            }
        }

        var filterTitle = filterCard.getElementsByClassName(rootClass + "__title")[0];
        if (hasDropDown) {
            var dropDown = filterDropDown.getElementsByClassName("c-dropDown")[0];
            var selection = dropDown.getElementsByClassName("c-dropDown__toggler__selection")[0];
            var inputSelectionValue = selection.getElementsByClassName("c-dropDown__toggler__selection__value")[0];
    
            // -- If all applied is removed, remove the div with the values
            if (filterObjArray.length == 0) {
                filterCard.classList.remove(rootClass + "--applied");
                filterTitle.dataset.applied = "";
                filterDropDown.classList.add("u-hide");
            } else if (filterObjArray.length == 1) {
                selection.classList.remove("c-dropDown__toggler__selection--pluralActive");
                filterTitle.dataset.applied = filterObjArray.length;
                inputSelectionValue.innerText = filterObjArray.length;
            } else {
                filterTitle.dataset.applied = filterObjArray.length;
                inputSelectionValue.innerText = filterObjArray.length;
            }
            // // -- Remove the li in the dropdown
            var filterDisplayUL = appliedLI.parentElement;
            filterDisplayUL.removeChild(appliedLI);
        } else {
            if (filterObjArray.length == 0) {
                filterCard.classList.remove(rootClass + "--applied");
                filterTitle.dataset.applied = "";
            }
            else filterTitle.dataset.applied = filterObjArray.length;
        }
    }

    function trapFocus(e) {
        var component = this;
        var filterObj;
        for (j = (filterFocusables.length - 1); j >= 0; j--) {
            filterObj = filterFocusables[j];

            if (filterObj.id == component.id) {
                var firstFocusableElement = filterObj.firstFocus;
                var closeFocusableElement = filterObj.closeFocus;
                var applyFocusableElement = filterObj.applyFocus;
            }
        }
        
        if (e.keyCode == 9 && e.shiftKey) {
			if (document.activeElement == firstFocusableElement) {
				e.preventDefault();
				if (component.classList.contains(rootClass + "--applied")) {
                    applyFocusableElement.focus();
                } else { closeFocusableElement.focus(); }
			}
		} else if (e.keyCode == 9) {
            if (document.activeElement == closeFocusableElement || document.activeElement == applyFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }   
        }
    }

    function getClosestClass(el, targetClass) {
        while (!el.classList.contains(targetClass)) {
            el = el.parentNode;
            if (!el) return null;
        }
        return el;
    }

	// -- initiate into Rexus object
	$SUPER[objectName] = new FilterCard();
})();