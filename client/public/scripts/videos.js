(function($){

	//HASH LISTENER - FOR OVERLAY (SHOULD ALSO BE GLOBAL)
	window.addEventListener('hashchange', function() {
		var hash = window.location.hash;
		if(hash.indexOf('v-overlay')<0) killOverlay();
	})

	//VIDEO OVERLAY - CALL TO ACTION (THIS IS DUMB/NEEDS TO BE AT GLOBAL LEVEL)	
	$('.overlay .close').click(killOverlay);
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) killOverlay(); //KEYCODE 27 = ESC
	};
	function killOverlay() {
		$('.overlay-video .overlay-body .overlay-cell').empty();
		$('.overlay-video').css('display','none');
		$('body').removeClass('scroll-disabled');
	}

	// -- set click action
	var videoLinks = document.querySelectorAll(".c-videoCard__img");
	for (var i = 0; i < videoLinks.length; i++) {
		var videoLink = videoLinks[i];
		videoLink.addEventListener("click", function() {
			var ytVideo = document.createElement('iframe');
			var video_start = 0;
			if(this.dataset.start) video_start = this.dataset.start;
			ytVideo.src = 'https://www.youtube.com/embed/' + this.dataset.video + '?autoplay=1&start=' + video_start;
			ytVideo.className = 'video-embed';
			$('.overlay-video .overlay-body .overlay-cell').append(ytVideo);
			$('.overlay-video').css('display','table');
			$('body').addClass('scroll-disabled');
			if(window.location.href.indexOf('hyperxgaming') > 0) window.location.hash = 'v-overlay';
		})
	}

})(jQuery)