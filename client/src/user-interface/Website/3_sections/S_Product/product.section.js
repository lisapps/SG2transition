(function($){

	//VARIABLES
	var productContainer = document.querySelectorAll('.slider-wrapper');

	function scrollToAnchor(id) {
		var aTag = $("[id='"+ id +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	function setCurrentTitle(name) {
		$('.feature-image-title').hide().text(name).fadeIn(200);
	}
	function setIndicators() {
		$('.feature-image-slides .item').each(function(index) {
			var _this = $(this);
			var _i = _this.find('img');
			var slideColor = _i.data('color');
			if(slideColor.indexOf(',') >= 0) {
				slideColor = slideColor.split(',');
				for(var i in slideColor) {
					if(needsBorder(slideColor[i])) {
						$('.indicators li:eq(' + index + ') > *').css('border', '2px solid #ccc');
						break;
					}
				}
				var c1 = slideColor[0];
				var c2 = slideColor[1];
				$('.indicators li:eq(' + index + ') > *').css({
					'background': 'linear-gradient(225deg, '+c1+' 50%, '+c2+' 50%)' + c1
				});
			} else if(slideColor.indexOf('#') == 0) {
				if(needsBorder(slideColor)) $('.indicators li:eq(' + index + ') > *').css('border', '2px solid #ccc');
				$('.indicators li:eq(' + index + ') > *').css('background-color', slideColor);
			} else {
				$('.indicators li:eq(' + index + ') > *').css('background-image', 'url('+slideColor+')');
			}
			$('.indicators li:eq(' + index + ') > *').click(removeLineart);
		});
		//Checks if any color requires a border
		function needsBorder(clr) {
			var newColor = clr.replace('#','');
			//convert #ccc to #cccccc
			if(newColor.length<4) newColor = newColor[0] + newColor[1] + newColor[1] + newColor[0] + newColor[2] + newColor[2];
			newColor = parseInt('0x'+newColor,16);
			var valueDisplace = 1118481; //Value between each gray tone
			var minValue = parseInt('0xCCCCCC',16)/valueDisplace;
			var remainderValue = newColor%valueDisplace;
			newColor = Math.floor(newColor/valueDisplace);
			if(remainderValue == 0 && newColor > minValue) return true;
			else return false;
		}
		//Prepare for line art
		var _svg = $('[data-lineart]').data('lineart');
		$('.slick-list').prepend('<div id="productLineArt" class="lineart-container"></div>');
		new Vivus('productLineArt', {
			type: 'scenario-sync',
			duration: 3,
			file: _svg
		});
	}

	function removeLineart() {
		$('#productLineArt').remove();
	}

	// add color indicators on initialization
	$('.feature-image-slides').on('init', function(slick) {
		setIndicators()
	});

	// need to reset colors on breakpoint changes
	$('.feature-image-slides').on('breakpoint', function(slick, currentSlide){
		setIndicators()
	});

	// set the image title when slides change
	$('.feature-image-slides').on('afterChange', function(slick, currentSlide){
		var newName = $('.slick-current img').data('title');
		setCurrentTitle(newName);
	});

	$('.feature-image-slides').on('swipe', function(slick, currentSlide){
		$('#productLineArt').remove();
	});

	// initialize the slider
	productContainer.forEach(function(el,i) {
		if(el.dataset.video) {
			var _v = el.dataset.video;
			var video = document.createElement('video');
			var svg = document.querySelector('.replay');
			video.src = _v;
			video.setAttribute('muted',1);
			video.setAttribute('autoplay',1);
			video.setAttribute('playsinline',1);
			video.load();
			el.insertBefore(video, el.firstChild);
			svg.addEventListener('click', function() {
				video.play();
			})
			video.addEventListener('click', function() {
				video.play();
			})
		} else {
			$('.feature-image-slides').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: false,
				fade: true,
				arrows: false,
				dotsClass: 'indicators',
				customPaging: function(slider, i) {
			        return $('<span></span>');
			    },
				responsive: [
					{
						breakpoint: 420,
						settings: {
							fade: false
						}
					}
				]
			});
		}
		console.log(_v);
	})
})(jQuery);
