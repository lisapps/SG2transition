(function() {    

    var vimeoLibrary = [];
    var breakPoint = 512;
    var _root;
    var resizeTimer;

    var VimeoPlayer = function() {

        if(!window.Rexus) {
            console.error("Must initiate RexusManager before using this class");
            return false;
        }

        var components = document.getElementsByClassName("e-vimeoPlayer");

        _root = this;
        this.displayState = null;
        if(components.length > 0) {
            var a = components.length - 1;
            var component, componentParent, vimeoTag, libObj,
            vimeoElement, audioElement;

            for(a; a>=0; a--) {
                component = components[a];
                componentParent = component.parentNode;
                vimeoTag = "vimeo" + a;
                libObj = {
                    "id": vimeoTag,
                    "class": "e-vimeoPlayer__player",
                    "large": component.dataset.vimeoLarge,
                    "small": component.dataset.vimeoSmall,
                    "audible": (component.dataset.audible && (component.dataset.audible != "false")) ? true : false
                }

                vimeoLibrary.push(libObj);

                vimeoElement = document.createElement("div");
                vimeoElement.id = vimeoTag;
                vimeoElement.classList.add("e-vimeoPlayer__player");
                componentParent.appendChild(vimeoElement);
                
                if(libObj.audible) {
                    audioElement = document.createElement("button");
                    audioElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.18 20.51"><path d="M14.72 7.82v4.62c0 2.31 1.72-1.29 1.72-2.29a4.15 4.15 0 0 0-.55-2.05c-.55-1.05-1.17-1.72-1.17-.28zm-1.8-4.36V.82a.25.25 0 0 0-.41-.19L6.29 6h-6a.28.28 0 0 0-.29.27v7.58a.28.28 0 0 0 .28.28h3.38zm-.41 16.11a.25.25 0 0 0 .41-.19V8.71l-5.56 6.41zM18 .13a.53.53 0 0 0-.75.05L.41 19.63a.53.53 0 0 0 .8.7L18 .88a.53.53 0 0 0 0-.75z" /></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.2 20.48"><path class="cls-1" d="M12.51.63L6.29 6h-6a.28.28 0 0 0-.29.27v7.58a.28.28 0 0 0 .28.28h6l6.28 5.43a.25.25 0 0 0 .41-.19V.82a.25.25 0 0 0-.41-.19z" /><path fill="none" d="M17.58 0h.61v20.48h-.61z" /></svg>';
                    audioElement.dataset.target = a;
                    audioElement.classList.add("e-btn","e-btn--small","e-vimeoPlayer__audio","e-vimeoPlayer__audio--muted");
                    audioElement.addEventListener("click", toggleMute);
                    componentParent.parentNode.appendChild(audioElement);
                }
            }

            updateVimeoPlayers();
            window.addEventListener("resize", endResizeEvent);
        }
    }

    // ### PRIVATE METHODS ### //
    VimeoPlayer.prototype.getVimeoPlayers = function() {
        return vimeoLibrary;
    }

    // ### PUBLIC METHODS ### //

    //-- prepares and configures the vimeo API to redraw players, triggers at launch and resize end.
    function updateVimeoPlayers() {        
        var vimeoObj, vimeoOpt, vimeoVideo, activeVideo;
        var displayState = getDisplayState();

        if((vimeoLibrary.length > 0) && (displayState != _root.displayState)) {
            var a = vimeoLibrary.length - 1;
            for(a; a>=0; a--) {
                vimeoObj = vimeoLibrary[a];
                vimeoVideo = vimeoObj[displayState];
                vimeoOpt = {
                    "url": vimeoVideo,
                    "autopause": false,
                    "autoplay": true,
                    "loop": true,
                    "controls": false,
                    "muted": false,
                    "background": true,
                    "responsive": true
                };

                vimeoFlush(vimeoObj);

                activeVideo = new Vimeo.Player(vimeoObj.id, vimeoOpt)
                vimeoObj.player = activeVideo;
            }
            _root.displayState = displayState;
        }
		}

    //-- effectively deletes existing vimeo objects and replaces it based on screen size events (mobile/desktop)
    function vimeoFlush(obj) {
        var _vimeo = document.getElementById(obj.id);
        var _vimeoElement = document.createElement("div");
        var _vimeoParent = _vimeo.parentNode;
        
        _vimeoParent.removeChild(_vimeo);
        _vimeoElement.id = obj.id;
        _vimeoElement.classList.add(obj.class);
        _vimeoParent.appendChild(_vimeoElement);
    }

    //-- runs during resize event
    function endResizeEvent() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateVimeoPlayers, 250);
    }

    //-- runs after resizing is done
    function getDisplayState() {
        return (window.innerWidth < breakPoint) ? "small" : "large";
    }

    //-- mute toggler if audio is enabled (not fully configured)
    function toggleMute() {
        var _root = this;
        var _vLibrary = window.Rexus.vimeoPlayer.getVimeoPlayers();
        var _player = _vLibrary[_root.dataset.target].player;
			
        _player.getVolume().then(function(vol) {
            if(vol > 0) {
                _player.setVolume(0);
                _root.classList.add("e-vimeoPlayer__audio--muted");
            } else {
                _player.setVolume(1);
                _root.classList.remove("e-vimeoPlayer__audio--muted");
            }
        });
		_player.play();
    }

    this.Rexus.vimeoPlayer = new VimeoPlayer();
})();