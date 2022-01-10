(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "c-lineClamp";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
	var resizeDelay = 250;
	var components, resizeTimeout;

	var threshold = 5;

	// -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	// ################### //
	// ### CONSTRUCTOR ### //
	// ################### //
	function LineClamp() {
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //

		components = document.getElementsByClassName(rootClass); // -- limiting to just one inpagenav
		if(components) {
            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                applyClamp(component);
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

    function applyClamp(c) {
        var component = c;
        var lineClampText = component.firstElementChild;
        
        // -- Get total height of the content     
        var componentHeight = component.offsetHeight;
      
        // -- Returns the lineHeight property height of one line  
        var componentStyle = window.getComputedStyle(component);
        var lineHeight = parseInt(componentStyle.getPropertyValue("line-height"));

        // -- Round down soo it's better to cut off smaller than larger
		var lines = Math.floor(componentHeight / (lineHeight - threshold)); 
      
		if (lineClampText.offsetHeight > componentHeight) {
			// -- Once the lines are detected than plug it to the clamping style of the .c-lineClamp__text
			lineClampText.style.webkitLineClamp = lines; // -- minus 1 for the faux spacing
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
			var lineClampText = component.firstElementChild;
			lineClampText.style.webkitLineClamp = 0;
            applyClamp(component);
        }
	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new LineClamp();
})();