(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "s-configuratorResults";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
	var sections;

	var resizeDelay = 250;
	var resizeTimeout;
	var scrollDuration = 1000; // - in ms

	var mobileSize = 512;
	var tabViewRX = window.Rexus.tabs;
	var productGalleryRX = window.Rexus.productGallery3;

	var windowWidth;

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
    
	function ConfiguratorResults() {
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //

        sections = document.getElementsByClassName(rootClass);
        windowWidth = window.innerWidth;

		if (sections) {
            var section;
            for (a = (sections.length - 1); a >= 0; a--) {
				section = sections[a];
				
				if (!section.id) section.id = "configuratorResults" + a;
                
                var configuratorResultsGrid = section.getElementsByClassName(rootClass + "__accordion__results__grid")[0];
                var configuratorResultsGridChildren = configuratorResultsGrid.children.length;

                switch (configuratorResultsGridChildren) {
                    case 1:
                        break;
                    case 2:
                        configuratorResultsGrid.classList.add(rootClass + "__accordion__results__grid--2Items");
                        break;
                    case 3:
                        configuratorResultsGrid.classList.add(rootClass + "__accordion__results__grid--3Items");
                        break;
                    case 4:
                        configuratorResultsGrid.classList.add(rootClass + "__accordion__results__grid--4Items");
                        break;
				}

				var productGallery = section.nextElementSibling;
				var isProductGallerySib = false;

				if (section.nextElementSibling.classList.contains("s-productGallery3")) isProductGallerySib = true;
				else isProductGallerySib = false;

				var configuratorResultCards = section.getElementsByClassName("c-configuratorResultsCard");
				var configuratorResultCard;

				for (b = (configuratorResultCards.length - 1); b >= 0; b--) {
					configuratorResultCard = configuratorResultCards[b];
					var header = configuratorResultCard.getElementsByClassName("c-configuratorResultsCard__header")[0];
					if (window.innerWidth >= mobileSize) header.classList.add("c-accordion__tab--active"); 

					var configuratorResultCardLink = configuratorResultCard.getElementsByClassName("c-configuratorResultsCard__info__link")[0];

					if (configuratorResultCardLink && isProductGallerySib) {
						configuratorResultCardLink.href = "#" + productGallery.id;
						configuratorResultCardLink.addEventListener("click", scrollToSection);
					}
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

	// -- scroll to section event
	function scrollToSection(e) {
		e.preventDefault();
		var rootOffset;
		targetID = this.href.split("#").pop();
		var target = document.getElementById(targetID);
		var targetTop = target.getBoundingClientRect().top;

		var pgTabTarget = this.dataset.pgtabtarget;
		var pgtab = document.querySelector("[data-pgtab=" + pgTabTarget + "]");

		if(targetTop > 0) rootOffset = 0;

		scrollProperties = {
			"startPoint": window.scrollY,
			"distance": ((targetTop+window.scrollY) - window.scrollY)
		};

		window.requestAnimationFrame(scrollWindow);

		tabViewRX.activateTab(pgtab);
		productGalleryRX.scrollToTab(pgtab);
	}

	function scrollWindow(timestamp) {
		if(!scrollProperties.timestamp) scrollProperties.timestamp = timestamp;
		var progress = timestamp - scrollProperties.timestamp;
		var newPos = easeOut(progress, scrollProperties.startPoint, scrollProperties.distance, scrollDuration);

		window.scrollTo(0, newPos);
		if(progress < scrollDuration) window.requestAnimationFrame(scrollWindow);
	}

	function easeOut(time, startValue, change, duration) {
		time /= duration / 2;
		if (time < 1)  {
			 return change / 2 * time * time + startValue;
		}
   
		time--;
		return -change / 2 * (time * (time - 2) - 1) + startValue;
	};

	// -- triggers on resize event
	function resizeAction() {

		// -- limit resize action to fire at "end" of resize
		if(resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);

	}

	// -- action that runs at end of window resize
	function resizeTimeoutAction() {

		for (a = (sections.length - 1); a >= 0; a--) {
			section = sections[a];

			var sectionAccordion = section.getElementsByClassName(rootClass + "__accordion__heading")[0];
			var configuratorResultCards = section.getElementsByClassName("c-configuratorResultsCard__header");
			var configuratorResultCard;

			if (!sectionAccordion.classList.contains("c-accordion__tab--active")) {
				if (windowWidth != window.innerWidth) {
					sectionAccordion.classList.add("c-accordion__tab--active");
				}
			}

			for (b = (configuratorResultCards.length - 1); b >= 0; b--) {
				configuratorResultCard = configuratorResultCards[b];

				if (window.innerWidth < mobileSize) {
					if (windowWidth != window.innerWidth) {
						if (configuratorResultCard.classList.contains("c-accordion__tab--active")) configuratorResultCard.classList.remove("c-accordion__tab--active");
					}
				} else {
					if (windowWidth != window.innerWidth) {
						if (!configuratorResultCard.classList.contains("c-accordion__tab--active")) configuratorResultCard.classList.add("c-accordion__tab--active");
					}
				}
			}

			if (windowWidth != window.innerWidth) windowWidth = window.innerWidth;
		}
	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new ConfiguratorResults();
})();