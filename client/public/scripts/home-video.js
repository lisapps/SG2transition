(function() {
	var videoList = [{
		"maxWidth": 1024,
		"source": "https://www.hyperxgaming.com/shared/videos/hx-compilation_420.mp4",
		"ratio": "square"
	}, {
		"maxWidth": 1280,
		"source": "https://www.hyperxgaming.com/shared/videos/hx-compilation_1280.mp4",
		"ratio": "wide"
	}, {
		"maxWidth": 1920,
		"source": "https://www.hyperxgaming.com/shared/videos/hx-compilation_1920.mp4",
		"ratio": "wide"
	}];


	function generateVideo(obj) {
		if (typeof obj != 'object') return false;
		var _r = this;
		var _v, currentVideo, previousVideo, timeout;
		var target = document.getElementById(obj.target);
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;
		var breakArray = [];
		var videoArray = [];
		var override = false;
		var wideVideo, squareVideo, tallVideo;

		(function() {
			breakArray.push(0);
			for(var i = 0; i < obj.videos.length; i++) {
				breakArray.push(obj.videos[i].maxWidth);
			}
			breakArray.sort(function(a, b) { return b - a; });
			for(var i = 0; i < breakArray.length; i++) {
				if (obj.videos[i]) {
					var maxNum = obj.videos[i]['maxWidth'];
					var indexNum = breakArray.indexOf(maxNum);
					videoArray[indexNum] = {
						"source": obj.videos[i]['source'],
						"ratio": (obj.videos[i]['ratio']) ? obj.videos[i]['ratio'] : null
					}
				}
			}
			for(var i = 0; i < videoArray.length; i++) {
				switch(videoArray[i]["ratio"]) {
					case "tall":
						tallVideo = videoArray[i]["source"];
						break;
					case "square":
						squareVideo = videoArray[i]["source"];
						break;
					default:
						wideVideo = videoArray[i]["source"];
				}
			}
			updateVideo();
		})()
		// track window size

		window.addEventListener('resize', function() {
			clearInterval(timeout);
			timeout = setTimeout(updateVideo, 250);
		});

		// update video source
		function updateVideo() {
			winWidth = window.innerWidth;
			winHeight = window.innerHeight;
			if(winWidth < 768) {
				if(winWidth > winHeight) {
					currentVideo = wideVideo;
					override = true;
				}
			}
			if(!override) {
				for (var i = 1; i < breakArray.length; i++) {
					if (winWidth >= breakArray[i]) {
						currentVideo = videoArray[i - 1]["source"];
						break;
					}
				}
			} else override = false;
			if (previousVideo != currentVideo) {
				target.src = currentVideo;
				target.load();
				previousVideo = currentVideo;
			}
		}
	}

	//MUTED AUDIO
	var isMuted = false;
	var _audio = document.querySelector(".section-home_video video");
	var _audioToggle = document.querySelector(".c-soundToggle .btn");
	_audioToggle.addEventListener("click", function() {
		if(isMuted) _audio.muted = true;
		else _audio.muted = false;
		this.parentNode.classList.toggle("c-soundToggle--audible");
		isMuted = !isMuted;
	});

	var homeVideo = new generateVideo({
		"target": "videoContent",
		"videos": videoList
	});
})();
