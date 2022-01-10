(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //
	/*
		These act as a "const" variables, a type of variables that
		act as a global and aren't inteded to be redifined within the class module.
	*/
	var rootClass = "c-progressBar";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");

    var components;

    var low = 35;
    var medium = 75;

	// -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	// ################### //
	// ### CONSTRUCTOR ### //
	// ################### //
	function ProgressBar() {
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //
		components = document.getElementsByClassName(rootClass);
		if (components) {
            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                if (!component.id) component.id = "progressBar" + a;

                var bar = component.getElementsByClassName(rootClass + "__bar")[0];
                var determinateValue = bar.dataset.value;
                
                var value = parseFloat(determinateValue.replace("%", ""));

                if (value <= low) component.classList.add(rootClass + "--low");
                else if (low < value && value <= medium) component.classList.add(rootClass + "--medium");
                else component.classList.add(rootClass + "--high");

                var determinate = bar.getElementsByClassName(rootClass + "__bar__determinate")[0];
                
                if (determinateValue) {
                    determinate.style.setProperty("--progressValue", determinateValue);
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

	
	// -- initiate into Rexus object
	$SUPER[objectName] = new ProgressBar();
})();