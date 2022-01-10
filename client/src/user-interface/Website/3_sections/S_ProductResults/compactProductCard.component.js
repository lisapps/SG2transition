(function () {
  // ########################## //
  // ### PRIVATE PROPERTIES ### //
  // ########################## //
  /*
		These act as a "const" variables, a type of variables that
		act as a global and aren't inteded to be redifined within the class module.
	*/
  var rootClass = "c-compactProductCard";
  var typePrefix = rootClass.charAt(0);
  var objectName = rootClass.replace(typePrefix + "-", "");

  var resizeDelay = 300;
  var resizeTimeout;

  // -- private properties
  var components;
  var activeCard;
  var mobileSize = 512;
  var windowWidth;
  var showCard;

  // -- Verify if manager exists
  var $SUPER = this.Rexus ? this.Rexus : false;
  if (!$SUPER) {
    console.error('Rexus Manager needs to be preloaded for the "' + rootClass + '" to work');
    return;
  }

  // ################### //
  // ### CONSTRUCTOR ### //
  // ################### //
  function CompactProductCard() {
    // ######################### //
    // ### PUBLIC PROPERTIES ### //
    // ######################### //
    components = document.getElementsByClassName(rootClass);
    if (components) {
      for (a = components.length - 1; a >= 0; a--) {
        var component = components[a];
        if (!component.id) component.id = "compactProductCard-" + a;

        var longDesc = component
          .getElementsByClassName(rootClass + "__details__content__longDesc")[0]
          .getElementsByTagName("ul")[0];
        if (longDesc) longDesc.classList.add("u-list-commas");

        if (component.classList.contains(rootClass + "--dram")) {
          createCanvas(component);
        }
      }
    }
    // -- apply event listeners
    window.addEventListener("resize", resizeAction);
  }

  // ###################### //
  // ### PUBLIC METHODS ### //
  // ###################### //
  // -- public methods

  // ####################### //
  // ### PRIVATE METHODS ### //
  // ####################### //

  function createCanvas(c) {
    var imageAnchor = c.getElementsByClassName(rootClass + "__image")[0];
    const canvas = document.createElement("canvas");
    canvas.id = window.Rexus.cuid.generate("cv");
    canvas.classList.add(rootClass + "__image__canvas");
    imageAnchor.appendChild(canvas);

    drawImage(imageAnchor);
  }

  function drawImage(imageAnchor) {
    var src = imageAnchor.getElementsByTagName("img")[0].src;

    var canvas = imageAnchor.getElementsByClassName(rootClass + "__image__canvas")[0];
    var context = canvas.getContext("2d");
    var img = new Image();

    img.onload = function () {
      // Get the canvas' current style
      var canvasStyle = getComputedStyle(canvas);

      // Get it's current width, minus the px at the end
      var canvasWidth = canvasStyle.width.replace("px", "");

      // Work out the images ratio
      var imageRatio = this.width / this.height;

      // Work out the new height of the canvas, keeping in ratio with the image
      var canvasHeight = canvasWidth / imageRatio;

      // Set the width/height attributes to be correct (as this is what drawImage uses)
      canvas.width = canvasHeight;
      canvas.height = canvasWidth;

      // Set the canvas' width in the style tag to be correct
      canvas.style.width = "auto";

      // Draw the image at the right width/height
      context.translate(canvas.width, 0);
      context.rotate((90 * Math.PI) / 180);
      context.drawImage(this, 0, 0, canvasWidth, canvasHeight);
    };

    img.src = src;
  }

  // -- triggers on resize event
  function resizeAction() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);
  }

  // -- action that runs at end of window resize
  function resizeTimeoutAction() {}

  // -- initiate into Rexus object
  $SUPER[objectName] = new CompactProductCard();
})();
