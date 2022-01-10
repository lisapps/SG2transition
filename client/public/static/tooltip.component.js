(function () {
// ########################## //
// ### PRIVATE PROPERTIES ### //
// ########################## //
/*
		These act as a "const" variables, a type of variables that
		act as a global and aren't inteded to be redifined within the class module.
	*/
var rootClass = "c-tooltip";
var typePrefix = rootClass.charAt(0);
var objectName = rootClass.replace(typePrefix + "-", "");

var resizeDelay = 250;
var components, resizeTimeout;

var html = document.getElementsByTagName("html")[0];
var tooltipsFormGroup = document.getElementsByClassName(
	rootClass + "__group"
);

var tooltipArrow;
var tooltipForms = [];

// -- Verify if manager exists
/*
		The manager is intended to be as a service to the other modules
		you can (should) register the module to the manager using it's ID
		so that it can be quickly referenced when cross-communication is needed
	*/
var $SUPER = this.Rexus ? this.Rexus : false;
if (!$SUPER) {
	console.error(
	'Rexus Manager needs to be preloaded for the "' + rootClass + '" to work'
	);
	return;
}

// -- Verify if any dependecies are needed
/*
		Format is very much the same as the condition above
	*/

// ################### //
// ### CONSTRUCTOR ### //
// ################### //
/*
		The constructor sets the base for this module
			- Detects all instances of component/element
			- Identifies and registers all instances
			- Sets any private variables to be used globally
			- Should inherit a similar naming convention except with a capital in the beginning
	*/
function Tooltip() {
	// ######################### //
	// ### PUBLIC PROPERTIES ### //
	// ######################### //
	/*
			Not common nor is it best practice
			consider using getter/setter methods
		*/

	components = document.getElementsByClassName(rootClass);
	if (components) {
		var component;

		//-- Create tooltip arrow and append to body
		tooltipArrow = document.createElement("div");
		tooltipArrow.classList.add(rootClass + "__arrow");
		document.body.appendChild(tooltipArrow);

		for (a = components.length - 1; a >= 0; a--) {
			component = components[a];

			if (component.dataset.toolid) component.setAttribute("aria-describedby", component.dataset.toolid);

			if (component.dataset.multiformgroup) {
				component.setAttribute("aria-describedby", component.dataset.multiformgroup);
				tooltipForms.push(component);
			}
			else {
			component.addEventListener("mouseover", hoverOn);
			component.addEventListener("mouseout", hoverOff);
			component.addEventListener("focusin", hoverOn);
			component.addEventListener("focusout", hoverOff);
			}

			if (component.tagName == "SPAN") {
			component.setAttribute("tabindex", "0");
			}
		}

		var groups = document.getElementsByClassName(rootClass + "__group");
		var group;

		if (groups) {
			for (a = (groups.length - 1); a >= 0; a--) {
				group = groups[a];
				if (!group.id) group.id = "tooltipgroup" + a;
				var fInput = group.previousElementSibling;
				if (fInput.classList.contains("f-input")) {
					fInput.classList.add(rootClass);
					fInput.setAttribute("aria-describedby", group.id);
				}
			}
		}

		window.addEventListener("resize", resizeAction);
		window.addEventListener("scroll", removeStyle);
		}
	}

	// ###################### //
	// ### PUBLIC METHODS ### //
	// ###################### //
	/*
			Place useful methods that can be featured publicly
			Common features usually consists of
				- Update (one or all components)
				- Refresh (one or all components)
				- Getter (receive component data)
				- Setter (define new component properties)
		*/

	Tooltip.prototype.multiFormInputToggle = function (_o) {
		//find the coordinates of the f-inputs
		var fInputPosition = _o.getBoundingClientRect();
		var targetTooltipGroup = _o.dataset.multiformgroup;
		var tooltipGroup = document.getElementById(targetTooltipGroup);
		var tooltipGroupArrow = tooltipGroup.getElementsByClassName(
		rootClass + "__arrow"
		)[0];

		tooltipGroup.classList.add(rootClass + "__group--active");
		tooltipGroupArrow.style.top = fInputPosition.bottom - 8 + window.scrollY + "px";

		if (!html.dir)
		tooltipGroupArrow.style.left =
			fInputPosition.left + window.scrollX + "px";
		else {
		var threshold = -20;
		tooltipGroupArrow.style.left =
			fInputPosition.right + threshold + window.scrollX + "px";
		}
	};

	Tooltip.prototype.clearTooltips = function () {
		collapseTooltips();
	};

	Tooltip.prototype.createTooltip = function (obj) {
		// fail "gracefully"
		if (!obj.target) {
		console.log("ERROR :: Tooltip::createToolTip -- No Target Declared");
		return;
		} else {
		// check next sibling
		var nextElmt = obj.target.nextElementSibling;
		var nextElmtClasses = nextElmt ? nextElmt.className.split(" ") : [];

		// create a group if one doesn't exist
		if (nextElmtClasses.indexOf(rootClass + "__group") < 0) {
			nextElmt = generateTooltipGroup();
			obj.target.insertAdjacentElement("afterend", nextElmt);
		}
		}

		if (obj.text) {
		// create tooltip container
		var tooltipMsg = document.createElement("div");
		tooltipMsg.classList.add(rootClass + "__message");

		// add text to tooltip
		var tooltipMsgTxt = document.createElement("p");
		var tooltipMsgTxtNode = document.createTextNode(obj.text);
		tooltipMsgTxt.appendChild(tooltipMsgTxtNode);

		tooltipMsg.appendChild(tooltipMsgTxt);
		nextElmt.appendChild(tooltipMsg);

		// set tooltip type
		var tooltipArrowColor;
		switch (obj.type) {
			case "helper":
			tooltipMsg.classList.add(rootClass + "__message--helper");
			tooltipArrowColor = window.getComputedStyle(
				document.querySelector(
				".c-tooltip__message.c-tooltip__message--helper"
				)
			).backgroundColor;
			break;
			case "error":
			tooltipMsg.classList.add(rootClass + "__message--error");
			tooltipArrowColor = window.getComputedStyle(
				document.querySelector(
				".c-tooltip__message.c-tooltip__message--error"
				)
			).backgroundColor;
			break;
		}

		//check if tooltip arrow is in soo there is only one arrow
		var tooltipArrow = nextElmt.getElementsByClassName(
			rootClass + "__arrow"
		)[0];
		if (!tooltipArrow) {
			tooltipArrow = document.createElement("div");
			tooltipArrow.classList.add(rootClass + "__arrow");
			if (tooltipArrowColor)
			tooltipArrow.style.borderColor =
				"transparent transparent " + tooltipArrowColor + " transparent";
			nextElmt
			.getElementsByClassName(rootClass + "__message")[0]
			.insertAdjacentElement("beforebegin", tooltipArrow);
		}
		}
	};

	// ####################### //
	// ### PRIVATE METHODS ### //
	// ####################### //
	/*
			These methods are only accessible only within this class module
			they act as a service to help complete the module during initiation
		*/

	function hoverOn() {
		//get the id and reference to the tooltip message div
		var tooltipMessage = document.getElementById(this.dataset.toolid);

		//show tooltip message
		tooltipMessage.classList.add(rootClass + "--active");
		tooltipArrow.classList.add(rootClass + "--active");

		//tooltip position
		var tooltipPosition = this.getBoundingClientRect();

		//center of tooltip
		var tooltipCX = tooltipPosition.left + tooltipPosition.width * 0.5;
		var tooltipCY = tooltipPosition.top + tooltipPosition.height * 0.5;

		//tooltip message position
		var messagePosition = tooltipMessage.getBoundingClientRect();

		//tooltip message width, height, and center
		var arrowLength = 16;

		var triggerClasses = this.classList;
		var newPos;

		if (triggerClasses.contains(rootClass + "--top")) {
		newPos = checkSpacing("top");
		} else if (triggerClasses.contains(rootClass + "--right")) {
		newPos = checkSpacing("right");
		} else if (triggerClasses.contains(rootClass + "--left")) {
		newPos = checkSpacing("left");
		} else {
		newPos = checkSpacing("bottom");
		}

		tooltipMessage.style.top = newPos.top;
		tooltipMessage.style.left = newPos.left;

		tooltipArrow.style.top = newPos.arrowPosTop;
		tooltipArrow.style.left = newPos.arrowPosLeft;
		tooltipArrow.style.transform = newPos.arrowDirection;

		function checkSpacing(direction) {
		var _obj = {};
		var fallback = false;

		// -- find the spaces around the tooltip
		var windowSpaces = {
			top: tooltipPosition.y,
			right: window.innerWidth - (tooltipPosition.x + tooltipPosition.width),
			bottom:
			window.innerHeight - (tooltipPosition.y + tooltipPosition.height),
			left: tooltipPosition.x,
		};

		// -- find the message height
		var messageHeight = messagePosition.height;
		var messageWidth = messagePosition.width;
		var messageCX = messageWidth * 0.5;
		var messageCY = messageHeight * 0.5;

		// -- check priority direction
		switch (direction) {
			case "top":
			if (windowSpaces.top - messageHeight < 0) fallback = true;
			else {
				setTopPosition();
				adjustLeftRight();
			}
			break;

			case "right":
			if (windowSpaces.right - (messageWidth + arrowLength) < 0)
				fallback = true;
			else {
				setRightPosition();
				adjustTopBottom();
			}
			break;

			case "bottom":
			if (windowSpaces.bottom - messageHeight < 0) fallback = true;
			else {
				setBottomPosition();
				adjustLeftRight();
			}
			break;

			case "left":
			if (windowSpaces.left - (messageWidth + arrowLength) < 0)
				fallback = true;
			else {
				setLeftPosition();
				adjustTopBottom();
			}
			break;
		}

		// -- default to best available space
		if (fallback) {
			var largestSpace = Math.max(
			windowSpaces.top,
			windowSpaces.right,
			windowSpaces.bottom,
			windowSpaces.left
			);

			switch (largestSpace) {
			case windowSpaces.top:
				setTopPosition();
				adjustLeftRight();
				break;

			case windowSpaces.right:
				setRightPosition();
				adjustTopBottom();
				break;

			case windowSpaces.bottom:
				setBottomPosition();
				adjustLeftRight();
				break;

			case windowSpaces.left:
				setLeftPosition();
				adjustTopBottom();
				break;
			}
		}

		// -- defaut position for each direction
		function setTopPosition() {
			_obj.top = tooltipPosition.top - messageHeight - arrowLength + "px";
			_obj.left = tooltipCX - messageCX + "px";
			_obj.arrowDirection = "rotate(180deg)";
			_obj.arrowPosTop =
			tooltipPosition.top -
			arrowLength +
			document.documentElement.scrollTop +
			"px";
			_obj.arrowPosLeft = tooltipCX - arrowLength / 2 + "px";
		}

		function setRightPosition() {
			_obj.top = tooltipCY - messageCY + "px";
			_obj.left =
			tooltipPosition.left +
			tooltipPosition.width +
			arrowLength +
			arrowLength / 2 +
			"px";
			_obj.arrowDirection = "rotate(-90deg)";
			_obj.arrowPosTop =
			tooltipCY -
			arrowLength / 2 +
			document.documentElement.scrollTop +
			"px";
			_obj.arrowPosLeft = tooltipPosition.right + arrowLength / 2 + "px";
		}

		function setBottomPosition() {
			_obj.top = tooltipPosition.top + arrowLength * 2.5 + "px";
			_obj.left = tooltipCX - messageCX + "px";
			_obj.arrowDirection = "rotate(0deg)";
			_obj.arrowPosTop =
			tooltipPosition.top +
			arrowLength +
			arrowLength / 2 +
			document.documentElement.scrollTop +
			"px";
			_obj.arrowPosLeft = tooltipCX - arrowLength / 2 + "px";
		}

		function setLeftPosition() {
			_obj.top = tooltipCY - messageCY + "px";
			_obj.left =
			tooltipPosition.left -
			messageWidth -
			arrowLength -
			arrowLength / 2 +
			"px";
			_obj.arrowDirection = "rotate(90deg)";
			_obj.arrowPosTop =
			tooltipCY -
			arrowLength / 2 +
			document.documentElement.scrollTop +
			"px";
			_obj.arrowPosLeft =
			tooltipPosition.left - arrowLength - arrowLength / 2 + "px";
		}

		function adjustLeftRight() {
			var objLeft = tooltipCX - messageCX;
			var objRight = objLeft + messageWidth;

			//check if the tooltip message is going beyond right side of window
			if (objRight >= window.innerWidth) {
			var rightBound = messagePosition.right - window.innerWidth;
			_obj.left =
				messagePosition.right -
				rightBound -
				messageWidth -
				arrowLength +
				"px";
			console.log("touching the right");
			//check if the tooltip message is going beyond left side of window
			} else if (objLeft < 0) {
			_obj.left = arrowLength + "px";
			console.log("touching the left");
			}
		}

		function adjustTopBottom() {
			var objTop = tooltipCY - messageCY;
			var objBottom = objTop + messageHeight;

			//check if the tooltip message is going beyond top side of window
			if (objTop < 0) {
			_obj.top = arrowLength + "px";
			//check if the tooltip message is going beyond bottom side of window
			} else if (objBottom > window.innerHeight) {
			var bottomBound = messagePosition.bottom - window.innerHeight;
			_obj.top =
				messagePosition.bottom -
				bottomBound -
				messageHeight -
				arrowLength +
				"px";
			}
		}
		return _obj;
		}

		// window.addEventListener("scroll", removeStyle);
		// window.addEventListener("resize", removeStyle);
		// function removeStyle() {
		//     tooltipMessage.removeAttribute("style");
		//     tooltipArrow.removeAttribute("style");
		// }
	}

	function hoverOff() {
		var tooltipMessage = document.getElementById(this.dataset.toolid);
		tooltipMessage.removeAttribute("style");
		tooltipMessage.classList.remove(rootClass + "--active");

		tooltipArrow.removeAttribute("style");
		tooltipArrow.classList.remove(rootClass + "--active");
	}

	function collapseTooltips() {
		//look for all the groups and remove active
		for (var i = 0; i < tooltipsFormGroup.length; i++) {
		var tooltipForm = tooltipsFormGroup[i];
		tooltipForm.classList.remove(rootClass + "__group--active");
		}
	}

	function generateTooltipGroup() {
		var _e = document.createElement("div");
		_e.classList.add(rootClass + "__group");
		return _e;
	}

	function removeStyle() {
		var activeTooltips = document.getElementsByClassName(
		rootClass + "--active"
		);
		var activeTooltip;
		for (b = activeTooltips.length - 1; b >= 0; b--) {
		activeTooltip = activeTooltips[b];
		activeTooltip.removeAttribute("style");
		tooltipArrow.removeAttribute("style");
		}
	}

	// -- triggers on resize event
	function resizeAction() {
		// -- limit resize action to fire at "end" of resize
		if (resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);
	}

	// -- action that runs at end of window resize
	function resizeTimeoutAction() {
		removeStyle();
	}

	// -- initiate into Rexus object
	$SUPER[objectName] = new Tooltip();
})();