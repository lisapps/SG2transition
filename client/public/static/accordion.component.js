(function () {
  // ########################## //
  // ### PRIVATE PROPERTIES ### //
  // ########################## //

  var rootClass = "c-accordion";
  var typePrefix = rootClass.charAt(0);
  var objectName = rootClass.replace(typePrefix + "-", "");
  var components;

  var resizeDelay = 250;
  var resizeTimeout;

  // -- Verify if manager exists
  /*
		The manager is intended to be as a service to the other modules
		you can (should) register the module to the manager using it's ID
		so that it can be quickly referenced when cross-communication is needed
	*/
  var $SUPER = this.Rexus ? this.Rexus : false;
  if (!$SUPER) {
    console.error('Rexus Manager needs to be preloaded for the "' + rootClass + '" to work');
    return;
  }

  // -- Verify if any dependecies are needed
  /*
		Format is very much the same as the condition above
	*/

  // ################### //
  // ### CONSTRUCTOR ### //
  // ################### //

  function Accordion() {
    // ######################### //
    // ### PUBLIC PROPERTIES ### //
    // ######################### //

    components = document.getElementsByClassName(rootClass);

    if (components) {
      var component;
      let a, b;
      for (a = components.length - 1; a >= 0; a--) {
        component = components[a];
        var tabs = component.getElementsByClassName(rootClass + "__tab");
        var tab;

        for (b = tabs.length - 1; b >= 0; b--) {
          tab = tabs[b];

          if (!tab.id) tab.id = window.Rexus.cuid.generate("accTab");

          var button = tab.firstElementChild;
          button.addEventListener("click", toggle);

          var panel = tab.nextElementSibling;
          panel.id = window.Rexus.cuid.generate("accPanel");
          // panel.dataset.height = getHeight(tab, panel);

          // -- Set Initial ARIA
          button.setAttribute("aria-controls", panel.id);
          panel.setAttribute("aria-labelledby", tab.id);

          if (tab.classList.contains(rootClass + "__tab--active")) {
            button.setAttribute("aria-expanded", true);
            // panel.style.height = panel.dataset.height;
          } else button.setAttribute("aria-expanded", false);
        }
      }
      window.addEventListener("resize", resizeAction);
    }
  }

  // ###################### //
  // ### PUBLIC METHODS ### //
  // ###################### //

  Accordion.prototype.activateTab = function (elm, target) {
    var _tab = target.getElementsByClassName(rootClass + "__tab")[0];

    elm.classList.add("js-accordion");
    elm.setAttribute("tabindex", 0);
    elm.setAttribute("role", "button");
    var id = window.Rexus.cuid.generate("accElmTab");
    elm.id = id;
    target.id = "accTargetId" + "-" + id;
    // elm.setAttribute("aria-controls", _tab.getAttribute("aria-controls"));

    elm.addEventListener("click", activateToggle);

    elm.addEventListener("keydown", function (e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        elm.click();
      }
    });

    _tab.addEventListener("click", activateToggle);
  };

  function activateToggle() {
    var elm, _tab, _btn, _panel, target, setAriaTargets;

    if (this.classList.contains(rootClass + "__tab")) {
      _tab = this;
      target = _tab.parentElement;
      _btn = _tab.firstElementChild;
      _panel = target.getElementsByClassName(rootClass + "__panel")[0];
      var elmStr = target.id.replace("accTargetId-", "");
      elm = document.getElementById(elmStr);

      if (_tab.classList.contains(rootClass + "__tab--active")) {
        setAriaTargets = {
          src: [
            {
              target: elm,
              aria: "aria-expanded",
              value: true,
            },
            {
              target: _btn,
              aria: "aria-expanded",
              value: true,
            },
            {
              target: _panel,
              aria: "aria-hidden",
              value: false,
            },
          ],
        };
        setArias(setAriaTargets);
        elm.classList.add(rootClass + "__tab--active");
      } else {
        setAriaTargets = {
          src: [
            {
              target: elm,
              aria: "aria-expanded",
              value: false,
            },
            {
              target: _btn,
              aria: "aria-expanded",
              value: false,
            },
            {
              target: _panel,
              aria: "aria-hidden",
              value: true,
            },
          ],
        };
        setArias(setAriaTargets);
        elm.classList.remove(rootClass + "__tab--active");
      }
    } else {
      elm = this;
      target = document.getElementById("accTargetId-" + elm.id);
      _tab = target.getElementsByClassName(rootClass + "__tab")[0];
      _btn = _tab.firstElementChild;
      _panel = target.getElementsByClassName(rootClass + "__panel")[0];

      elm.classList.toggle(rootClass + "__tab--active");

      if (elm.classList.contains(rootClass + "__tab--active")) {
        setAriaTargets = {
          src: [
            {
              target: elm,
              aria: "aria-expanded",
              value: true,
            },
            {
              target: _btn,
              aria: "aria-expanded",
              value: true,
            },
            {
              target: _panel,
              aria: "aria-hidden",
              value: false,
            },
          ],
        };

        setArias(setAriaTargets);
        _tab.classList.add(rootClass + "__tab--active");
      } else {
        setAriaTargets = {
          src: [
            {
              target: elm,
              aria: "aria-expanded",
              value: false,
            },
            {
              target: _btn,
              aria: "aria-expanded",
              value: false,
            },
            {
              target: _panel,
              aria: "aria-hidden",
              value: true,
            },
          ],
        };
        setArias(setAriaTargets);
        _tab.classList.remove(rootClass + "__tab--active");
      }
    }
  }

  Accordion.prototype.toggleAll = function (toggleElm, toggleClassName) {
    var section = document.getElementById(toggleElm.dataset.sectionparent);
    var _tabs = section.querySelectorAll(".c-accordion__tab, .js-accordion");
    var _tab, a;

    toggleElm.classList.toggle(toggleClassName + "--active");

    if (!toggleElm.classList.contains(toggleClassName + "--active")) {
      for (a = _tabs.length - 1; a >= 0; a--) {
        _tab = _tabs[a];
        _tab.classList.remove(rootClass + "__tab--active");
        _tab.setAttribute("aria-expanded", "false");

        if (!_tab.classList.contains("js-accordion")) {
          var _panel = _tab.nextElementSibling;
          // _panel.style.height = 0;
        }
      }
    } else {
      for (a = _tabs.length - 1; a >= 0; a--) {
        _tab = _tabs[a];
        _tab.classList.add(rootClass + "__tab--active");
        _tab.setAttribute("aria-expanded", "true");

        if (!_tab.classList.contains("js-accordion")) {
          var _panel = _tab.nextElementSibling;
          // _panel.style.height = _panel.dataset.height;
        }
      }
    }
  };

  // ####################### //
  // ### PRIVATE METHODS ### //
  // ####################### //

  // -- Toggle Panels
  function toggle() {
    var component = this.parentNode.parentNode;
    var tab = this.parentNode;
    var button = tab.firstElementChild;
    var panel = tab.nextElementSibling;

    if (component.dataset.multiselect == "false") {
      var active = component.getElementsByClassName(rootClass + "__tab--active")[0];
      tab.classList.toggle(rootClass + "__tab--active");
      if (active) {
        active.classList.remove(rootClass + "__tab--active");
        // active.nextElementSibling.style.height = 0;
        button.setAttribute("aria-expanded", "false");
      }
    } else tab.classList.toggle(rootClass + "__tab--active");

    // Set the aria-expanded
    if (tab.classList.contains(rootClass + "__tab--active")) {
      // panel.style.height = panel.dataset.height;
      button.setAttribute("aria-expanded", "true");
    } else {
      // panel.style.height = 0;
      button.setAttribute("aria-expanded", "false");
    }
  }

  // // -- Get the natural height of the element
  // function getHeight(tab, panel) {
  //     var height;
  //     if (tab.classList.contains(rootClass + "__tab--active")) {
  //         height = panel.clientHeight + "px";
  //     } else {
  //         tab.classList.add(rootClass + "__tab--active");
  //         height = panel.clientHeight + "px";
  //         tab.classList.remove(rootClass + "__tab--active");
  //     }
  //     return height;
  // };

  function setArias(obj) {
    var _elm;
    for (let key in obj.src) {
      _elm = obj.src[key].target;
      _elm.setAttribute(obj.src[key].aria, obj.src[key].value);
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
    var component, a, b;
    for (a = components.length - 1; a >= 0; a--) {
      component = components[a];
      var tabs = component.getElementsByClassName(rootClass + "__tab");
      var tab;

      for (b = tabs.length - 1; b >= 0; b--) {
        tab = tabs[b];

        var panel = tab.nextElementSibling;

        panel.style = "";
        // panel.dataset.height = getHeight(tab, panel);
        // console.log("resized", panel.dataset.height);

        // if (tab.classList.contains(rootClass + "__tab--active")) panel.style.height = panel.dataset.height
      }
    }
  }

  // -- initiate into Rexus object
  $SUPER[objectName] = new Accordion();
})();
