(function () {
    
    let ytPlayers = {};

    // ### CONSTRUCTOR ### //
    function ExternalVideo() {

        let externalVideos = document.getElementsByClassName("c-externalVideo");
        let a = externalVideos.length - 1;
        
        let videoModal = {};
        let videoAPIs  = {};
        let externalVideo, videoPlayer, videoType, linkID;

        for (a; a >= 0; a--) {

            externalVideo = externalVideos[a];
            console.log(externalVideo.dataset.starttime);
            videoType = externalVideo.dataset.type.toLowerCase();
            videoPlayer = createVideo({
                "type": videoType,
                "id": externalVideo.dataset.id,
                "startTime": (!externalVideo.dataset.starttime) ? 0 : externalVideo.dataset.starttime
            });
            console.log(videoPlayer);
            externalVideo.appendChild(videoPlayer);

            if (externalVideo.dataset.modalLink) {

                linkID = (window.Rexus.cuid) ? window.Rexus.cuid.generate("lnk") : "extVideo"+a
                // linkID = window.Rexus.cuid.generate("lnk");

                videoPlayer.id = linkID;
                videoPlayer.dataset.modalLink = externalVideo.dataset.modalLink;

                videoModal = {
                    "element": videoPlayer,
                    "link": videoPlayer.dataset.modalLink,
                    "events": []
                };

                if(!videoAPIs[videoType]) {
                    loadVideoAPI(videoType);
                    videoAPIs[videoType] = true;
                }

                switch (videoType) {
                    case "youtube":
                        videoModal.events.push({
                            "name": "open",
                            "action": playYouTube
                        }, {
                            "name": "close",
                            "action": pauseYouTube
                        });
                        ytPlayers[videoPlayer.id] = {
                            "element": videoPlayer
                        }
                        break;

                    case "vimeo":
                        videoModal.events.push({
                            "name": "open",
                            "action": playVimeo
                        }, {
                            "name": "close",
                            "action": pauseVimeo
                        });
                        break;
                }

                window.Rexus.modal.update(videoModal);
            }
        }
    }

    function playVimeo(vPlayer) {
        videoPlayer = vPlayer;
        videoPlayer.src += "&autoplay='1'";
        let player = new Vimeo.Player(vPlayer, {
            autoplay: true,
            muted: true
        });
        player.play();
    }

    function pauseVimeo(vPlayer) {
        let player = new Vimeo.Player(vPlayer);
        player.pause();
    }

    function playYouTube(vPlayer) {
        let ytPlayer = ytPlayers[vPlayer.id].player;
        ytPlayer.seekTo(0);
        ytPlayer.playVideo();
    }

    function pauseYouTube(vPlayer) {
        let ytPlayer = ytPlayers[vPlayer.id].player;
        ytPlayer.seekTo(0);
        ytPlayer.pauseVideo();
    }
    
    // ### PUBLIC METHODS ### //
    ExternalVideo.prototype.createExternalVideo = function (obj) {
        if (!obj.startTime) obj.startTime = 0;

        var _externalVideo = document.createElement("div");
        _externalVideo.classList.add("c-externalVideo");
        _externalVideo.dataset.type = obj.type;
        _externalVideo.dataset.id = obj.id;
        _externalVideo.dataset.startTime = obj.startTime;

        var _videoPlayer = createVideo(obj);

        _externalVideo.appendChild(_videoPlayer);

        return _externalVideo;
    }

    ExternalVideo.prototype.getYouTubeVideos = function() {
        let keys = Object.keys(ytPlayers);
        let a = keys.length - 1;
        let _ytPlayers = [];
        for(a; a>=0; a--) _ytPlayers.push(ytPlayers[keys[a]])
        return _ytPlayers;
    }

    // ### PRIVATE METHODS ### //
    function createVideo(obj) {
        let videoPlayer = document.createElement("iframe");

        switch (obj.type) {
            case "youtube":
                videoPlayer.src = 'https://www.youtube.com/embed/' + obj.id + '?start=' + obj.startTime + '&enablejsapi=1';
                break;

            case "vimeo":
                videoPlayer.src = 'https://player.vimeo.com/video/' + obj.id + '?api=1' + '#t=' + obj.startTime + 's';
                videoPlayer.setAttribute("allow", "autoplay");
                videoPlayer.setAttribute("webkitallowfullscreen", "");
                videoPlayer.setAttribute("mozallowfullscreen", "");
                videoPlayer.setAttribute("allowfullscreen", "");
                break;
        }

        return videoPlayer;
    }

    function loadVideoAPI(type) {
        let tag = document.createElement('script');
        let body = document.body;
        switch(type) {
            case "youtube":
                tag.src = "https://www.youtube.com/iframe_api";
                body.appendChild(tag);
                break;
            case "vimeo":
                tag.src = "https://player.vimeo.com/api/player.js";
                body.appendChild(tag);
                break;
        }
    }

    // -- register notification class
    this.Rexus.externalVideo = new ExternalVideo();
})();

function onYouTubePlayerAPIReady() {
    let ytPlayers = window.Rexus.externalVideo.getYouTubeVideos();
    let a = ytPlayers.length - 1;
    for (a; a>=0; a--) {
        ytPlayer = ytPlayers[a];
        ytPlayer.player = new YT.Player(ytPlayer.element);
    }
}
