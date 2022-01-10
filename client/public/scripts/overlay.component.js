(function($SUPER) {
    if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
    }

    // -- PRIVATE PROPERTIES -- //
	let touchPos = {};
	let targetWindow = this;
	let scrollY;

	// -- constructor
	function Overlay() {
        // no prep work needed
	}

	// -- PRIVATE METHODS -- //
	function overlayClick(e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		if (e.target.tagName.toLowerCase() == 'body') {
			document.body.classList.remove("u-overlay");
			document.body.classList.remove("u-noScrolling");
			targetWindow.removeEventListener("click", overlayClick);
			targetWindow.removeEventListener("touchstart", touchStart);
			targetWindow.removeEventListener("touchend", touchEnd);
		}
	}
	function touchStart(e) {
		e.preventDefault();
		touchPos.x = e.touches[0].clientX;
		touchPos.y = e.touches[0].clientY;
	}
	function touchEnd(e) {
		e.preventDefault();
		if (
			touchPos.x == e.changedTouches[0].clientX &&
			touchPos.y == e.changedTouches[0].clientY
		) {
			document.body.classList.remove("u-overlay");
			document.body.classList.remove("u-noScrolling");
			targetWindow.removeEventListener("click", overlayClick);
			targetWindow.removeEventListener("touchstart", touchStart);
			targetWindow.removeEventListener("touchend", touchEnd);
			targetWindow.scroll(0, scrollY);
		}
	}

	// -- PUBLIC METHODS -- //
	Overlay.prototype.launch = function (opt) {
		let obj = opt ? opt : {};
		let target;

		// -- capture taret element
		if (obj.target) {
			target = document.getElementById(obj.target);
		} else {
			target = document.body;
		}
		target.classList.add("u-overlay");
		scrollY = targetWindow.pageYOffset;

		// -- activate scrolling (if necessary)
		if (!obj.allowScrolling) {
			target.classList.add("u-noScrolling");
			targetWindow.addEventListener("touchstart", touchStart);
			targetWindow.addEventListener("touchend", touchEnd);
		}

		// -- kill overlay on click
		targetWindow.addEventListener("click", overlayClick);
	};

	Overlay.prototype.close = function() {
		document.body.classList.remove("u-overlay");
		document.body.classList.remove("u-noScrolling");
		targetWindow.removeEventListener("click", overlayClick);
		targetWindow.removeEventListener("touchstart", touchStart);
		targetWindow.removeEventListener("touchend", touchEnd);
	}

	$SUPER['overlay'] = new Overlay();
})(Rexus);