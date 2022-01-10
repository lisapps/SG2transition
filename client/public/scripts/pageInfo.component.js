(function($SUPER) {

    if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
    }
    
    var rootClass = "s-pageInfo";
	var typePrefix = rootClass.charAt(0);
    var objectName = rootClass.replace(typePrefix + "-", "");

    var components = document.getElementsByClassName(rootClass);
    var resizeTimeout, resizing;

    // -- CONSTRUCTOR
    function PageInfo() {
        if(components.length) {
            adjustComponents();
            window.addEventListener("resize", delayResizeEvent);
        }   
    }

    // -- PRIVATE METHODS
    function delayResizeEvent() {
        if(!resizing) {
            console.log('RUN!');
            var a = components.length - 1;
            for(a; a>=0; a--) {
                component = components[a];
                component.classList.add(rootClass+"--resizing");
            }
        }
        resizing = true;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustComponents, 250);
    }

    function adjustComponents() {
        // -- Set Variables
        var a = components.length - 1;
        var component, cmpLayout, cmpLayoutWidth, cmpLayoutNameWidth, cmpLayoutTagWidth;

        for(a; a>=0; a--) {
            component = components[a];
            cmpLayout = component.firstElementChild;
            cmpLayoutWidth = cmpLayout.offsetWidth - (parseInt(window.getComputedStyle(cmpLayout, null).getPropertyValue('padding-left'), 10) * 2);
            cmpLayoutNameWidth = cmpLayout.firstElementChild.offsetWidth;
            cmpLayoutTagWidth = cmpLayout.lastElementChild.offsetWidth;

            component.classList.remove(rootClass+"--resizing");
            resizing = false;

            // -- condition to add/remove class
            if(cmpLayoutNameWidth < cmpLayoutWidth) component.classList.remove(rootClass+"--compact");
            else {
                component.classList.remove(rootClass+"--expanded");
                component.classList.add(rootClass+"--compact");
                continue;
            }

            // -- condition to add/remove class
            if(cmpLayoutTagWidth < cmpLayoutWidth) component.classList.remove(rootClass+"--expanded");
            else component.classList.add(rootClass+"--expanded");
        }
    }

    // -- initiate into Rexus object
    $SUPER[objectName] = new PageInfo();

})(Rexus)