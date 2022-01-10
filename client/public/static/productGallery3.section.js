(function() {

	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //
	/*
		These act as a "const" variables, a type of variables that
		act as a global and aren't inteded to be redifined within the class module.
	*/
	var rootClass = "s-productGallery3";
    var typePrefix = rootClass.charAt(0);
	var objectName = rootClass.replace(typePrefix + "-", "");

    // var section = document.getElementsByClassName(rootClass)[0];

    var dropDownRX = window.Rexus.dropDown;
    var productCardRX = window.Rexus.productCard3;
    var slideMenuRX = window.Rexus.slideMenu;

    var intervalId;

    var styleContents = "";
	var componentLog = {};

	// -- private properties
	var activeCell;
    var mobileSize = 512;

    var resizeDelay = 100;
    var resizeTimeout;

    var html = document.getElementsByTagName("html")[0];
    var body = html.getElementsByTagName("body")[0];
    
    var isRTL = false;
    var isTabScrolling = false;
    
    var sections = document.getElementsByClassName(rootClass);
    
    // -- Verify if manager exists
	var $SUPER = (this.Rexus) ? this.Rexus : false;
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
	}

	function ProductGallery3() {
        
        if (sections) {

            if (html.dir == "rtl") isRTL = true;
            var section;
            for (a = (sections.length - 1); a >= 0; a--) {
                section = sections[a];
                if (!section.id) section.id = "productGallery3" + a;

                var galleryCells = section.getElementsByClassName(rootClass + "__grid__cell");
                if (galleryCells.length > 0) {
                    
                    var galleryParents = section.getElementsByClassName(rootClass + "__grid");
                    var galleryParent;

                    for (b = (galleryParents.length - 1); b >= 0; b--) {
                        galleryParent = galleryParents[b];
                        galleryParent.addEventListener("click", removeFocus);
                        //     var galleryCell;
                        //     for (b = (galleryCells.length - 1); b >= 0; b--) {
                        //         galleryCell = galleryCells[b];
                        //         galleryCell.addEventListener("click", cellClick);
                        //     }
                    }
                }
                
                var filterLayouts = section.getElementsByClassName(rootClass + "__filterLayout");
        
                //===================
                //-- If "Filter Layout" exists, it will follow the layout with the product layout on the right with sorting dropdowns above it, and filters on the left.
                //===================
                //-- If it does not have "Filter Layout," it is probably just a regular product gallery with no sorting or filters
                //===================
        
                if (filterLayouts) {
                    var filterLayout;
        
                    for (b = (filterLayouts.length - 1); b >=0; b--) {
                        filterLayout = filterLayouts[b];
                        filterLayout.id = window.Rexus.cuid.generate("fltrlytt");
                        
                        var cSliderMenu = filterLayout.getElementsByClassName(rootClass + "__filterLayout__slides")[0];
                        var cSliderMenuChildren = cSliderMenu.children;
                        var filter = cSliderMenuChildren[0];
                        var sort = cSliderMenuChildren[cSliderMenuChildren.length - 1];
                        var viewSort = filterLayout.getElementsByClassName(rootClass + "__filterLayout__view__sort")[0];
                            
                
                        // -- Drop Down for Grid/List
                        var display = viewSort.getElementsByClassName(rootClass + "__filterLayout__view__sort__layout")[0];
                        if (display) {
                            var displayPanel = display.getElementsByClassName("c-dropDown__panel")[0];
                    
                            var displayOptions = displayPanel.getElementsByTagName("li");
                            var displayOption;
                            for (c = (displayOptions.length - 1); c >= 0; c--) {
                                displayOption = displayOptions[c];
                                displayOption.addEventListener("click", setDisplay);
                            }
                        }
                
                        // -- Create Sort Slider's Drop Down for Desktop
                        var createSortDetails = {
                            "sort": sort,
                            "viewSort": viewSort
                        }
                        createSortDropDown(createSortDetails);
        
                
                        //-- Setting Threshold Because Slider
                        var height = cSliderMenu.offsetHeight;
                        // productCardRX.setThreshold(height);
                    }
                }
        
                //-- Check if ProductGallery has .l-tabView. If it does, add eventListeners to prevent KeyFrame Animations when toggling between tabs
                var tabView = section.getElementsByClassName("l-tabView")[0];
                if (tabView) {
                    var tabs = tabView.getElementsByClassName("l-tabView__tabs__tab");
                    var tab;
        
                    var leftControl = tabView.getElementsByClassName(rootClass + "__tabLeft")[0];
                    var rightControl = tabView.getElementsByClassName(rootClass + "__tabRight")[0];
        
                    leftControl.addEventListener("mouseover", scrollLeft);
                    leftControl.addEventListener("mouseout", stopScrolling);
                    rightControl.addEventListener("mouseover", scrollRight);
                    rightControl.addEventListener("mouseout", stopScrolling);
        
                    for (b = (tabs.length - 1); b >= 0; b--) {
                        tab = tabs[b];
                        tab.dataset.id = section.id;
                        tab.addEventListener("click", tabAction);
                    }
        
                    var tabMobile = tabView.getElementsByClassName("l-tabView__tabs__mobile")[0];
                    var tabMobileParent = tabMobile.parentElement;
                    tabMobileParent.removeChild(tabMobile);
        
                    if (tabMobileParent.scrollWidth > window.innerWidth) {
                        body.style.overflowX = "hidden";
                        tabMobileParent.classList.add("l-tabView__tabs--activateTabScroll");
                        leftControl.classList.remove("u-invisible");
                        rightControl.classList.remove("u-invisible");
                        
                        for (b = (tabs.length - 1); b >= 0; b--) {
                            tab = tabs[b];
                            tab.addEventListener("click", scrollToTab);
                            if (!isRTL) tab.dataset.scrollLeft = tab.offsetLeft;
                            else tab.dataset.scrollLeft = tab.getBoundingClientRect().left;
                        }
                    }
                }
            }
    
            window.addEventListener("resize", resizeAction);
        }
	}
        

	// ###################### //
	// ### PUBLIC METHODS ### //
    // ###################### //
    
    ProductGallery3.prototype.scrollToTab = function (btn) {
		var tab = btn;
		scrollToTab(tab);
	}

    ProductGallery3.prototype.toggleRTL = function() {
        isRTL = !isRTL;
        var section;
        for (a = (sections.length - 1); a >= 0; a--) {
            section = sections[a];
            var tabView = section.getElementsByClassName("l-tabView")[0];
            if (tabView) {
                var tabs = tabView.getElementsByClassName("l-tabView__tabs__tab");
                var tab;
                for (a = (tabs.length - 1); a >= 0; a--) {
                    tab = tabs[a];
                    // if (isRTL) tab.dataset.scrollLeft = window.innerWidth - tab.getBoundingClientRect().left + tab.offsetWidth - 32;
                    if (isRTL) tab.dataset.scrollLeft = window.innerWidth - tab.getBoundingClientRect().left + tab.offsetWidth - 32;
                    else tab.dataset.scrollLeft = tab.offsetLeft;
                }
            }
        }
	}

	ProductGallery3.prototype.activateCell = function(cell) {
		cell.setAttribute("selected", true);
		cell.parentNode.classList.add(rootClass + "__grid--active");
		if (activeCell && activeCell != cell) {
			activeCell.removeAttribute("selected");
		}
		activeCell = cell;
	}

    ProductGallery3.prototype.deactivateCells = function() {
        var section;
		for (a = (sections.length - 1); a >= 0; a--) {
            section = sections[a];
            var galleryParents = section.getElementsByClassName(rootClass + "__grid");
            var galleryParent;
            for (b = (galleryParents.length - 1); b >= 0; b--) {
                galleryParent = galleryParents[b];
                galleryParent.classList.remove(rootClass + "__grid--active");
            }
        }
	}

	// ####################### //
	// ### PRIVATE METHODS ### //
    // ####################### //
    
    //-- Tab Scrolling
    // -- private methods
	// function cellClick(e) {
    //     this.setAttribute("selected", true);
	// 	this.parentNode.classList.add(rootClass + "__grid--active");
	// 	if (activeCell && activeCell != this) {
	// 		activeCell.removeAttribute("selected");
	// 		if(window.Rexus.productCard4) window.Rexus.productCard4.deactivateCards();
	// 	}
	// 	activeCell = this;
	// }


    function removeFocus(e) {
        if (e.target.classList.contains(rootClass + "__grid--active")) {
            e.target.classList.remove(rootClass + "__grid--active");
            activeCell.removeAttribute("selected");
            if(window.Rexus.productCard4) window.Rexus.productCard4.deactivateCards();
        }
    }
    
    function scrollLeft() {
        var tabs = this.parentElement.getElementsByClassName("l-tabView__tabs")[0];
        intervalId = setInterval(function(){ tabs.scrollLeft -= 50; }, 100);
    }

    function scrollRight() {
        var tabs = this.parentElement.getElementsByClassName("l-tabView__tabs")[0];
        intervalId = setInterval(function(){ tabs.scrollLeft += 50; }, 100);
    }

    function stopScrolling() {
        clearInterval(intervalId);
    }

    function scrollToTab(e) {
        var tabs, tab;
        if (e.target) {
            if (tab != "undefined") tab = e.target;
            else tab = this;
            tabs = tab.parentElement;
            tabs.scrollLeft = tab.dataset.scrollLeft - 16;
        }
        else {
            tabs = e.parentElement;
            tabs.scrollLeft = e.dataset.scrollLeft - 16;
        }

    }

    //-- Create the Sort Slider's Drop Down
    function createSortDropDown(_obj) {
        var viewSort = _obj.viewSort;
        var sort = _obj.sort;

        var options = viewSort.getElementsByClassName(rootClass + "__filterLayout__view__sort__options")[0];
        var dropDown = options.getElementsByClassName("c-dropDown")[0];
        var dropDownPanel = dropDown.getElementsByClassName("c-dropDown__panel")[0];

        var sortListItems = sort.getElementsByTagName("label");
        var sortListItem;

        var inputSelectionValue = dropDown.getElementsByClassName("c-dropDown__toggler__selection__value")[0];
        inputSelectionValue.innerText = sortListItems[0].innerText;

        var divUl = document.createElement("ul");
        dropDownPanel.appendChild(divUl);

        for (k = (sortListItems.length - 1); k >=0; k--) {
            sortListItem = sortListItems[k];
            var divLi = document.createElement("li");
            divLi.classList.add("c-dropDown__panel__item");
            if (k == 0) {
                divLi.classList.add("c-dropDown__panel__item--active");
            }
            divLi.innerText = sortListItem.innerText;
            divUl.appendChild(divLi);
            dropDownRX.setListSelection(divLi);
        }
    }

    //-- Set the Grid/List Layout Display
    function setDisplay() {
        var value = this.dataset.layout;
        var view = getClosestClass(this, rootClass + "__filterLayout__view");
        var gallery = view.getElementsByClassName("l-gridFlex")[0];

        var productCards = gallery.getElementsByClassName("c-productCard3");
        var productCard;

        switch (value) {
            case "default":
                if (gallery.classList.contains("l-gridFlex--list")) {
                    gallery.classList.remove("l-gridFlex--list");
                    for (l = (productCards.length - 1); l >= 0; l--) {
                        productCard = productCards[l];
                        productCard.classList.remove("c-productCard3--listView");
                        productCard.classList.remove("c-productCard3--expandOpts");
                    }
                }
                break;
            case "alternate":
                if (!gallery.classList.contains("l-gridFlex--list")) {
                    gallery.classList.add("l-gridFlex--list");
                    for (m = (productCards.length - 1); m >= 0; m--) {
                        productCard = productCards[m];
                        productCard.classList.add("c-productCard3--listView");
                    }
                }
                break;
        }
    }

    //-- Disable any KeyFrame Animations when tabs are clicked
    function tabAction() {
        var section = document.getElementById(this.dataset.id);

        var productCards = section.getElementsByClassName("c-productCard3");
		for (n = (productCards.length - 1); n >= 0; n--) {
            var productCard3 = productCards[n];
			productCard3.classList.add("c-productCard3--preload");
        }
        setTimeout(function() {
            for (o = (productCards.length - 1); o >= 0; o--) {
                var producCard3 = productCards[o];
                producCard3.classList.remove("c-productCard3--preload");
            }
        }, 800);

        var sliders = section.getElementsByClassName("c-slideMenu");
        var slider;
        for (o = (sliders.length - 1); o >= 0; o--) {
            slider = sliders[o];
            slider.dataset.scrollnumber = 0;
            slider.classList.remove("c-slideMenu--sticky");
            slider.classList.remove("c-slideMenu--stickyAnimate");
        }

        var targetPanel = document.getElementById(this.dataset.tab);
        var slideMenu = targetPanel.getElementsByClassName("c-slideMenu")[0];
        slideMenuRX.activateSlideMenu(slideMenu);

        var tabMobileParent = this.parentElement;
        if (!isTabScrolling && tabMobileParent.scrollWidth > window.innerWidth) {
            body.style.overflowX = "hidden";
            tabMobileParent.classList.add("l-tabView__tabs--activateTabScroll");
            var leftControl = tabMobileParent.parentElement.getElementsByClassName(rootClass + "__tabLeft")[0];
            var rightControl = tabMobileParent.parentElement.getElementsByClassName(rootClass + "__tabRight")[0];
            leftControl.classList.remove("u-invisible");
            rightControl.classList.remove("u-invisible");
            isTabScrolling = true;

            var tabs = tabMobileParent.getElementsByTagName("li");
            var tab;
            
            for (d = (tabs.length - 1); d >= 0; d--) {
                tab = tabs[d];
                tab.addEventListener("click", scrollToTab);
                if (!isRTL) tab.dataset.scrollLeft = tab.offsetLeft;
                else tab.dataset.scrollLeft = tab.getBoundingClientRect().left;
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

    // -- triggers on resize event
	function resizeAction() {

		// -- limit resize action to fire at "end" of resize
		if(resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);

	}

	// -- action that runs at end of window resize
	function resizeTimeoutAction() {
        var section;

        for (a = (sections.length - 1); a >= 0; a--) {
            section = sections[a];
            var tabViews = section.getElementsByClassName("l-tabView")[0];
            if (tabViews) {
                var tabsParent = tabViews.getElementsByClassName("l-tabView__tabs")[0];
                var tabs = tabsParent.getElementsByClassName("l-tabView__tabs__tab");

                var leftControl = tabViews.getElementsByClassName(rootClass + "__tabLeft")[0];
                var rightControl = tabViews.getElementsByClassName(rootClass + "__tabRight")[0];
                
                if (tabs[tabs.length - 1].getBoundingClientRect().right + 16 >= window.innerWidth) {
                    tabsParent.classList.add("l-tabView__tabs--activateTabScroll");
                    leftControl.classList.remove("u-invisible");
                    rightControl.classList.remove("u-invisible");
                    for (a = (tabs.length - 1); a >= 0; a--) {
                        tab = tabs[a];
                        tab.dataset.scrollLeft = tab.offsetLeft;
                    }
                } else {
                    body.style.overflowX = "auto";
                    tabsParent.classList.remove("l-tabView__tabs--activateTabScroll");
                    leftControl.classList.add("u-invisible");
                    rightControl.classList.add("u-invisible");
                }
            }
        }
	}

    // -- initiate into Rexus object
	$SUPER[objectName] = new ProductGallery3();
})();