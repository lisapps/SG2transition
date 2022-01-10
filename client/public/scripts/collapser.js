(function() {
	var triggers = document.querySelectorAll('[data-collapse]');

// Constructor
	var Collapser = function() {
		if (triggers) {
			for (var i = 0; i < triggers.length; i++) {
				var trigger = triggers[i];
				trigger.addEventListener("click", collapse);
			}
		}
      };

// Public Method
      Collapser.prototype.collapse = function(id) {
            var _t = prepElement(id);
            if(_t) collapse(_t);
            else console.error('Error - Element to be collapsed with provided ID parameter #'+id+' was NOT found.');
      }

// Private Methods
	function findTarget(trigger){
            var _tId = trigger.getAttribute('data-collapse');
            var _t = prepElement(_tId);
            if(_t) return _t;
            else console.error("Error - Target Element to be collapsed with ID #"+_tId+" was NOT found.");
      }

      function prepElement(id){
            var _id = document.getElementById(id);
            if(_id){
                  _id.style.maxHeight = '100vh';
                  return _id;
            }
      }

	function collapse(target=null){
            console.log('collapsing', target);
            if(target.clientX) var _t = findTarget(this);
            else var _t = target;
            if(_t){
                  setTimeout( function() {
                        _t.style.overflow = "hidden";
                        _t.style.transition = "max-height 600ms, padding 800ms";
                        _t.style.paddingTop = 0;
                        _t.style.paddingBottom = 0;
                        _t.style.maxHeight = 0;
                  }, 10);
            }
	}

	window.Rexus.collapser = new Collapser();
})();