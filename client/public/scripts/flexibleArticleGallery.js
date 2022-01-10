(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "s-flexibleArticleGallery";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
    var components;

    var body = document.getElementsByTagName("body")[0];
    var screenLG = 800;

	// -- Verify if manager exists
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
	function FlexibleArticleGallery() {
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //
		components = document.getElementsByClassName(rootClass);
		if (components) {
            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                component.id = "flexibleArticleGallery" + a;

                var sliders = component.getElementsByClassName("c-slideMenu__slider");
                var slider;
                for (b = (sliders.length - 1); b >= 0; b--) {
                    slider = sliders[b];
                    var toggle = slider.getElementsByClassName("c-slideMenu__slider__toggle")[0];
                    toggle.addEventListener("click", togglePanel);
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
    
    function togglePanel(e) {
        e.stopPropagation();
        if (window.innerWidth >= screenLG) {
            var options = { "allowScrolling": true };
            if (!body.classList.contains("u-overlay")) {
                Rexus.overlay.launch(options);
                body.addEventListener("click", removeOverlay);
            }
            else {
                body.classList.remove("u-overlay");
                body.removeEventListener("click", removeOverlay);
            }
            body.classList.remove("c-slideMenu--disableScroll");
        }
    }

    function removeOverlay(e) {
        if (e.target.tagName.toLowerCase() == 'body') {
            var activeSliders = document.querySelectorAll(".c-slideMenu--activeRight, .c-slideMenu--activeLeft");
            var activeSlider;
            for (a = (activeSliders.length - 1); a >= 0; a--)  {
                activeSlider = activeSliders[a];
    
                if (activeSlider.classList.contains("c-slideMenu--activeRight")) activeSlider.classList.remove("c-slideMenu--activeRight");
                else activeSlider.classList.remove("c-slideMenu--activeLeft");
    
                var slider = activeSlider.getElementsByClassName("c-slideMenu__slider--active")[0];
                slider.classList.remove("c-slideMenu__slider--active");
            }
        }
    }

	// -- initiate into Rexus object
	$SUPER[objectName] = new FlexibleArticleGallery();
})();