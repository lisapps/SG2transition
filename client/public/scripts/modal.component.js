(function () {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

    var rootClass = "c-modal";
    var typePrefix = rootClass.charAt(0);
    var objectName = rootClass.replace(typePrefix + "-", "");
    var components;
  
    var body = document.getElementsByTagName("body")[0];
  
    let modalActions = {};
    var focusableEls, firstFocusableEl, lastFocusableEl, lastFocusBeforeOpen;
  
    var _id = 0;

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
  
    var modalTriggers = document.querySelectorAll("[data-modal]");
    components = document.getElementsByClassName(rootClass);
  
    function Modal() {
          
        if (components) {
        
            var modalTrigger;
            for (a = (modalTriggers.length - 1); a >= 0; a--) {
                modalTrigger = modalTriggers[a];
                modalTrigger.addEventListener("click", openModal);
            }

            var component;
            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
            
                var closeBtns = component.querySelectorAll("[data-close]");
                var closeBtn;
                
                for (b = (closeBtns.length - 1); b >= 0; b--) {
                    closeBtn = closeBtns[b];
                    if (closeBtn.dataset.close == "true") closeBtn.addEventListener("click", closeModal);
                }
                    
            }
        }
        
    }
  
  
    //-- Update Modal
    Modal.prototype.update = function (obj) {
        let a = obj.events.length - 1;
        let event;
        for (a; a>=0; a--) {
            event = obj.events[a];
            if (!modalActions[obj.link]) modalActions[obj.link] = {};
            modalActions[obj.link]["source"] = obj.element;
            if (!modalActions[obj.link][event.name]) modalActions[obj.link][event.name] = [];
            modalActions[obj.link][event.name].push(event.action);
        }
    }

    //-- Create Modal
    Modal.prototype.createModal = function (obj) {
        var _trigger = obj.trigger;                        // -- What element is trigger the modal
        var _content = obj.content;                        // -- What is the content
        var _deactivateClose = obj.deactivateClose;        // -- Is deactivateClose = true/false
        var _darkmode = obj.darkmode;                      // -- Is it darkMode = true/false
        var _hasEscBtn = obj.hasEscBtn                     // -- Is there a Close Button = true/false
        

        //-- Setting Modal ID
        var newModalId = "newModal" + _id

        // -- Setting Trigger
        if (_trigger.length > 1) {
            var trigger;
            for (a = (_trigger.length - 1); a >= 0; a-- ) {
                trigger = _trigger[a];
                trigger.dataset.modal = newModalId;
                trigger.addEventListener("click", openModal);
            }
        } else {
            _trigger.dataset.modal = newModalId;
            _trigger.addEventListener("click", openModal);
        }

        // -- Creating Modal
        var _modal = document.createElement("div");
        _modal.id = newModalId;
        _modal.classList.add("c-modal");
        _modal.setAttribute("role", "dialog");
        _modal.setAttribute("aria-modal", "true");
        _modal.setAttribute("aria-hidden", "false");
        _modal.dataset.deactivateclose = _deactivateClose;
        body.appendChild(_modal);

        
        // -- Creating Overlay
        var _overlay = document.createElement("div");
        _overlay.classList.add(rootClass + "__overlay");
        _modal.appendChild(_overlay);

        
        // -- Dark Mode
        if (_darkmode) _modal.classList.add("c-modal--darkmode");


        // -- Close Button on Top Right
        if (_hasEscBtn) {
            var _escButton = document.createElement("button");
            _escButton.classList.add(rootClass + "__close");
            _escButton.setAttribute("aria-label", "close");
            _escButton.dataset.close = true;
            _escButton.addEventListener("click", closeModal);

            var _svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            _svg.setAttribute("viewBox", "0 0 14 14");

            _svg.innerHTML = '<path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"/><path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"/>';
            _escButton.appendChild(_svg);

            _modal.appendChild(_escButton);
        }


        // -- Creating Content Div
        var _modalContent = document.createElement("div");
        _modalContent.classList.add(rootClass + "__content");
        _modal.appendChild(_modalContent);


        // -- Adding Content to Content Div
        if (_content) _modalContent.appendChild(_content);

        _id++;

        return _modal;
    }
  

    //-- Open Modal
    function openModal() {
        
        //-- Lock Background
        body.classList.add(rootClass + "--active");
        
        var _modal = document.getElementById(this.dataset.modal);
        _modal.classList.add(rootClass + "--open");
        _modal.setAttribute("aria-hidden", "false");
        
        if (modalActions[_modal.id] && modalActions[_modal.id]["open"]) {
            let actions = modalActions[_modal.id]["open"];
            let a = actions.length - 1;
            for (a; a >= 0; a--) actions[a](modalActions[_modal.id]["source"]);
        }  
    
        var overlay = _modal.getElementsByClassName(rootClass + "__overlay")[0];
        
        if (!_modal.dataset.deactivateclose == true || _modal.dataset.deactivateclose == null) {
            overlay.addEventListener("click", closeModal);
            _modal.addEventListener("keydown", function (e) {
                if (e.keyCode == "27") {
                closeEscModal();
                }
            });
        }
        
        lastFocusBeforeOpen = document.activeElement;
        getFocusables(_modal);
        
        if (firstFocusableEl) firstFocusableEl.focus();
        
        _modal.addEventListener("keydown", trapFocus);
        
    }
  
    //-- Close Modal
    function closeModal() {
        
        //-- Unlock Background
        body.classList.remove(rootClass + "--active");
    
        var _modal = getClosestClass(this, rootClass);
        _modal.classList.remove(rootClass + "--open");
        _modal.setAttribute("aria-hidden", "true");
    
        if (modalActions[_modal.id] && modalActions[_modal.id]["close"]) {
            let actions = modalActions[_modal.id]["close"];
            let a = actions.length - 1;
            for (a; a>=0; a--) actions[a](modalActions[_modal.id]["source"]);
        }        
    
        lastFocusBeforeOpen.focus();
    }
  
  
    function closeEscModal(e) {
        var component;
        for (a = (components.length - 1); a >= 0; a--) {
            component = components[a];
            body.classList.remove(rootClass + "--active");
            component.classList.remove(rootClass + "--open");
            component.setAttribute("aria-hidden", "true");
        }
    }
  
  
    function getFocusables(obj) {
        focusableEls = obj.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex='0']");
    
        firstFocusableEl = focusableEls[0];
        lastFocusableEl = focusableEls[focusableEls.length - 1];
    }
  
    function trapFocus(e) {
        if (e.keyCode == 9 && e.shiftKey) {
            if (document.activeElement == firstFocusableEl) {
                e.preventDefault();
                lastFocusableEl.focus();
            }
        } else if (e.keyCode == 9) {
            if (document.activeElement == lastFocusableEl) {
                e.preventDefault();
                firstFocusableEl.focus();
            }
        }
    }
  
    function getClosestClass(el, targetClass) {
        while (!el.classList.contains(targetClass)) {
            el = el.parentNode;
            if (!el) return null;
        }
        return el;
    }
  
    // -- initiate into Rexus object
    $SUPER[objectName] = new Modal();
})();
// })();