(function() {

    // -- reserved for headline text
    var headline;

    // ### CONSTRUCTOR ### //
    var Headline = function() {

        // -- capture all possible headline components
        var components = document.getElementsByClassName("c-headline");
        var a = components.length - 1;
        var b, component, componentChildren, componentChild;

        // -- check to see if any were captured
        if (a>=0) {

            // -- cycle through all headline components
            for (a; a>=0; a--) {

                component = components[a];
                componentChildren = component.children;

                // -- validate that children are present or else delete the element
                if (!componentChildren) component.parentNode.removeChild(component);
                else {

                    // -- we're defining this section to have only one child, therefore...
                    for (b = (componentChildren.length-1); b>=0; b--) {

                        // -- log each child
                        componentChild = componentChildren[b];

                        // -- capture the first child, since it's all we want
                        if (b === 0) {
                            headline = componentChild;
                            continue;
                        }

                        // -- destroy all others
                        componentChild.parentNode.removeChild(componentChild);
                    }
                }
            }
            
            // -- now that all that validates, apply the correct adjustments for this section
            applyNewStyles();
        }

        
    };

    // ### PRIVATE METHODS ### //
    function applyNewStyles() {

        // -- get the root font size in pixels
        var rootFontSize = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"), 10);

        // -- get line hight of headline text to calculate based on the root font size
        var objLineHeight = parseInt(window.getComputedStyle(headline).getPropertyValue("line-height"), 10)/rootFontSize;

        // -- get final height of headline
        // var objHeight = headline.getBoundingClientRect().height;
        var objHeight = headline.clientHeight;

        // -- define some font sizes
        var smallHeadline = 2.75;

        // -- apply them depending on height of the headline block
        if(objHeight > (rootFontSize*objLineHeight)) headline.parentNode.style.fontSize = smallHeadline + "em";
    }

    // -- initiate headline component action and register it to the rexus manager
    this.Rexus.headline = new Headline();
})();