(function($) {
	var player;
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('ytplayer', {
			videoId: 'qLhLGiZr7Bo',
			controls: '0'
		});
	}
})(jQuery);