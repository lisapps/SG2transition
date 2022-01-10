(function () {
  // -- Private Variables
  var rootClass = "l-gridFlex";
  var typePrefix = rootClass.charAt(0);
  var objectName = rootClass.replace(typePrefix + "-", "");

  var gridFlexWidth = (columnGap = numberOfColumns = productItems = minCardWidth = maxCardWidth = 0);

  var resizeDelay = 300;

  var resizeTimeout;
  var layouts = [];

  var $SUPER = this.Rexus ? this.Rexus : false;
  if (!$SUPER) {
    console.error('Rexus Manager needs to be preloaded for the "' + rootClass + '" to work');
    return;
  }

  // -- Constructor
  function GridFlex() {
    var components = document.getElementsByClassName(rootClass);
    var layoutDetails = {};
    var cmpChildren, pgStyles, innerStyles;
    if (components) {
      // -- create style element
      if (!document.getElementById("pgGenerated")) {
        pgStyles = document.createElement("style");
        pgStyles.id = "pgGenerated";
        innerStyles = "";
        document.body.appendChild(pgStyles);
      } else {
        pgStyles = document.getElementById("pgGenerated");
        innerStyles = pgStyles.innerHTML;
      }

      // -- cycle through components
      for (a = components.length - 1; a >= 0; a--) {
        component = components[a];
        component.id = component.id ? component.id : $SUPER.cuid.generate("pg");
        cmpChildren = component.children;

        columnGap = parseInt(
          window.getComputedStyle(component).getPropertyValue("grid-column-gap"),
          10,
        );

        minCardWidth = component.dataset.min
          ? parseInt(component.dataset.min, 10)
          : parseInt(
              window.getComputedStyle(component).getPropertyValue("grid-template-columns"),
              10,
            );

        maxCardWidth = component.dataset.max
          ? parseInt(component.dataset.max, 10)
          : parseInt(
              window.getComputedStyle(component).getPropertyValue("grid-template-columns"),
              10,
            );

        productItems = cmpChildren.length;

        var cmpChild;
        for (d = cmpChildren.length - 1; d >= 0; d--) {
          cmpChild = cmpChildren[d];
          cmpChild.dataset.id = component.id;
        }

        // -- custom styles (grid template)
        innerStyles +=
          "#" +
          component.id +
          " { grid-template-columns: repeat(auto-fill, minmax(" +
          minCardWidth +
          "px, 1fr)); }";

        // -- custom styles (min/max widths)
        innerStyles +=
          "#" +
          component.id +
          "." +
          rootClass +
          "--center > * { min-width:" +
          minCardWidth +
          "px; max-width:" +
          maxCardWidth +
          "px; }";

        layoutDetails = {
          component: component,
          minCardWidth: minCardWidth,
          maxCardWidth: maxCardWidth,
          productItems: productItems,
        };

        layouts.push(layoutDetails);

        checkColumns(layoutDetails);
        setLayout(layoutDetails);
      }

      // -- apply styles text
      pgStyles.innerHTML = innerStyles;
    }

    // -- apply event listeners
    window.addEventListener("resize", resizeAction);
  }

  // -- Public Functions
  GridFlex.prototype.getItemsInList = function (id) {
    var component = document.getElementById(id);
    var cmpChildren = component.children;
    return cmpChildren;
  };

  // -- Private Functions
  function checkColumns(obj) {
    gridFlexWidth = obj.component.offsetWidth;
    numberOfColumns = Math.floor((gridFlexWidth + columnGap) / (obj.minCardWidth + columnGap));
  }

  function setLayout(obj) {
    if (!obj.component.classList.contains(rootClass + "--list")) {
      if (obj.productItems < numberOfColumns) obj.component.classList.add(rootClass + "--center");
      else obj.component.classList.remove(rootClass + "--center");
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
    var layout;
    for (c = layouts.length - 1; c >= 0; c--) {
      layout = layouts[c];
      // -- check the number of columns
      checkColumns(layout);
      // -- updating the layout
      setLayout(layout);
    }
  }

  // -- initiate into Rexus object
  $SUPER[objectName] = new GridFlex();
})();
