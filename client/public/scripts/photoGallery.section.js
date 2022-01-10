(function ($) {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "s-photoGallery";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
    var sections;
    
    var resizeDelay = 250;
    var resizeTimeout;

	var isRTL = false; // Should be changed to detect RTL on load
	var slickRegistries = [];
	var imgJson = [];
	var lFlextTiles = [];	

	var modalRX = window.Rexus.modal;
	var flexTilesRX = window.Rexus.flexTiles;

	var breakPointEvent;

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

	function PhotoGallery() {
		sections = document.getElementsByClassName(rootClass);
		
		if (sections) {

			var section;
			for (a = (sections.length - 1); a >= 0; a--) {
				section = sections[a];
				section.id = "photoGallery" + a;
				
				var tmpFlexTiles = section.getElementsByClassName("l-flexTiles")[0];
				lFlextTiles.push(tmpFlexTiles);
				
				var photoGalleryCards = section.getElementsByClassName("c-photoGalleryCard");
				
				var photoGalleryModalInfo = {
					"trigger" 			:  	photoGalleryCards,
					"deactivateClose"  	:  	true,
					"darkmode" 			: 	true,
					"hasEscBtn" 		:	true
				}
				
				// -- Create Modal
				var photoGalleryModal = modalRX.createModal(photoGalleryModalInfo);
				section.appendChild(photoGalleryModal);

				// -- Make Photo Gallery Cards Activate Modal
				makeClickable(photoGalleryCards);
				
				// -- Create Slider in Modal
				generateSliderToModal(photoGalleryModal);
				
				var slickSlider = photoGalleryModal.getElementsByClassName(rootClass + "__slider")[0];
				slickSlider.dataset.sid = "slick" + a;
				
				var photoGalleryCard;
				for (b = (photoGalleryCards.length - 1); b >= 0; b--) {
					photoGalleryCard = photoGalleryCards[b];
					photoGalleryCard.dataset.sid = slickSlider.dataset.sid;
					photoGalleryCard.addEventListener("click", slickGoTo);
				}
			}

			//BASIC BREAK POINT EVENTS
			breakPointEvent = {
				maxWidth: '512',
				runEvent: function () {
					var _flexTile
					for (a = (lFlextTiles.length - 1); a >= 0; a--) {
						_flexTile = lFlextTiles[a];
						if (_flexTile.classList.contains("l-flexTiles")) _flexTile.classList.remove("l-flexTiles");

						var section = getClosestClass(_flexTile, rootClass);
						var sectionControlsLeft = section.getElementsByClassName(rootClass + "__controls__left")[0];
						var sectionControlsRight = section.getElementsByClassName(rootClass + "__controls__right")[0];

						var _slick = $(_flexTile).slick({
							slidesToScroll: 1,
							infinite: true,
							lazyLoad: 'progressive',
							dots: true,
							prevArrow: sectionControlsLeft,
							nextArrow: sectionControlsRight
						});
						registerSlick(_slick);
					}
					flexTilesRX.update();
				},
				killEvent: function () {
					var section;
					for (a = (sections.length - 1); a >= 0; a--) {
						section = sections[a];
						
						var _slickSliders = section.getElementsByClassName("slick-slider");
						if (_slickSliders.length > 0) {
							_slickSliders[0].classList.add("l-flexTiles");
							$(_slickSliders[0]).slick("unslick");
						}

					}
					flexTilesRX.update();
				}
			};
			resizeTimeoutAction();
			window.addEventListener("resize", resizeAction);
		}
	}

	PhotoGallery.prototype.toggleRTL = function() {
		isRTL = !isRTL;
		var _slick;
		for (a = (slickRegistries.length - 1); a >= 0; a--) {
			_slick = slickRegistries[a];
			_slick.slick("slickSetOption", { rtl:isRTL, refresh:true });
		}
	}

	function slickGoTo() {
		var sid = this.dataset.sid;
		var _slickSlider = document.querySelector('.' + rootClass + '__slider[data-sid="'+ sid + '"]');
		$(_slickSlider).slick('slickGoTo', this.dataset.num);
	}

	function makeClickable(cards) {

		var card;
		for (b = (cards.length - 1); b >= 0; b--) {
			card = cards[b];
			card.dataset.num = b;
			
			var img = card.getElementsByTagName("img")[0];
			var imgSrc = img.getAttribute("src");
			imgSrc = imgSrc.replace("-ml", "-zm-lg");
			
			var title = card.getElementsByClassName("c-photoGalleryCard__title")[0].innerHTML;
			var description = card.getElementsByClassName("c-photoGalleryCard__description")[0];

			if (description) description = description.innerHTML;
			else description = null; 

			var _o = {
				"img": imgSrc,
				"title": title,
				"description": description
			}

			imgJson.push(_o);
		}

	}

	function registerSlick(slick) {
		slickRegistries.push(slick);
	}

	function generateSliderToModal(modal) {

		// -- Creating Modal
		var _slickSlider = document.createElement("div");
		_slickSlider.classList.add(rootClass + "__slider", "u-list-unstyled");

		var modalContent = modal.getElementsByClassName("c-modal__content")[0];
		modalContent.appendChild(_slickSlider);


		// -- Modal Controls
		var _slickSliderControls = document.createElement("div");
		_slickSliderControls.classList.add(rootClass + "__overlayControls");
		modalContent.appendChild(_slickSliderControls);

		// -- Left
		var previousSlideBtn = document.createElement("a");
		var _svgPrev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		previousSlideBtn.setAttribute("aria-label", "Previous Slide");
		_svgPrev.setAttribute("viewBox", "0 0 13.3 22.2");
		_svgPrev.innerHTML = '<path d="M11.2.3L.5 11l10.7 10.7 1.6-1.5L3.6 11l9.2-9.2z" />';
		previousSlideBtn.appendChild(_svgPrev);
		_slickSliderControls.appendChild(previousSlideBtn);

		var _slickSliderControlsContent = document.createElement("div");
		_slickSliderControlsContent.classList.add(rootClass + "__overlayControls__content");
		_slickSliderControls.appendChild(_slickSliderControlsContent);

		// -- Right
		var nextSlideBtn = document.createElement("a");
		var _svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		nextSlideBtn.setAttribute("aria-label", "Next Slide");
		_svgNext.setAttribute("viewBox", "0 0 13.3 22.2");
		_svgNext.innerHTML = '<path d="M2.1 21.7L12.8 11 2.1.3.5 1.9l9.2 9.2-9.2 9.1z" />';
		nextSlideBtn.appendChild(_svgNext);
		_slickSliderControls.appendChild(nextSlideBtn);
		
		for (c = (imgJson.length - 1); c >= 0; c--) {
			var imgWrap = document.createElement("div");
			imgWrap.classList.add(rootClass + "__slider__imgWrap");
			_slickSlider.appendChild(imgWrap);

			var img = document.createElement("img");
			img.src = imgJson[c]["img"];
			img.alt = imgJson[c]["title"];
			imgWrap.appendChild(img);
		}
		
		var titleHTML = document.createElement("p");
		titleHTML.classList.add(rootClass + "__overlayControls__content__captionTitle");
		_slickSliderControlsContent.appendChild(titleHTML);

		var descriptionHTML = document.createElement("p");
		descriptionHTML.classList.add(rootClass + "__overlayControls__content__captionDescription");
		_slickSliderControlsContent.appendChild(descriptionHTML);

		
		var _slick = $(_slickSlider).slick({
			slidesToScroll: 1,
			infinite: true,
			lazyLoad: 'progressive',
			dots: false,
			prevArrow: previousSlideBtn,
			nextArrow: nextSlideBtn,
		});
		registerSlick(_slick);

		var galleryImages = _slickSlider.getElementsByClassName(rootClass + "__slider__imgWrap");
		var galleryImage;

		for (c = (galleryImages.length - 1); c >= 0; c--) {
			galleryImage = galleryImages[c];
			var parent = galleryImage.parentNode;
			var cnt = $(parent).contents();
			$(parent).replaceWith(cnt); 
		}


		$(_slickSlider).on("beforeChange", function () {
			$(_slickSliderControlsContent).addClass('fade');
		});

		$(_slickSlider).on('afterChange', function () {
			$(_slickSliderControlsContent).removeClass('fade');
			var slide = $(this).slick('slickCurrentSlide');
			var title = imgJson[slide]['title'];

			var description = imgJson[slide]['description'];
			titleHTML.innerHTML = title;
			descriptionHTML.innerHTML = description;
		});
	}

	function getClosestClass(el, targetClass) {
        while (!el.classList.contains(targetClass)) {
            el = el.parentNode;
            if (!el) return null;
        }
        return el;
    }

	// -- triggers on resize event
	function resizeAction() {

		// -- limit resize action to fire at "end" of resize
		if(resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);

	}

	// -- action that runs at end of window resize
	function resizeTimeoutAction() {
		var _w = window.innerWidth;
		if (!breakPointEvent.active && (_w < breakPointEvent.maxWidth)) {
			breakPointEvent.runEvent();
			breakPointEvent.active = true;
		} else if (breakPointEvent.active && (_w > breakPointEvent.maxWidth)) {
			breakPointEvent.active = false;
			if (breakPointEvent.killEvent) breakPointEvent.killEvent();
		}
	}


	// -- initiate into Rexus object
	$SUPER[objectName] = new PhotoGallery();
})(jQuery);