(function () {
    if (!this.Rexus) return false;

    // ### CONSTRUCTOR ### //
    var Graph = function () {
        var components = document.querySelectorAll(".c-graph");

        if (components) {
            for (var i = 0; i < components.length; i++) {
                var component = components[i];

                // -- bar graph (horizontal support only)
                if (component.classList.contains("c-graph--bar")) {
                    var graphStatus = drawBarGraph(component);
                    if (graphStatus) continue;
                    else this.msg = graphStatus;
                }
                // -- line graph
                // -- future consideration

                // -- pie graph
                // -- future consideration
            }
        }
    };

    // ### PRIVATE METHODS ### //
    function drawBarGraph(_c) {
        var graphMax = parseInt(_c.dataset.maxNumber, 10);
        var graphElements = _c.children;

        for (var i = 0; i < graphElements.length; i++) {
            var graphElement = graphElements[i];
            var graphInfo = graphElement.firstElementChild;
            var graphElementData;

            // -- color adjustments
            if (graphElement.dataset.color) {
                var graphBarColor = graphElement.dataset.color;
                var _hsl = hexToRgb(graphBarColor);
                _hsl = rgbToHsl(_hsl);
                if(_hsl.l>=60 || (_hsl.l>45 && _hsl.h<200)) graphInfo.style.color = "#000000";
	            else graphInfo.style.color = "#FFFFFF";
                graphElement.style.backgroundColor = graphBarColor;
            }
            if (graphElement.dataset.num) graphElementData = graphElement.dataset.num;
            else return "Missing Data in bar graph";
            graphElement.style.width = (graphElementData / graphMax) * 100 + "%";
        }

        return true;
    }

    function hexToRgb(hex) {

        hex = (hex.charAt(0) === "#") ? hex.substring(1, 7) : hex;

        var clrMode = "rgb";
        var clrProperties = {};
        var hexGroup = hex.length / clrMode.length;
        var hexLog = propertyLog = 0;
        var clrValue;

        for (var i = 0; i < hex.length; i++) {
            hexLog++;

            if (hexLog != hexGroup) clrValue = hex[i];
            else clrValue += hex[i];

            if (hexLog === hexGroup) {
                clrProperties[clrMode[propertyLog]] = parseInt(clrValue, 16);
                propertyLog++;
                hexLog = 0;
            }
        }

        return clrProperties;
    }

    function rgbToHsl(rgb) {
        var r = rgb.r / 255;
        var g = rgb.g / 255;
        var b = rgb.b / 255;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let d = max - min;
        let h;

        if (d === 0) h = 0;
        else if (max === r) h = (g - b) / d % 6;
        else if (max === g) h = (b - r) / d + 2;
        else if (max === b) h = (r - g) / d + 4;

        let l = (min + max) / 2;
        let s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

        return {"h": Math.round(h * 60), "s": Math.round(s * 100), "l": Math.round(l * 100)};
    }

    this.Rexus.Graph = new Graph();
})();