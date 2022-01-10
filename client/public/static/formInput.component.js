(function() {

	// ************************** //
	// *** PRIVATE PROPERTIES *** //
	// ************************** //
	var _root,
		components,
		component,
		DropDown,
		_tooltips,
		_timer;
	var selectLog = {};
	var formEvent = new CustomEvent("ftChange");

	// ******************* //
	// *** CONSTRUCTOR *** //
	// ******************* //
	function FormInput() {

		// -- check if rexus has been initiated
		if(!window.Rexus) return this.msg = "Rexus not found...";

		checkForTooltips();

		// -- check if drop down exists
		if(!window.Rexus.dropDown) {
			if(document.querySelector(".f-input__select"))
				return this.msg = "ERROR :: Drop Down Class must be imported";
			else
				this.msg = "WARN :: Drop Down class has not be initialized; class is requred for select menus";
		} else {
			DropDown = window.Rexus.dropDown;
			expandDropDown();
		}

		// -- test if event exists
		if(!window.Rexus.formInput) window.addEventListener("click", deactivateFormDropDowns);

		components = document.querySelectorAll(".f-input");

		_root = this;
		
		// -- begin initiation process
		initiateForms();
	}

	// ************************ //
	// *** EXPAND DROP DOWN *** //
	// ************************ //

	function expandDropDown() {
		DropDown.constructor.prototype.formDropDown = function(selectContainer) {
			// -- verify there is an input element present
			if(!selectContainer) {
				this.msg = "Failed to load form drop down element";
				return this.msg;
			}

			// -- generate and gather elements from drop down template
			var cDropDown = this.createDropDown();
			var cDropDownToggler = cDropDown.querySelector(".c-dropDown__toggler");
			var cDropDownPanel = cDropDown.querySelector(".c-dropDown__panel");			
			cDropDown.dataset.root = component.dataset.id;

			// -- append new click listener to toggler
			cDropDownToggler.addEventListener("click", activateFormDropDown);

			// -- gather data from original select menu			
			var optionElement;
			var selectElement = selectContainer.getElementsByTagName("select")[0];
			var optionElements = selectContainer.getElementsByTagName("option");				
			var labelElement = selectContainer.getElementsByTagName("label")[0];
			_root.tmpID = window.Rexus.cuid.generate("tmp");
			selectElement.id = (selectElement.id) ? selectElement.id : window.Rexus.cuid.generate("sel");

			// -- generate new list container for drop down menu
			var cDropDownPanelItems = document.createElement("ul");
			cDropDownPanelItems.classList.add("c-dropDown__panel__items");
			cDropDownPanelItems.dataset.reference = selectElement.id;
			if(selectElement.hasAttribute("multiple")) cDropDownPanelItems.dataset.multiple = true;

			// -- hide original element
			selectElement.style.display = "none";
			// selectElement.classList.add('u-hide');

			// -- create and append toggle field
			var _togglerData, cDropDownInput;

			if(component.classList.contains("f-input--searchable"))
				_togglerData = _root.newInput("string", null, true);
			else _togglerData = _root.newInput("string", null);

			cDropDownToggler.appendChild(_togglerData);
			cDropDownInput = cDropDownToggler.querySelector("input");
			if(!component.classList.contains("f-input--searchable")) cDropDownInput.disabled = true;
			else {
				cDropDownInput.addEventListener("keyup", function() {
					var _input = this;
					var _pRoot = _input.parentNode.parentNode.parentNode.parentNode.dataset.root;
					var _options = {
						searchString: _input.value,
						selectArray: selectLog[_pRoot],
						optionPanel: cDropDownPanelItems
					}

					setRootID(this.id);
					clearTimeout(_timer);
					_timer = setTimeout(timeoutFilter, 500, _options);
				})
			}
			// -- create and append individual listing elements
			
			var optionParamsArray = [];
			var hasSelected = false;
			for(var i = 0; i < optionElements.length; i++) {

				// -- cycle options list to determine which should be currently selected
				optionElement = optionElements[i];
				var optionParams = {};
				if(optionElement.selected && optionElement.textContent != "") {
					hasSelected = true;
					if(!selectContainer.parentNode.classList.contains("f-input--changed")){
						optionParams.selected = true;
						_togglerData.getElementsByTagName("input")[0].value = optionElement.textContent;
						selectContainer.parentNode.classList.add("f-input--changed");
						selectContainer.parentNode.dispatchEvent(formEvent);
					}
				}

				// -- select first available item; giving preselect priority
				if(i==(optionElements.length-1) && !hasSelected) {
					optionElements[0].selected = true;
				}

				// -- disable any empty <option> elements
				if(optionElement.textContent=="") optionElement.disabled = true;
								
				// -- if <option> validates successfully, generate <li> objects
				
				if(optionElement.textContent) {
					optionParams.title = optionElement.textContent;
					optionParams.index = i;
				}

				optionParamsArray.push(optionParams);
			}

			selectLog[cDropDown.dataset.root] = optionParamsArray;
			var listings = getOptionsMarkup(optionParamsArray, cDropDownPanelItems.dataset.multiple);
			for(var i = 0; i < listings.length; i++) {
				var listing = listings[i];
				cDropDownPanelItems.appendChild(listing.li);
			}
			cDropDownPanel.appendChild(cDropDownPanelItems);
			return cDropDown;
		}
	}

	var filterValue = null;
	function timeoutFilter(options) {
		var listings;
		if(options.searchString.length < 1) {
			listings = getOptionsMarkup(options.selectArray);
		} else {
			options.selectArray.push(options.searchString);

			var filtered = options.selectArray.filter(filterAction);
			filterValue = null;
			listings = getOptionsMarkup(filtered);
		}

		options.optionPanel.innerHTML = "";
		for(var i = 0; i < listings.length; i++) {
			var listing = listings[i];
			options.optionPanel.appendChild(listing.li);
		}
	}

	function filterAction(item, _i, ogArray) {
		if(!filterValue) filterValue = ogArray.pop();
		if(item.title) {
			var targetValue = item.title.toLowerCase();
			if(targetValue.indexOf(filterValue.toLowerCase()) < 0) return false;
			else return true;
		} else return false;
	}
	
	// function redrawPanel(list) {
	// 	var listings = getOptionsMarkup(list);
	// 	for(var i = 0; i < listings.length; i++) {
	// 		var listing = listings[i];
	// 		cDropDownPanelItems.appendChild(listing.li);
	// 	}
	// 	console.log(listings);
	// }


	// ********************** //
	// *** PUBLIC METHODS *** //
	// ********************** //

	// ### INPUT MODIFIERS ### //
	// vvvvvvvvvvvvvvvvvvvvvvv //

	// -- apply new value to input/textarea
	FormInput.prototype.setValue = function(inputElement, inputValue) {

		// -- validate user input
		inputElement = verifyElement(inputElement);
		if(!inputElement) return false;
		// console.log("THE INPUT:", inputElement);

		// -- detect if drop down
		var inputSelect = inputElement.querySelector("select");

		inputElement.classList.add("f-input--changed");
		inputElement.dispatchEvent(formEvent);
		if(inputSelect) {
			inputSelect.value = inputValue;
			if(inputSelect.selectedIndex >= 0)
				inputElement.querySelector("input").value = inputSelect.options[inputSelect.selectedIndex].text;
			else {
				inputElement.querySelector("input").value = "";
				inputElement.classList.remove("f-input--changed");
			}
		} else if(inputElement.querySelector("input"))
			inputElement.querySelector("input").value = inputValue;
		else if(inputElement.querySelector("textarea"))
			inputElement.querySelector("textarea").value = inputValue;
	}

	// -- apply valid state to input group
	FormInput.prototype.setValid = function(inputElement) {

		// -- validate user input
		inputElement = verifyElement(inputElement);
		if(!inputElement) return false;

		//reserved space for valid input
	}

	// -- apply invalid state to input group
	FormInput.prototype.setInvalid = function(inputElement) {

		// -- validate user input
		inputElement = verifyElement(inputElement);
		if(!inputElement) return false;

		//reserved space for invalid input
	}

	// -- apply disabled state to input group
	FormInput.prototype.setDisabled = function(inputElement) {

		// -- validate user input
		inputElement = verifyElement(inputElement);
		if(!inputElement) return false;

		// -- change state to disabled
		inputElement.classList.add("f-input--disabled");

		// -- disable inputs when container is disabled
		var inputs = inputElement.querySelectorAll("input, textarea");
		for(var i = 0; i < inputs.length; i++) {
			var input = inputs[i];
			if(input) input.disabled = true;
		}
		
		// -- disable dropdown when container is disabled
		var cDropDown = inputElement.querySelector(".c-dropDown");
		if(cDropDown) cDropDown.classList.add("c-dropDown--disabled");
	}

	// -- apply enabled state to input group
	FormInput.prototype.setEnabled = function(inputElement) {

		// -- validate user input
		inputElement = verifyElement(inputElement);
		if(!inputElement) return false;

		// -- change state to enabled
		inputElement.classList.remove("f-input--disabled");

		// -- disable input when container is disabled
		var inputs = inputElement.querySelectorAll("input, textarea");
		for(var i = 0; i < inputs.length; i++) {
			var input = inputs[i];
			if(input) input.removeAttribute("disabled");
		}
		
		// -- disable dropdown when container is disabled
		var cDropDown = inputElement.querySelector(".c-dropDown");
		if(cDropDown) cDropDown.classList.remove("c-dropDown--disabled");
	}

	// -- add new options to drop down menus
	FormInput.prototype.addOptions = function(selectElement, selectOptions, replaceAll) {
		// -- validate user input
		selectElement = verifyElement(selectElement);
		if(!selectElement) return false;

		// -- generate new listing elements/assign targets		
		var _targetSelect = selectElement.querySelector("select");
		var _targetPanel = selectElement.querySelector(".c-dropDown__panel ul");
		var _targetParams = _targetPanel.querySelector("li:last-of-type");
		var listings = getOptionsMarkup(selectOptions, _targetSelect.multiple);
		var newIndex = parseInt(_targetParams.dataset.index, 10) + 1;

		// -- append or replace new listing elements
		if(replaceAll) {
			// -- clear panel
			_targetPanel.innerHTML = "";
			newIndex = 1;

			// -- clear select tag
			_targetSelect.innerHTML = "";

			// -- add empty primary option
			var emptyOption = document.createElement("option");
			emptyOption.hidden = true;
			emptyOption.disabled = true;
			emptyOption.selected = true;
			_targetSelect.appendChild(emptyOption);

			// -- reset drop down
			var linkedInput = document.getElementById(_targetParams.dataset.input);
			selectElement.classList.remove("f-input--changed");
			linkedInput.value = "";
		}

		for(var i = 0; i < listings.length; i++) {
			var listing = listings[i];
			var liElement = listing.li;
			var optElement = listing.option;
			// -- apply params to li and append
			liElement.dataset.input = _targetParams.dataset.input;
			liElement.dataset.index = newIndex + i;
			_targetPanel.appendChild(liElement);			

			// -- append options to select element
			_targetSelect.appendChild(optElement);

			// -- simulate multiple select
			if(listing.selected) liElement.click();
		}
	}

	// -- apply tooltip to input group
	FormInput.prototype.addTooltip = function(inputElement, txt, type) {

		// -- validate user input
		inputElement = verifyElement(inputElement);
		if(!inputElement) return false;
	}

	// ### MARKUP BUILDERS ### //
	// vvvvvvvvvvvvvvvvvvvvvvv //

	// -- generate new input (except for drop downs)
	FormInput.prototype.newInput = function(type, label, searchable) {
		// -- declare parent div of "f-input"
		var fInput = document.createElement("div");
		fInput.classList.add("f-input");

		switch(type) {
			case "select":
				console.log("create select");
				break;
			case "checkbox":

				// -- declare input type
				var fInputType = document.createElement("div");
				fInputType.classList.add("f-input__checkbox");
				fInput.appendChild(fInputType);

				// -- create HTML markup of input element
				var fInputTypeElement = document.createElement("input");
				fInputTypeElement.type = "checkbox";
				fInputType.appendChild(fInputTypeElement);

				// -- apply label
				var fInputLabel = document.createElement("label");
				fInputLabelText = document.createTextNode(label);
				fInputLabel.appendChild(fInputLabelText);
				fInputType.appendChild(fInputLabel);				
				return fInput;

				break;
			case "radio":

				// -- declare input type
				var fInputType = document.createElement("div");
				fInputType.classList.add("f-input__radio");
				fInput.appendChild(fInputType);

				// -- create HTML markup of input element
				var fInputTypeElement = document.createElement("input");
				fInputTypeElement.type = "radio";
				fInputType.appendChild(fInputTypeElement);

				// -- apply label
				var fInputLabel = document.createElement("label");
				fInputLabelText = document.createTextNode(label);
				fInputLabel.appendChild(fInputLabelText);
				fInputType.appendChild(fInputLabel);				
				return fInput;

				break;
			default:

				// -- generate search icon if searchable feature is enabled
				if(searchable) {
					var iconSearch = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.2 16.7"><path d="M9.8 0C5.7 0 2.4 3.3 2.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4S13.9 0 9.8 0zm0 12.8c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"/><path d="M4.5 10.5L.4 14.6c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l4.1-4.1"/></svg>';
					var eIcon1 = document.createElement("e-icon");
					eIcon1.classList.add("f-input__icon");
					eIcon1.innerHTML = iconSearch;
					fInput.appendChild(eIcon1);
				}

				// -- declare input type
				var fInputType = document.createElement("div");
				fInputType.classList.add("f-input__string");
				fInput.appendChild(fInputType);					
				
				// -- create HTML markup of input element
				var fInputTypeElement = document.createElement("input");
				fInputTypeElement.type = "text";
				fInputTypeElement.id = this.tmpID;
				fInputType.appendChild(fInputTypeElement);

				// -- create label from existing template
				var rootLabel = component.getElementsByTagName("label")[0];
				fInputLabel = rootLabel.cloneNode(true);
				rootLabel.parentNode.removeChild(rootLabel);
				fInputLabel.setAttribute("for", this.tmpID);
				fInputType.appendChild(fInputLabel);

				// -- generate drop down icon
				var iconArrowDown = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"><path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"/></svg>';
				var eIcon2 = document.createElement("e-icon");
				eIcon2.classList.add("f-input__icon");
				eIcon2.innerHTML = iconArrowDown;
				fInput.appendChild(eIcon2);

				return fInput;
		}
	}


	// *********************** //
	// *** PRIVATE METHODS *** //
	// *********************** //

	// ### EVENT HANDLERS ### //
	// vvvvvvvvvvvvvvvvvvvvvv //

	// -- input/textarea focus state
	function isFocused(e) {
		var parent = document.querySelector("[data-id=" + this.dataset.root + "]");
		if(parent.classList.contains("f-input--reactive") && this.value == "")
			this.addEventListener("keyup", keyUpAction);
		parent.classList.add("f-input--active"); // Activate Root Node

		if(checkForTooltips() && parent.classList.contains("c-tooltip")) _tooltips.multiFormInputToggle(parent);
	}

	// -- input/textarea change state
	function isChanged(e) {
		var parent = document.querySelector("[data-id=" + this.dataset.root + "]");
		parent.classList.add("f-input--changed");
		parent.dispatchEvent(formEvent);
	}

	// -- input/textarea blurred state
	function isBlurred(e) {
		
		// -- reset form to normal state after blur
		var parent = document.querySelector("[data-id=" + this.dataset.root + "]");
		parent.classList.remove("f-input--active"); // Kill Root Node Activation
		if(!this.value && parent.classList.contains("f-input--changed"))
			parent.classList.remove("f-input--changed");

		if(checkForTooltips()) _tooltips.clearTooltips();
	}

	// -- input/textarea autofill event (prototype)
	function isAutofilled(target, animationName) {
		/* #### prototype for browser autofill listeners #### */
		switch(animationName) {
			case "onAutoFillStart":
				// console.log('change -- autofill action');
				break;
			case "onAutoFillCancel":
				// console.log('defaulted -- autofill action');
				break;
		}
	}

	// -- drop down listings click event
	function optionElementClick(e) {
		var parentSelect = this.parentNode;
		console.log(parentSelect);
		var selectReference = document.getElementById(parentSelect.dataset.reference);
		var inputReference = document.getElementById(this.dataset.input);
		var parentRoot = document.querySelector("[data-id=" + inputReference.dataset.root + "]");
		var multipleSelect = (parentSelect.dataset.multiple) ? true : false;

		// console.log("### CHANGES ###");
		// console.log("ParentRoot:", parentRoot);
		// console.log("Input Reference:", inputReference);
		// console.log("-----\n\n");
		
		if(multipleSelect) {
			e.stopPropagation();
			var innerCheckbox = this.querySelector("input[type='checkbox']");
			var optionList = selectReference.getElementsByTagName("option");
			var optionReference = optionList[this.dataset.index];
			var nameInt = 0;

			// -- select checkbox
			innerCheckbox.checked = !innerCheckbox.checked;

			// -- select option item
			optionReference.selected = !optionReference.selected;

			// -- update value
			inputReference.value = "";
			for(var i = 0; i < optionList.length; i++) {
				if(optionList[i].selected && optionList[i].value) {
					if(nameInt > 0) inputReference.value += ", ";
					inputReference.value += optionList[i].textContent;
					nameInt++;
				}
			}

			if(inputReference.value == "") {
				parentRoot.classList.remove("f-input--changed");
				return false;
			}
		} else {
			selectReference.selectedIndex = this.dataset.index;
			inputReference.value = this.textContent;
		}
		parentRoot.classList.add("f-input--changed");
		parentRoot.dispatchEvent(formEvent);
	}

	// -- applies a changed state on keyup (used for reactive inputs)
	function keyUpAction(e) {
		var parent = document.querySelector("[data-id=" + this.dataset.root + "]");
		parent.classList.add("f-input--changed");
		parent.dispatchEvent(formEvent);
		this.removeEventListener("keyup", keyUpAction);
	}

	// -- update size of textarea based on content
	function resizeTextarea() {
		var el = this;
		setTimeout(function() {
			el.style.height = "auto";
			el.style.height = el.scrollHeight + "px";
		},0);
	}

	// -- expand drop down
	function activateFormDropDown(e) {

		// -- get root drop down component
		var parentNode = this.parentNode;
		var parentForm;

		// -- detect if component is nested in a form
		parentForm = document.querySelector("[data-id=" + parentNode.dataset.root + "]");

		// -- Clear out other active drop downs		
		if(parentForm.classList.contains("f-input--active")) {
			parentForm.classList.remove("f-input--active");
			return false;
		}
		deactivateFormDropDowns();

		// -- do not open if disabled
		if(parentForm.classList.contains("f-input--disabled")) return false;

		// -- do not open if opened and search enabled
		if(parentForm.classList.contains("f-input--searchable") && parentForm.classList.contains("f-input--active")) {
			var _target = e.target;
			if(_target.classList.contains("f-input__icon")) disableDropActive();
			return false;
		}

		// -- set focus on input when opened
		if(parentForm.classList.contains("f-input--searchable") && !parentForm.classList.contains("f-input--active")) {
			var searchInput = this.querySelector("input[type=text]");
			searchInput.focus();
		}

		// -- set an active state for anything other than a searchable drop down
		if(!parentForm.classList.contains("f-input--searchable"))
			parentForm.classList.add("f-input--active");
	}

	// -- deactivate root parent of drop down
	function deactivateFormDropDowns() {
		var activeInputs = document.querySelectorAll(".f-input.f-input--active .c-dropDown");
		if(activeInputs) {
			for(var a = 0; a < activeInputs.length; a++) {
				var activeInput = activeInputs[a];
				var rootParent = document.querySelector("[data-id=" + activeInput.dataset.root + "]");

				// -- deactivate root node and drop down
				rootParent.classList.remove("f-input--active");
				activeInput.classList.remove("c-dropDown--active");
			}
		}		
	}

	// -- check if tooltips is available
	function checkForTooltips() {
		if(window.Rexus.tooltip) _tooltips = window.Rexus.tooltip
		return (_tooltips) ? true : false;
	}

	// -- reset root id
	function setRootID(id) {
		_root.tmpID = id;
	}

	// ### MARKUP BUILDERS ### //
	// vvvvvvvvvvvvvvvvvvvvvvv //

	function getOptionsMarkup(options, multiple) {
		var listings = [];
		// var selected;
		for(var i = 0; i < options.length; i++) {

			var option = options[i];
			if(option.title) {

				var listingObj = {};

				// -- generate and prepare listing item
				var listingElement = document.createElement("li");
				listingElement.dataset.index = (option.index) ? option.index : i;
				listingElement.dataset.input = _root.tmpID;

				// -- create appropriate listing based on multiple or single select
				if(multiple) {
					listingElement.appendChild(_root.newInput("checkbox",option.title));
					// if(option.selected) listingObj.selected = true;
				} else {
					listingElement.appendChild(document.createTextNode(option.title));
					// if(option.selected) selected = { id: i };
				}

				// -- apply call to action on listing
				listingElement.addEventListener("click", optionElementClick);

				listingObj.li = listingElement;

				// if(option.value) {
				// 	// -- generate and prepare listing item
				// 	var optionElement = document.createElement("option");
				// 	optionElement.value = option.value;
				// 	optionElement.appendChild(document.createTextNode(option.title));
				// 	listingObj.option = optionElement;
				// }

				// if(option.selected) {
				// 	console.log(optionElement);
				// 	optionElement.selected = true;
				// 	if(multiple) {
				// 		var checkbox = listingElement.querySelector("input");
				// 		checkbox.checked = true;
				// 	}
				// }

				// -- append it to array
				listings.push(listingObj);
			}
		}
		// if(selected) {
		// 	var _target = listings[selected.id];
		// 	_target.selected = true;
		// }
		// console.log("listings:", listings);
		return listings;
	}

	// ### VALIDATORS ### //
	// vvvvvvvvvvvvvvvvvv //

	// -- verify if input is an actual element
	function verifyElement(input) {
		if(typeof input === "string") {
			var inputObj = document.getElementById(input);
			if(inputObj) return inputObj;
			else return false;
		} else if(input instanceof Element) {
			return input;
		} else return false;
	}

	// ### ACTION HANDLERS ### //
	// vvvvvvvvvvvvvvvvvvvvvvv //

	// -- validate markup and apply correct state based on class
	function setInputState(formInput, fn) {
		var stringInputs = formInput.querySelector(".f-input__string, .f-input__select");
		var checkInputs = formInput.querySelectorAll(".f-input__checkbox, .f-input__radio");
		if(stringInputs) fn(formInput);
		else if(checkInputs) {
			for(var i = 0; i < checkInputs.length; i++) {
				var checkInput = checkInputs[i];
				fn(checkInput);
			}
		} else console.log("INVALID SYNTAX");
	}

	// -- toggle password visiblity
	function togglePassword() {
		var inputReference = document.querySelector("[data-id=" + this.dataset.root + "] input");
		var svgReference = this.querySelector("svg");
		var inputType = inputReference.type;
		if(svgReference.hasAttribute("style")) svgReference.removeAttribute("style");
		else svgReference.style.fill = "#000";
		if(inputType == "password") inputReference.type = "text";
		else inputReference.type = "password";
	}

	// -- initialize form properties
	function initiateForms() {
		if(components) {
			for(var i = 0; i < components.length; i++) {
				// -- gather properties per element
				component = components[i];
				// component.tabIndex = 0; // make focusable <<<<<<<
				if(component.dataset.id) continue;
				var inputClasses = component.classList;

				// -- apply unique identifier to each element
				var inputID = window.Rexus.cuid.generate("fi");
				component.dataset.id = inputID;

				// -- kill title if not used with radio button/checkbox
				var inputTitle = component.querySelector(".f-input__title");
				if(inputTitle) {
					if(!component.querySelector(".f-input__radio") && !component.querySelector(".f-input__checkbox")) {
						component.removeChild(inputTitle);
					}
				}

				// -- allow wrapping for checkboxes/radio buttons
				if(component.querySelector(".f-input__checkbox, .f-input__radio")) {
					component.style.flexWrap = "wrap";
					component.style.borderStyle = "none";
				}

				// -- activate drop down menu
				var fSelect = component.querySelector(".f-input__select");
				if(fSelect) {
					var cDropDown = DropDown.formDropDown(fSelect);
					var fSelectElement = fSelect.querySelector("select");
					var listGroup = cDropDown.querySelector("ul");

					// -- determine height of each list item
					var listHeight = parseInt(window.getComputedStyle(document.body, null).getPropertyValue("line-height"),10);

					// -- set the amount of items visible in drop down
					var cDropViewLimit = (fSelectElement.dataset.viewLimit) ? fSelectElement.dataset.viewLimit : 5;

					// -- determine root font size of document
					var rootEm = parseInt(window.getComputedStyle(document.body, null).getPropertyValue("font-size"),10);

					// -- convert height pixels to EMs
					var maxHeightValue = (listHeight/rootEm)*cDropViewLimit;
					listGroup.style.maxHeight = maxHeightValue + "em";

					// -- setting root id to select item
					fSelectElement.dataset.root = inputID;

					// -- append drop down to select element
					fSelect.appendChild(cDropDown);
				}

				// -- attach listeners to correct elements
				var inputField = component.querySelector(".f-input__string input, .f-input__string textarea");
				if(inputField) {

					// -- set parent id reference
					inputField.dataset.root = inputID;

					// -- set event listeners
					inputField.addEventListener("focus", isFocused);
					inputField.addEventListener("change", isChanged);
					if(!fSelect) inputField.addEventListener("blur", isBlurred);
					inputField.addEventListener("animationstart", isAutofilled); // prototype for autofill

					if(inputField.tagName.toLowerCase() === "textarea")
						inputField.addEventListener("keyup", resizeTextarea);

					// -- detect and convert placeholders to tooltips
					if(inputField.hasAttribute("placeholder")) {
						var tooltip = (window.Rexus.tooltip) ? window.Rexus.tooltip : null;
						var _o = {};
						
						if(tooltip) {
							_o.target = component;
							_o.text = inputField.getAttribute("placeholder");
							inputField.removeAttribute("placeholder");
							tooltip.createTooltip(_o);
						} else {
							inputField.removeAttribute("placeholder");
							console.log("WARN :: General placeholders not supported, must include 'Tooltips' class to convert placeholders into tooltips")
						}
					}

					// -- detect if using as password field
					if(inputField.type === "password") {
						var showPassIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 30"><path d="M22,0A23.65,23.65,0,0,0,0,15a23.63,23.63,0,0,0,44,0A23.64,23.64,0,0,0,22,0Zm0,25A10,10,0,1,1,32,15,10,10,0,0,1,22,25ZM22,9a6,6,0,1,0,6,6A6,6,0,0,0,22,9Z"/></svg>';
						var showPass = document.createElement("a");
						showPass.href = "javascript: void(0)";
						showPass.dataset.root = inputID;
						showPass.classList.add("f-input__icon");
						showPass.innerHTML = showPassIcon;
						showPass.addEventListener("click", togglePassword);
						component.classList.add("f-input--reactive");
						component.appendChild(showPass);
					}

					// -- activate change state for inputs with value
					if(inputField.value) {
						component.classList.add("f-input--changed");
						component.dispatchEvent(formEvent);
					}
				}

				// -- attach change listeners to radios/checkboxes
				var checkField = component.querySelector(".f-input__checkbox input, .f-input__radio input");
				if(checkField) {

					// -- set parent id reference
					checkField.dataset.root = inputID;

					// -- set event listeners
					checkField.addEventListener("change", isChanged);
				}

				// -- parse classes to set appropriate state properties
				for(var b = 0; b < inputClasses.length; b++) {
					var inputClass = inputClasses[b];
					switch(inputClass) {
						case "f-input--valid":
							setInputState(component, _root.setValid);
							break;
						case "f-input--invalid":
							setInputState(component, _root.setInvalid);
							break;
						case "f-input--disabled":
							setInputState(component, _root.setDisabled);
							break;
						// case "f-input--searchable":
						// 	setInputState(component, setSearchable);
					}
				}
			}

		} else {
			return this.msg = "No Input Elements to Initiate";
		}
	}

	// -- initiate into Rexus object
	window.Rexus.formInput = new FormInput();
})();