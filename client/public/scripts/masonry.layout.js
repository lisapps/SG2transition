(function () {

    // -- Private Variables
    var rootClass = "l-masonry";
    var typePrefix = rootClass.charAt(0);
    var objectName = rootClass.replace(typePrefix + "-", "");
    var components;

    var masonryLayouts = [{
        "id": "",
        "centerpoints": [],
        "centerpoints": []
    }];
    var windowWidth;

    var resizeDelay = 100;
    var resizeTimeout;

    var $SUPER = (this.Rexus) ? this.Rexus : false;
    if (!$SUPER) {
        console.error("Rexus Manager needs to be preloaded for the \"" + rootClass + "\" to work");
        return;
    }

    // -- Constructor
    function Masonry() {
        components = document.getElementsByClassName(rootClass);
        if (components) {
            var component;
            windowWidth = window.innerWidth;

            for (a = (components.length - 1); a >= 0; a-- ) {
                component = components[a];
                component.id = "masonry" + a;

                if (component.classList.contains(rootClass + "--horizontal")) {
                    var centerpoints;
                    if (component.dataset.centerpoints) {

                        // -- Dataset is string so split it by comma
                        breakpoints = component.dataset.breakpoints.split(",");
                        var breakpoint;
                        // -- Then convert to number array
                        for (b = (breakpoints.length - 1); b >= 0; b--) {
                            breakpoint = breakpoints[b];
                            breakpoints[b] = parseInt(breakpoint, 10);
                        }

                        centerpoints = component.dataset.centerpoints.split(",");
                        var centerpoint;
                        for (b = (centerpoints.length - 1); b >= 0; b--) {
                            centerpoint = centerpoints[b];
                            centerpoints[b] = parseInt(centerpoint, 10);
                        }

                        var masonryInfo = {
                            "id" : component.id,
                            "breakpoints" : breakpoints,
                            "centerpoints" : centerpoints
                        }
                        masonryLayouts.push(masonryInfo);
                        setMaxWidth(component);
                    }
                }
            }
        }
        // -- apply event listeners
        window.addEventListener("resize", resizeAction);
    }



    // -- Public Functions


    // -- Private
    function setMaxWidth(component) {

        var masonry, breakpoints, centerpoints;
        for (c = (masonryLayouts.length - 1); c >= 0; c--) {
            masonry = masonryLayouts[c];
            if (component.id == masonry.id) {
                breakpoints = masonry.breakpoints;
                centerpoints = masonry.centerpoints; 
                console.log("these are my breakpoints!", breakpoints);
                console.log("these are my centerpoints!", centerpoints);
                break;
            }
        }

        console.log("setting max on the l-masonry__container");
        var centerpoint, maxWidth, breakpointClear;

        for (c = (centerpoints.length - 1); c >= 0; c--) {
            centerpoint = centerpoints[c];

            if (windowWidth <= centerpoint) {
                console.log("keep going");
            } else {
                console.log("stop! this is the current centerpoint", centerpoint);
                maxWidth = centerpoints[c];
                breakpointClear = breakpoints[c];
                if (typeof breakpointClear == "undefined") breakpointClear = windowWidth + 1;
                break;
            }
        }

        masonryContainer = component.firstElementChild;
        
        if (windowWidth > maxWidth && windowWidth < breakpointClear) {
            masonryContainer.style.maxWidth = maxWidth + "px";
            component.classList.add(rootClass + "--center");
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
        windowWidth = innerWidth;

        var component, masonryContainer;
        for (a = (components.length - 1); a >= 0; a--) {
            component = components[a];
            component.classList.remove(rootClass + "--center");
            masonryContainer = component.firstElementChild;
            masonryContainer.style = "";
            setMaxWidth(component);
        }
    }









    // function setHorizontalLayout(listItems) {
    //     console.log("setting horizontal layout..");
    //     var listItem;

    //     if (firstBreak <= windowWidth && windowWidth < secondBreak) {
    //         for (var b = 0; b < listItems.length; b += 3) {
    //             listItem = listItems[b];
    //             listItem.style.maxWidth = "51em";
    //             listItem.style.width = "100%";
    //             var card = listItem.firstElementChild;
    //             card.classList.add("c-articleCard2--large");
    //             hasLarge.push(card);
    //         }
    //     } else if (secondBreak <= windowWidth) {
    //         console.log("second breakkkkkk");
    //         for (var b = 0; b < listItems.length; b += 4) {
    //             listItem = listItems[b];
    //             listItem.style.maxWidth = "51em";
    //             var card = listItem.firstElementChild;
    //             card.classList.add("c-articleCard2--large");
    //             if (b != 0) {
    //                 var nextCard = listItems[b-1].firstElementChild;
    //                 nextCard.classList.add("c-articleCard2--large");
    //             }
    //             hasLarge.push(card);
    //         }
    //     }
    // }

    // // -- triggers on resize event
    // function resizeAction() {
    //     // -- limit resize action to fire at "end" of resize
    //     if (resizeTimeout) clearTimeout(resizeTimeout);
    //     resizeTimeout = setTimeout(resizeTimeoutAction, resizeDelay);
    // }

    // // -- action that runs at end of window resize
    // function resizeTimeoutAction() {
    //     console.log(hasLarge);
    //     console.log("resizing!");
    //     windowWidth = window.innerWidth;

    //     var card, listItem;
    //     for (a = (hasLarge.length - 1); a >= 0; a--) {
    //         card = hasLarge[a];
    //         card.classList.remove("c-articleCard2--large");
    //         listItem = card.parentNode;
    //         listItem.style = "";
    //     }

    //     hasLarge = [];

    //     var component;
    //     for (a = (components.length - 1); a >= 0; a--) {
    //         component = components[a];
    //         var listItems = component.getElementsByClassName(rootClass + "__item");
            
    //         if (component.classList.contains(rootClass + "--horizontal")) {
    //             setHorizontalLayout(listItems);
    //         }
    //     }
    // }

    // -- initiate into Rexus object
    $SUPER[objectName] = new Masonry();
})();