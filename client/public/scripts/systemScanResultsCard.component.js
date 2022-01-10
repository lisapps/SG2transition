(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //
	/*
		These act as a "const" variables, a type of variables that
		act as a global and aren't inteded to be redifined within the class module.
	*/
	var rootClass = "c-systemScanResultsCard";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");

    var components;
    var mobileSize = 512;

    var radioBtnSelected = null;

    var low = 35;
    var medium = 75;
    var high = 100;

	var resizeDelay = 300;
	var resizeTimeout;

	// -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	// ################### //
	// ### CONSTRUCTOR ### //
	// ################### //
	function SystemScanResultsCard() {
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //
		components = document.getElementsByClassName(rootClass);
		if (components) {
            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                if (!component.id) component.id = "systemScanResultsCard" + a;

                //-- Future Feature with the Radio Checkboxes
                // var checkBoxes = component.getElementsByClassName(rootClass + "__content__section__item__info__checkBox");
                // if (checkBoxes) {
                //     var checkBox;
                //     for (b = (checkBoxes.length - 1); b >=0; b--) {
                //         checkBox = checkBoxes[b];
                //         var parent = checkBox.parentElement.parentElement;
                //         parent.addEventListener("click", toggleCheck);
                //     }
                // }

                var header = component.getElementsByClassName(rootClass + "__header")[0];
                var upgradeAccordion = component.getElementsByClassName(rootClass + "__content__upgrades")[0];

                if (upgradeAccordion) var upgradeAccordionTab = upgradeAccordion.getElementsByClassName(rootClass + "__content__upgrades__header")[0];
                if (window.innerWidth >= mobileSize) {
                    header.classList.add("c-accordion__tab--active"); 
                    if (upgradeAccordion) upgradeAccordionTab.classList.add("c-accordion__tab--active");
                }
            }
            window.addEventListener("resize", resizeAction);
		}
	}


	// ###################### //
	// ### PUBLIC METHODS ### //
	// ###################### //


	// ####################### //
	// ### PRIVATE METHODS ### //
    // ####################### //

    //-- Future Feature with the Radio Checkboxes

    // function toggleCheck() {
    //     var section = this.parentElement;
    //     var checkBoxes = section.getElementsByTagName("input");

    //     var radioBtn = this.getElementsByClassName(rootClass + "__content__section__item__info__checkBox")[0];
    //     var radioBtnInput = radioBtn.getElementsByTagName("input")[0];
    //     radioBtnSelected = radioBtnInput.id;

    //     var checkBox;
    //     for (a = (checkBoxes.length -1); a >= 0; a--) {
    //         checkBox = checkBoxes[a];
    //         if (checkBox.id == radioBtnSelected) checkBox.checked = true;
    //         else checkBox.checked = false;
    //     }
    // }

    // -- triggers on resize event
	function resizeAction() {

		// -- limit resize action to fire at "end" of resize
		if(resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);

	}

	// -- action that runs at end of window resize
	function resizeTimeoutAction() {

	}
	
	// -- initiate into Rexus object
	$SUPER[objectName] = new SystemScanResultsCard();
})();