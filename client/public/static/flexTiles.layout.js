(function ($r) {
  // ### VALIDATION ### //
  // -- Determine if the RexusManager has been preloaded
  if (!$r) {
    console.error("FlexTiles :: RexusManager needs to be declared");
    return;
  }

  // -- Warn if this script has been preloaded
  if ($r.flexTiles) {
    console.warn(
      'FlexTiles :: Has already been loaded, consider running "Rexus.flexTiles.update()" if any flextiles are dynamically loaded',
    );
    return;
  }
  // ===== //

  // ### PRIVATE PROPERTIES ### //
  var $root, expectedWidth, maxPerRow, windowWidth, adjustedWidth;
  var ftInterval = false;
  // ### ---- ### //

  // -- constructor
  var FlexTiles = function () {
    var components = document.getElementsByClassName("l-flexTiles");
    var styleElement, styleElementContents;

    // -- parse components if available
    if (components.length) {
      var a = components.length - 1;
      var b = 0;
      var component, componentID, componentObj;
      $root = this;

      // -- create style element
      if (!document.getElementById("ftGenerated")) {
        styleElement = document.createElement("style");
        styleElement.id = "ftGenerated";
        styleElementContents = "";
        document.body.appendChild(styleElement);
      } else {
        styleElement = document.getElementById("ftGenerated");
        styleElementContents = styleElement.innerHTML;
      }

      // -- prepare properties object and apply
      this.components = [];
      for (a; a >= 0; a--) {
        component = components[a];

        // -- check if element has already been processed
        if (component.dataset.cuid) continue;

        // -- identify new key
        componentID = $r.tag("ft");
        component.dataset.cuid = componentID;

        // -- prepare new component properties
        componentObj = {
          node: component,
          childrenNodes: component.children,
          maxed: false,
          stacking: false,
          width: component.offsetWidth,
        };
        this.components.push(componentObj);

        if (!componentObj.childrenNodes.length) {
          console.warn("FlexTiles :: There needs to be at least 1 child");
          continue;
        }

        componentObj.minTileWidth = componentObj.node.dataset.minWidth
          ? parseInt(componentObj.node.dataset.minWidth, 10)
          : parseInt(
              window.getComputedStyle(componentObj.childrenNodes[0]).getPropertyValue("min-width"),
              10,
            );
        componentObj.maxTileWidth = componentObj.node.dataset.maxWidth
          ? parseInt(componentObj.node.dataset.maxWidth, 10)
          : null;

        // if no min width dataset is set, set it to default
        if (!component.dataset.minWidth) component.dataset.minWidth = componentObj.minTileWidth;

        // -- make present tiles visible
        for (b = componentObj.childrenNodes.length - 1; b >= 0; b--)
          componentObj.childrenNodes[b].dataset.flexTile = true;

        // -- element specific styling
        styleElementContents +=
          "[data-cuid=" +
          componentID +
          "] > * {" +
          "min-width:" +
          componentObj.minTileWidth +
          "px;" +
          "max-width:" +
          (componentObj.maxTileWidth ? componentObj.maxTileWidth + "px;" : "none;") +
          "}";
      }

      // -- detect all triggers
      activateTriggers();

      // -- apply styles text
      styleElement.innerHTML = styleElementContents;

      // -- initialize resize event
      ftResize();
      if (!$r.flexTiles) {
        window.addEventListener("resize", ftResize);
        window.requestAnimationFrame(ftResizeListener);
      }

      return true;
    } else return console.warn("FlexTiles :: No FlexTiles detected, check markup/syntax");
  };

  // ### PUBLIC METHODS ### //
  FlexTiles.prototype.update = function (_target) {
    var _component;

    if (_target) {
      console.log("Target ID:", _target);

      // --  component object with details (max-width/childenNodes/etc...)
      _component = this.components[_target];
      console.log("The Target:", _component);

      // -- make present tiles visible
      initializeTiles(_component);
    } else {
      for (var key in this.components) {
        // --  component object with details (max-width/childenNodes/etc...)
        _component = this.components[key];

        // -- make present tiles visible
        initializeTiles(_component);
      }
    }

    function initializeTiles(_c) {
      for (var i = 0; i < _c.childrenNodes.length; i++) _c.childrenNodes[i].dataset.flexTile = true;
    }

    ftResize();
  };

  // ### PRIVATE METHODS ### //
  function ftResizeListener() {
    ftInterval = !ftInterval;
    if (ftInterval) {
      var a = $root.components.length - 1;
      for (a; a >= 0; a--) {
        if ($root.components[a].node.offsetWidth != $root.components[a].width) {
          ftResize();
          $root.components[a].width = $root.components[a].node.offsetWidth;
        }
      }
    }
    window.requestAnimationFrame(ftResizeListener);
  }

  function ftResize() {
    var a = $root.components.length - 1;
    var b = 0;
    var _component;
    ftInterval = false;

    for (a; a >= 0; a--) {
      // --  component object with details (max-width/childenNodes/etc...)
      _component = $root.components[a];

      // -- calculate the potential width per tile against parent container
      expectedWidth = _component.node.offsetWidth / _component.childrenNodes.length;
      windowWidth = _component.node.offsetWidth;

      // -- determine where to start based on window width
      if (windowWidth / _component.minTileWidth < 2) _component.stacking = true;

      if (_component.maxTileWidth) {
        if (expectedWidth > _component.maxTileWidth && !_component.maxed) {
          /*
						This condition means that all tiles have met
						the max width size and will be aligned center
					*/

          // -- center the tiles on viewport
          _component.node.style.cssText = "justify-content: center";

          // -- maintain that the max width is equal to the max width dataset
          for (b = _component.childrenNodes.length - 1; b >= 0; b--)
            _component.childrenNodes[b].removeAttribute("style");

          _component.maxed = true;
        } else if (expectedWidth < _component.maxTileWidth && !_component.stacking) {
          /*
						This condition means that all tiles are below
						the max width but greater than the min width
					*/

          // -- reset maxed variable
          if (_component.maxed) _component.maxed = false;

          // -- reenable default style rules for component
          if (_component.node.dataset.cuid.indexOf("-tmp") >= 0)
            _component.node.dataset.cuid = _component.node.dataset.cuid.replace("-tmp", "");

          // -- remove style attribute to return tiles to default behavior
          if (_component.node.hasAttribute("style")) _component.node.removeAttribute("style");

          // -- calculate new tile widths
          maxPerRow = Math.ceil(windowWidth / _component.maxTileWidth);
          adjustedWidth = windowWidth / maxPerRow;
          if (windowWidth / _component.minTileWidth < 2) {
            if (!_component.stacking) _component.stacking = true;
          } else if (windowWidth / _component.minTileWidth >= 2) {
            for (b = _component.childrenNodes.length - 1; b >= 0; b--)
              _component.childrenNodes[b].style.width = adjustedWidth + "px";
          }
        } else if (_component.stacking) {
          // -- disable style rules for component
          if (_component.node.dataset.cuid.indexOf("-tmp") < 0)
            _component.node.dataset.cuid = _component.node.dataset.cuid + "-tmp";

          // -- check and remove style attributes from children if present
          if (_component.childrenNodes[0].hasAttribute("style"))
            for (b = _component.childrenNodes.length - 1; b >= 0; b--)
              _component.childrenNodes[b].removeAttribute("style");

          // -- if there is no room for 2 per row, begin stacking
          if (windowWidth / _component.minTileWidth >= 2)
            if (_component.stacking) _component.stacking = false;
        }
      } else {
        /*
					These conditions are true when there is
					no max-width defined on the component
				*/
        if (expectedWidth > _component.minTileWidth) {
          // -- center the tiles on viewport
          if (!_component.node.hasAttribute("style"))
            _component.node.style.cssText = "justify-content: center";

          if (_component.tmpMaxWidth) delete _component.tmpMaxWidth;

          for (b = _component.childrenNodes.length - 1; b >= 0; b--)
            _component.childrenNodes[b].style.width = expectedWidth + "px";
        } else if (!_component.stacking) {
          if (_component.node.hasAttribute("style")) _component.node.removeAttribute("style");

          if (!_component.tmpMaxWidth) _component.tmpMaxWidth = _component.minTileWidth * 1.5;

          // -- calculate new tile widths
          maxPerRow = Math.ceil(windowWidth / _component.tmpMaxWidth);
          adjustedWidth = windowWidth / maxPerRow;
          if (windowWidth / _component.minTileWidth < 2) {
            if (!_component.stacking) _component.stacking = true;
          } else if (windowWidth / _component.minTileWidth >= 2) {
            for (b = _component.childrenNodes.length - 1; b >= 0; b--)
              _component.childrenNodes[b].style.width = adjustedWidth + "px";
          }
        } else if (_component.stacking) {
          // -- check and remove style attributes from children if present
          if (_component.childrenNodes[0].hasAttribute("style"))
            for (b = _component.childrenNodes.length - 1; b >= 0; b--)
              _component.childrenNodes[b].removeAttribute("style");

          // -- if there is no room for 2 per row, begin stacking
          if (windowWidth / _component.minTileWidth >= 2)
            if (_component.stacking) _component.stacking = false;
        }
      }

      // -- track how many objects per row per component
      _component.maxPerRow = maxPerRow;

      // -- generate and correct the checkered pattern per flexTile
      if (_component.node.classList.contains("l-flexTiles--checkered")) {
        var altColor = false;
        var itemInRow = 0;
        var amtPerRow = Math.round(
          _component.node.parentNode.offsetWidth / _component.childrenNodes[0].offsetWidth,
        );
        var isOdd = amtPerRow % 2 ? true : false;
        for (b = _component.childrenNodes.length - 1; b >= 0; b--) {
          // -- reset all tiles to default
          if (_component.childrenNodes[b].classList.contains("l-flexTiles__item--alternate"))
            _component.childrenNodes[b].classList.remove("l-flexTiles__item--alternate");

          // -- apply alternate color when possible
          if (altColor) _component.childrenNodes[b].classList.add("l-flexTiles__item--alternate");

          // -- adjust alternate coloring based on number of items per row
          if (isOdd) altColor = !altColor;
          else {
            itemInRow++;
            if (itemInRow == amtPerRow) {
              itemInRow = 0;
              altColor = !altColor;
            }
            altColor = !altColor;
          }
        }
      }
    }
  }

  function activateTriggers() {
    var componentTriggers = document.querySelectorAll(".l-flexTiles--trigger");
    if (componentTriggers) {
      for (var i = 0; i < componentTriggers.length; i++) {
        var componentTrigger = componentTriggers[i];

        // -- check if trigger has already been processed
        if (componentTrigger.dataset.cuid) continue;

        // -- tag trigger with cuid
        var triggerID = $r.tag("ft");
        componentTrigger.dataset.cuid = triggerID;

        componentTrigger.addEventListener("click", triggerAction);
      }
    }
  }

  function triggerAction(e) {
    return false;
    //-- hide button
    //this.parentNode.style.display = "none";

    // -- targeting
    //var _target = document.querySelector(this.dataset.target);

    // -- activation
    // << RESERVED FOR AJAX CALL >>
  }

  $r.flexTiles = new FlexTiles();
})(this.Rexus ? Rexus : null);
