(function($SUPER) {
	if(!$SUPER) {
		console.error("Rexus Manager needs to be preloaded for the \""+rootClass+"\" to work");
		return;
    }
    
    var rootClass = "l-tabMenu";
	var typePrefix = rootClass.charAt(0);
    var objectName = rootClass.replace(typePrefix + "-", "");

    var styleContents = "";
    var componentLog = {};
    var components = document.getElementsByClassName(rootClass);

    function TabMenu() {
        if(components.length) {
            
            // -- set variables
            var styleTag = document.createElement("style");
            var a = components.length - 1;
            var b, component, componentTabs, componentTab;
            
            // -- component cycle
            for(a; a>=0; a--) {
                component = components[a];
                component.id = (component.id) ? component.id : "tabs" + a;
                
                componentTabs = component.getElementsByClassName(rootClass+"__tab");
                styleContents += "#" + component.id + " ." + rootClass + "__panel { grid-column-end: " + (componentTabs.length+1) + "; }";
                b = componentTabs.length - 1;
                for(b; b>=0; b--) {
                    componentTab = componentTabs[b];
                    componentTab.addEventListener("click", tabAction);
                    if(b===0) componentTab.click();
                }
            }
            
            styleTag.innerHTML = styleContents;
            document.body.appendChild(styleTag);
        }
    }

    function tabAction(e) {
        var rootComponent = this.parentNode;
        if(componentLog[rootComponent.id] != this) {
            if(componentLog[rootComponent.id])
                componentLog[rootComponent.id].classList.remove(rootClass + "__tab--active");
            this.classList.add(rootClass + "__tab--active");
            componentLog[rootComponent.id] = this;
        }
    }

    // -- initiate into Rexus object
    $SUPER[objectName] = new TabMenu();
    
})(Rexus);

