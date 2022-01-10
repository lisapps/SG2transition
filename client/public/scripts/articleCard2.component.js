(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	var rootClass = "c-articleCard2";
	var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");
	var resizeDelay = 250;
	var components, resizeTimeout;
	
	var isRTL = false;
	
	var tagsArray = [];

	var smallCardMax = 400; //25em
	var largeCardMin = 656; //41em

	// -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	// ################### //
	// ### CONSTRUCTOR ### //
	// ################### //
	function ArticleCard2() {
        
		// ######################### //
		// ### PUBLIC PROPERTIES ### //
		// ######################### //
		components = document.getElementsByClassName(rootClass);
		if (components) {

            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
				component.id = "articleCard" + a;

				var cardWidth = component.offsetWidth;
				var cardHeight = component.offsetHeight;

				if (component.classList.contains(rootClass + "--large") && cardWidth < largeCardMin) {
					component.classList.remove(rootClass + "--large");
				}
				if (cardWidth >= largeCardMin) {
					component.classList.add(rootClass + "--large");
				}
				
				var tagsParent = component.getElementsByClassName(rootClass + "__detail__tags")[0];
                if (tagsParent) {
					tagsParent.firstElementChild.addEventListener("click", shiftNavLeft);
                    tagsParent.lastElementChild.addEventListener("click", shiftNavRight);
                    
                    var anchorPoints = [];
					var tagUL = tagsParent.getElementsByTagName("ul")[0];
					
					if (!isRTL) tagUL.style.left = "0px";
					else tagUL.style.right = "0px";

					tagUL.dataset.id = component.id;
                    var tags = tagUL.getElementsByTagName("li");
                    var tag;
                    for (b = (tags.length - 1); b >= 0; b--) {
						tag = tags[b];
						tag.addEventListener("keydown", checkTab);
                        anchorPoints.push(tag.offsetWidth);
					}
					anchorPoints.push(0);
					var offsetIndex = 0;

                    var tagInfo = {
						"id" : component.id,
						"tagUL" : tagUL,
						"offsetIndex" : offsetIndex,
						"anchorPoints" : anchorPoints,
						"shiftPoints" : []
					}

					tagsArray.push(tagInfo);
					generateShiftPoints(tagInfo);
                }
			}
			window.addEventListener("resize", resizeAction);
		}
	}


	// ###################### //
	// ### PUBLIC METHODS ### //
	// ###################### //

	ArticleCard2.prototype.toggleRTL = function() {
		isRTL = !isRTL;
	}


	// ####################### //
	// ### PRIVATE METHODS ### //
	// ####################### //
	/*
		These methods are only accessible only within this class module
		they act as a service to help complete the module during initiation
	*/


	// -- arrow left click event
	function shiftNavLeft(e) {
		console.log(e);
		var tagUL;
		if (e.target) {
			var tagContainer = this.parentNode;
			tagUL = tagContainer.getElementsByTagName("ul")[0];
		} else tagUL = e;
		shiftNav(tagUL, -1);    
	}

	// -- arrow right click event
	function shiftNavRight(e) {
		var tagUL;
		if (e.target) {
			var tagContainer = this.parentNode;
			tagUL = tagContainer.getElementsByTagName("ul")[0];
		} else tagUL = e;
		shiftNav(tagUL, 1);
	}

	// -- main shift function, uses a "number" to represent how many spaces to move
	function shiftNav(tUL, int) {
		
		var tagUL = tUL;
		var tagContainer = tagUL.parentNode;

		var tagObj;
		var offsetIndex, shiftPoints;
		for (a = (tagsArray.length - 1); a >= 0; a--) {
			tagObj = tagsArray[a];
			if (tagObj.id == tagUL.dataset.id) {
				tagObj.offsetIndex += int;
				offsetIndex = tagObj.offsetIndex;
				shiftPoints = tagObj.shiftPoints;
				break;
			}
		}

		// -- keep offset within range
		if (offsetIndex < 0) offsetIndex = 0;
		else if (offsetIndex >= shiftPoints.length) offsetIndex = (shiftPoints.length - 1);

		// -- set position of nav
		tagUL.style.left = shiftPoints[offsetIndex] + "px";   
		
		// -- activate/deactivate left arrow
		if (offsetIndex != 0) tagContainer.firstElementChild.classList.remove("u-invisible");
		else tagContainer.firstElementChild.classList.add("u-invisible");

		// -- activate/deactivate right arrow
		if (offsetIndex == (shiftPoints.length - 1)) tagContainer.lastElementChild.classList.add("u-invisible");
		else tagContainer.lastElementChild.classList.remove("u-invisible");
	}


	function generateShiftPoints(_obj) {
		var inc = 0;
		var offsetLeft = 0;
		var tagContainer, tagContainerWidth, tagUL, offsetWidth;
		var anchorPoints, shiftPoints;

		if (_obj) {
			tagUL = _obj.tagUL;
			tagContainer = tagUL.parentNode;
			tagContainerWidth = tagContainer.offsetWidth;
			anchorPoints = _obj.anchorPoints;
			shiftPoints = _obj.shiftPoints;

			// -- reset shift points
			shiftPoints = [];

			// -- update offsetWidth
			for (b = (anchorPoints.length - 1); b >= 0; b--) { 
				inc += anchorPoints[b];
			}
			offsetWidth = (tagContainerWidth - inc);
			if (inc > tagContainerWidth) tagContainer.lastElementChild.classList.remove("u-invisible");

			// // -- add up displacement
			for (b = (anchorPoints.length - 1); b >= 0; b--) {
				offsetLeft += anchorPoints[b];
				shiftPoints.push((offsetLeft *- 1));
				if (offsetWidth + offsetLeft > 0) break;
			}
			_obj.shiftPoints = shiftPoints;
		}
	}

	function checkTab(e) {
		if (e.keyCode == 9) {
			var tagUL = this.parentNode;
			if (e.shiftKey) shiftNavLeft(tagUL);
			else shiftNavRight(tagUL);
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

			var cardWidth = component.offsetWidth;

			if (component.classList.contains(rootClass + "--large") && cardWidth < largeCardMin) {
				component.classList.remove(rootClass + "--large");
			}
			if (cardWidth >= largeCardMin) {
				component.classList.add(rootClass + "--large");
			}
		}

		var tagOb;
		for (a = (tagsArray.length - 1); a >= 0; a--) {
			tagOb = tagsArray[a];

			// -- update shifting points
			generateShiftPoints(tagOb);

			var tagUL = tagOb.tagUL;
			var offsetIndex = tagOb.offsetIndex;
	
			// -- reset nav to 0 position
			shiftNav(tagUL, offsetIndex * -1);
		}

	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new ArticleCard2();
})();