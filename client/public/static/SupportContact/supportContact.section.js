(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "s-supportContact";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
    var components;
    
    var resizeDelay = 250;
    var resizeTimeout;

    var mobileSize = 512;

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

	// -- Verify if any dependecies are needed
	/*
		Format is very much the same as the condition above
	*/

	// ################### //
	// ### CONSTRUCTOR ### //
    // ################### //
    
	function SupportContact() {
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //

        components = document.getElementsByClassName(rootClass);
        
		if (components) {
            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                
                var supportCards = component.getElementsByClassName(rootClass + "__card");

                setHeight(supportCards);
            }

            window.addEventListener("resize", resizeAction);
		}
	}


	
    function setHeight(supportCards) {
        var supportCard;
        var minHeight = [];
        var setHeight;

        for (b = (supportCards.length - 1); b >= 0; b--) {
            supportCard = supportCards[b];
            
            if (supportCard.classList.contains("c-accordion")) {
                var accordionTab = supportCard.getElementsByClassName("c-accordion__tab")[0];
                var accordionTabHeight = accordionTab.offsetHeight;
                minHeight.push(accordionTabHeight);
            }
            
        }

        if (minHeight.length > 1) setHeight = Math.max.apply(Math, minHeight);

        if (setHeight) {
            for (b = (supportCards.length - 1); b >= 0; b--) {
                supportCard = supportCards[b];
                var accordionTab = supportCard.getElementsByClassName("c-accordion__tab")[0];
                accordionTab.style.minHeight = setHeight + "px";
            }
        }
    }


    // -- triggers on resize event
	function resizeAction() {

		// -- limit resize action to fire at "end" of resize
		if(resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);

	}

	// -- action that runs at end of window resize
	function resizeTimeoutAction() {
        var component;
        for (a = (components.length - 1); a >= 0; a--) {
            component = components[a];
            
            var supportCards = component.getElementsByClassName(rootClass + "__card");

            if (window.innerWidth < mobileSize) {
                for (b = (supportCards.length - 1); b >= 0; b--) {
                    supportCard = supportCards[b];
                    if (supportCard.classList.contains("c-accordion")) {
                        var accordionTab = supportCard.getElementsByClassName("c-accordion__tab")[0];
                        accordionTab.style.minHeight = 0 + "px";
                    }
                }
            } else {
                for (b = (supportCards.length - 1); b >= 0; b--) {
                    supportCard = supportCards[b];
                    if (supportCard.classList.contains("c-accordion")) {
                        var accordionTab = supportCard.getElementsByClassName("c-accordion__tab")[0];
                        if (!accordionTab.classList.contains("c-accordion__tab--active")) {
                            accordionTab.classList.add("c-accordion__tab--active");
                        }
                    }
                }
                setHeight(supportCards);
            }
        }
	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new SupportContact();
})();