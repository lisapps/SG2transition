(function() {

    // ########################## //
    // ### PRIVATE PROPERTIES ### //
    // ########################## //
    /*
        These act as a "const" variables, a type of variables that
        act as a global and aren't inteded to be redifined within the class module.
    */
    var rootClass = "c-slideMenu";
    var typePrefix = rootClass.charAt(0);
    var objectName = rootClass.replace(typePrefix + "-", "");
    
    var resizeDelay = 250;
    var components, resizeTimeout;
    var screenMD = 800;
    var scrollDuration = 1000; // - in ms

    var filterFocusables = [];

    var navHeight = 0;

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (!document.documentElement.style.getPropertyValue('--navHeight')) document.documentElement.style.setProperty('--navHeight', `0px`);

    var body = document.getElementsByTagName("body")[0];

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

    // -- Verify if any dependecies are needed
    /*
        Format is very much the same as the condition above
    */

    // ################### //
    // ### CONSTRUCTOR ### //
    // ################### //

    function SlideMenu() {
        components = document.getElementsByClassName(rootClass);
        if (components) {

            for (a = (components.length - 1); a >= 0; a--) {
                component = components[a];
                if (!component.id) component.id = "slideMenu" + a;
                initialize(component);

                if (window.innerWidth < screenMD) {
                    const observer = new window.IntersectionObserver(handler, {threshold: [0,1]});
                    observer.observe(component);
                }
            }
            window.addEventListener("scroll", navHeightUpdate);
            window.addEventListener("resize", resizeAction); 
        }
    }

    // ###################### //
    // ### PUBLIC METHODS ### //
    // ###################### //
    SlideMenu.prototype.activateSlideMenu = function (_o) {
        var slideMenu = _o;
        initialize(slideMenu);
    }

    SlideMenu.prototype.closePanel = function () {
        closePanel();
    }

    SlideMenu.prototype.setObserver = function (component) {
        const observer = new window.IntersectionObserver(handler, {threshold: [0,1]});
        observer.observe(component);
    }

    // ####################### //
    // ### PRIVATE METHODS ### //
    // ####################### //
    /*
        These methods are only accessible only within this class module
        they act as a service to help complete the module during initiation
    */

    function initialize(c) {
        component = c;

        
        var sliders = component.getElementsByClassName(rootClass + "__slider");
        var slider;
        for (b = (sliders.length - 1); b >= 0; b--) {
            slider = sliders[b];
            slider.id = "slider" + b;
            var toggle = slider.getElementsByTagName("button")[0];
            toggle.id = "sliderToggle" + b;
            toggle.addEventListener("click", checkAction);
            
            var panel = slider.getElementsByClassName(rootClass + "__slider__panel")[0];
            panel.id = "sliderPanel" + b;
            panel.setAttribute("aria-labelledby", toggle.id);

            toggle.setAttribute("aria-controls", panel.id);
            toggle.setAttribute("aria-expanded", false);

            var closeBtns = slider.getElementsByClassName(rootClass + "__slider__panel__cta__closeBtn");
            if (closeBtns) {
                var closeBtn;
                for (c = (closeBtns.length - 1); c >= 0; c--) {
                    closeBtn = closeBtns[c];
                    closeBtn.addEventListener("click", closePanel);
                }
            }

            var content = panel.getElementsByClassName(rootClass + "__slider__panel__content")[0];
            var checkBoxRadios = content.querySelectorAll(".f-input__checkbox, .f-input__radio");
            var checkBoxRadio, li;
            for (d = (checkBoxRadios.length - 1); d >= 0; d--) {
                checkBoxRadio = checkBoxRadios[d];
                li = checkBoxRadio.parentNode.parentNode;
                li.setAttribute("tabindex", 0);
                li.addEventListener("keydown", keyboardAction);
            }

            var focusableElements = slider.querySelectorAll('a, .e-btn, textarea, select, details');
            // var focusableElements = slider.querySelectorAll('a, .e-btn, textarea, select, details, [tabindex]:not([tabindex="-1"]');
            var firstFocusableElement = focusableElements[0];
            var lastFocusableElement = focusableElements[focusableElements.length - 1];

            var filterFocusableElementsInfo = {
                "id": slider.id,
                "focusableElements": focusableElements,
                "firstFocus": firstFocusableElement,
                "lastFocus": lastFocusableElement
            }
            
            filterFocusables.push(filterFocusableElementsInfo);
            panel.addEventListener("keydown", trapFocus);
        }
    }


    function checkAction() {
        var slider = this.parentElement;
        var slideMenu = slider.parentElement;

        if (!slideMenu.classList.contains(rootClass + "--sticky")) {
            if (window.innerWidth < screenMD) {
                scrollTo(slideMenu);
                setTimeout(togglePanel, 1000, this);
            } else togglePanel(this);
        } else togglePanel(this)
    }


    // -- toggle filter panel
    function togglePanel(toggle) {
        var slider = toggle.parentElement;
        var slideMenu = slider.parentElement;
        
        slider.classList.toggle(rootClass + "__slider--active");

        lastFocusBeforeOpen = document.activeElement;

        if (slider.classList.contains(rootClass + "__slider--active")) {
            toggle.setAttribute("aria-expanded", true);
            var sliderPanel = slider.getElementsByClassName(rootClass + "__slider__panel")[0];

            getFocusableElements(sliderPanel);
            sliderPanel.addEventListener("keydown", trapFocus);

        } else { 
            toggle.setAttribute("aria-expanded", false);
            lastFocusBeforeOpen.focus();
        }
        
        if (slider.classList.contains(rootClass + "__slider--right")) {
            slideMenu.classList.toggle(rootClass + "--activeRight");
        } else {
            slideMenu.classList.toggle(rootClass + "--activeLeft");
        }
        
        document.body.classList.toggle(rootClass + "--disableScroll");

        if (document.body.classList.contains(rootClass + "--disableScroll")) disableScroll();
        else enableScroll();
    }

    function preventDefault(e){
        e.preventDefault();
    }
    
    function disableScroll(){
        if (window.innerWidth <= screenMD) {
            document.addEventListener('touchmove', preventDefault, { passive: false });
            var activeSlider = document.getElementsByClassName(rootClass + "__slider--active")[0];
            var sliderContent = activeSlider.getElementsByClassName(rootClass + "__slider__panel__content")[0];
            sliderContent.addEventListener("touchstart", scrollContent);
        }
    }
    function enableScroll(){
        document.removeEventListener('touchmove', preventDefault, { passive: true });
    }
    function scrollContent(e) {
        e.stopPropagation();
        if (this.firstElementChild.offsetHeight > this.offsetHeight) this.addEventListener("touchmove", scroll, { passive: false});
        else this.removeEventListener("touchmove", scroll, { passive: true });
    }

    function scroll(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }

    //-- Close Slider Panel
    function closePanel(e) {
        var closeButton, slider;
        if (!e) slider = document.getElementsByClassName(rootClass + "__slider--active")[0];
        else {
            closeButton = this;
            slider = getClosestClass(closeButton, rootClass + "__slider");
        }

        slider.classList.remove(rootClass + "__slider--active");

        var cSlideMenu = slider.parentElement;
        if (cSlideMenu.classList.contains(rootClass + "--activeLeft")) cSlideMenu.classList.remove(rootClass + "--activeLeft");
        else cSlideMenu.classList.remove(rootClass + "--activeRight");

        document.body.classList.remove(rootClass + "--disableScroll");
        if (document.body.classList.contains(rootClass + "--disableScroll")) disableScroll();
        else enableScroll();

        if (window.Rexus.overlay) window.Rexus.overlay.close();
    }

    function handler(entries) {
        var entry;
        for (b = (entries.length - 1); b >= 0; b--) {
            entry = entries[b];
            if (navHeight == 0) {
                if (entry.boundingClientRect.top <= 1) entry.target.classList.add(rootClass + "--sticky");
                else entry.target.classList.remove(rootClass + "--sticky");
            } else {
                if (entry.boundingClientRect.top <= navHeight) entry.target.classList.add(rootClass + "--sticky");
                else entry.target.classList.remove(rootClass + "--sticky");
            }
        }
    }

    function navHeightUpdate() {
        navHeight = parseInt(document.documentElement.style.getPropertyValue('--navHeight'), 10);
        var component;
        for (a = (components.length - 1); a >= 0; a--) {
            component = components[a];

            if (window.innerWidth <= screenMD) {
                const observer = new window.IntersectionObserver(handler, {threshold: [0,1]});
                observer.observe(component);
            }
        }
    }

    // -- scroll to section event
	function scrollTo(slideMenu) {
		var targetTop = slideMenu.getBoundingClientRect().top;

		scrollProperties = {
			"startPoint": window.scrollY,
			"distance": ((targetTop+window.scrollY) - window.scrollY) + 10
		};

		window.requestAnimationFrame(scrollWindow);
	}

	function scrollWindow(timestamp) {
		if(!scrollProperties.timestamp) scrollProperties.timestamp = timestamp;
		var progress = timestamp - scrollProperties.timestamp;
		var newPos = easeOut(progress, scrollProperties.startPoint, scrollProperties.distance, scrollDuration);

		window.scrollTo(0, newPos);
		if(progress < scrollDuration) window.requestAnimationFrame(scrollWindow);
	}

	function easeOut(time, startValue, change, duration) {
		time /= duration / 2;
		if (time < 1)  {
			 return change / 2 * time * time + startValue;
		}
   
		time--;
		return -change / 2 * (time * (time - 2) - 1) + startValue;
	};


    function keyboardAction(e) {
        if (e.keyCode == 13) {
            fInputRadio = this.firstElementChild;
            var input = fInputRadio.getElementsByTagName("input")[0];
            label = fInputRadio.getElementsByTagName("label")[0];
            if (input.checked == true) input.checked = false;
            else input.checked = true;
        } 
    }

    function getFocusableElements(slidePanel) {
        var focusableElements = slidePanel.querySelectorAll('a, .e-btn, textarea, select, details');
        firstFocusElement = focusableElements[0];
    }
    
    function trapFocus(e) {
        var panel = this;
        var slider = panel.parentNode;
        var filterObj;
        for (j = (filterFocusables.length - 1); j >= 0; j--) {
            filterObj = filterFocusables[j];

            if (filterObj.id == slider.id) {
                var firstFocusableElement = filterObj.firstFocus;
                var lastFocusableElement = filterObj.lastFocus;
            }
        }

        if (e.keyCode == 9 && e.shiftKey) {
            if (document.activeElement == firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else if (e.keyCode == 9) {
            if (document.activeElement == lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
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

        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        for (a = (components.length - 1); a >= 0; a--) {
            var component = components[a];

            component.classList.remove(rootClass + "--active");
            var sliders = component.getElementsByClassName(rootClass + "__slider");
    
            if (window.innerWidth >= screenMD) {
                if (component.classList.contains(rootClass + "--activeLeft")) {
                    component.classList.remove(rootClass + "--activeLeft");
                } else {
                    component.classList.remove(rootClass + "--activeRight");
                }
        
                var slider;
                for (f = (sliders.length - 1); f >= 0; f--) {
                    slider = sliders[f];
                    slider.classList.remove(rootClass + "__slider--active");
                    var toggle = slider.getElementsByTagName("button")[0];
                    toggle.setAttribute("aria-expanded", false);
                    component.classList.remove(rootClass + "--sticky");
                }
            }
            
            document.body.classList.remove(rootClass + "--disableScroll");
            
            var activeOverlays = document.getElementsByClassName(rootClass + "__overlay");
            if (activeOverlays) {
                var overlay;
                for (g = (activeOverlays.length - 1); g >= 0; g--) {
                    overlay = activeOverlays[g];
                    overlay.classList.remove(rootClass + "__overlay");
                }
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
    $SUPER[objectName] = new SlideMenu();
})();