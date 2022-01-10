(function () {
  // ########################## //
  // ### PRIVATE PROPERTIES ### //
  // ########################## //
  var rootClass = "s-inPageNav";
  let titleWidth, endWidth;
  var offsetIndex = (titleWidth = endWidth = 0);
  var resizeDelay = 250;
  var scrollDuration = 1000; // - in ms
  var responseThreshold = 30; // - a sort of buffer when it comes to long titles
  var component, anchorPoints, shiftPoints, targetNav, resizeTimeout, scrollProperties;

  component = document.getElementsByClassName(rootClass)[0]; // -- limiting to just one inpagenav
  if (component) {
    component.id = "inPageNav1";
    anchorPoints = [];
    targetNav = component.getElementsByClassName(rootClass + "__links__nav")[0];

    var cmpChildren = component.children;
    var cmpChildrenCount = cmpChildren.length - 1;
    var navTitle = cmpChildren[0];
    var navCTA = cmpChildren[cmpChildrenCount];
    var navPricing = cmpChildren[cmpChildrenCount - 1];
    var navToggler = component.getElementsByClassName(rootClass + "__toggle")[0];
    var navParent = targetNav.parentNode;
    var navListings = targetNav.getElementsByTagName("li");
    var a = navListings.length - 1;
    var navListing, navAnchors;

    // -- get various element widths
    titleWidth = navTitle.firstElementChild.offsetWidth + responseThreshold;
    endWidth = navCTA.offsetWidth + navPricing.offsetWidth;

    // -- apply event listeners
    navToggler.addEventListener("click", toggleNav);
    navParent.firstElementChild.addEventListener("click", shiftNavLeft);
    navParent.lastElementChild.addEventListener("click", shiftNavRight);
    window.addEventListener("resize", resizeAction);

    for (a; a >= 0; a--) {
      navListing = navListings[a];
      anchorPoints.push(navListing.offsetWidth);

      navAnchors = navListing.firstElementChild;
      navAnchors.dataset.root = component.id;
      navAnchors.addEventListener("click", scrollToSection);
    }

    anchorPoints.push(0);
    generateShiftPoints();
  }

  // ####################### //
  // ### PRIVATE METHODS ### //
  // ####################### //
  /*
		These methods are only accessible only within this class module
		they act as a service to help complete the module during initiation
	*/

  // -- toggle navigation for "mobile" view
  function toggleNav() {
    this.parentNode.classList.toggle(rootClass + "--active");
  }

  // -- arrow left click event
  function shiftNavLeft() {
    shiftNav(-1);
  }

  // -- arrow right click event
  function shiftNavRight() {
    shiftNav(1);
  }

  // -- main shift function, uses a "number" to represent how many spaces to move
  function shiftNav(int) {
    // -- keep offset within range
    offsetIndex += int;
    if (offsetIndex < 0) offsetIndex = 0;
    else if (offsetIndex >= shiftPoints.length) offsetIndex = shiftPoints.length - 1;

    // -- set position of nav
    targetNav.style.left = shiftPoints[offsetIndex] + "px";

    // -- activate/deactivate left arrow
    if (offsetIndex != 0) targetNav.parentNode.firstElementChild.classList.remove("u-invisible");
    else targetNav.parentNode.firstElementChild.classList.add("u-invisible");

    // -- activate/deactivate right arrow
    if (offsetIndex == shiftPoints.length - 1)
      targetNav.parentNode.lastElementChild.classList.add("u-invisible");
    else targetNav.parentNode.lastElementChild.classList.remove("u-invisible");
  }

  // -- generate usable shift points
  function generateShiftPoints() {
    var offsetLeft = 0;
    var navParent = targetNav.parentNode;
    var navWidth = targetNav.offsetWidth;
    var a = anchorPoints.length - 1;
    var inc = 0;
    var offsetWidth;

    // -- test for any long title conflicts
    var windowWidth = window.innerWidth;
    if (titleWidth + endWidth > windowWidth) component.classList.add(rootClass + "--titleConflict");
    else component.classList.remove(rootClass + "--titleConflict");

    // -- reset shift points
    shiftPoints = [];

    // -- update offsetWidth
    for (a = anchorPoints.length - 1; a >= 0; a--) inc += anchorPoints[a];
    offsetWidth = navWidth - inc;
    if (inc > navWidth) navParent.lastElementChild.classList.remove("u-invisible");

    // -- add up displacement
    for (a = anchorPoints.length - 1; a >= 0; a--) {
      offsetLeft += anchorPoints[a];
      shiftPoints.push(offsetLeft * -1);
      if (offsetWidth + offsetLeft > 0) break;
    }
  }

  // -- scroll to section event
  function scrollToSection(e) {
    e.preventDefault();

    var root = document.getElementById(this.dataset.root);
    var rootOffset = parseInt(root.dataset.offset, 10);
    var targetID = this.href.replace(document.location.origin + "/#", "");
    var target = document.getElementById(targetID);
    var targetTop = target.getBoundingClientRect().top;

    if (targetTop > 0) rootOffset = 0;

    root.classList.remove("s-inPageNav--active");

    scrollProperties = {
      startPoint: window.scrollY,
      distance: targetTop + window.scrollY - window.scrollY - (root.offsetHeight + rootOffset),
    };

    window.requestAnimationFrame(scrollWindow);
  }

  function scrollWindow(timestamp) {
    if (!scrollProperties.timestamp) scrollProperties.timestamp = timestamp;
    var progress = timestamp - scrollProperties.timestamp;
    var newPos = easeOut(
      progress,
      scrollProperties.startPoint,
      scrollProperties.distance,
      scrollDuration,
    );

    window.scrollTo(0, newPos);
    if (progress < scrollDuration) window.requestAnimationFrame(scrollWindow);
  }

  function easeOut(time, startValue, change, duration) {
    time /= duration / 2;
    if (time < 1) {
      return (change / 2) * time * time + startValue;
    }

    time--;
    return (-change / 2) * (time * (time - 2) - 1) + startValue;
  }

  // -- triggers on resize event
  function resizeAction() {
    // -- limit resize action to fire at "end" of resize
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);
  }

  // -- action that runs at end of window resize
  function resizeTimeoutAction() {
    // -- update shifting points
    generateShiftPoints();

    // -- reset nav to 0 position
    shiftNav(offsetIndex * -1);
  }
})();
