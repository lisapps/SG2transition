
; (function ($, window, document, undefined) {

	var mediaplayResize, overlay = '<div class="atc-mediaplay">\
														<div class="atc-mediaplay-main">\
															<svg class="close" title="Close">\
																<use xlink:href="/Themes/HyperX/images/icons/icons-map.svg#close-button"/>\
															</svg>\
															<div class="atc-mediaplay-inner"></div>\
														</div>\
														<div class="atc-mediaplay-playlist"><ul class="thumblist"></ul></div>\
													</div>';
	var zoom = '<div class="zoom">\
						<svg class="icon-zoomin" role="img" title="zoom in">\
							<use xlink:href="/Themes/HyperX/Styles/images/icons/Zoom-In Icon.svg#zoomin" />\
						</svg>\
						<svg class="icon-zoomout" role="img" title="zoom out">\
							<use xlink:href="/Themes/HyperX/Styles/images/icons/Zoom-Out Icon.svg#zoomout" />\
						</svg>\
					</div>';

	// MediaPlay Constructor
	function MediaPlay(element, options) {

		if (typeof options == 'object') {
			$.extend(this, options);
		}
		this.options = options;
		this.$element = $(element);

		this.playsource = this.$element.data('playsource');

		this.$overlay = $(overlay);
		this.$playMain = this.$overlay.find('.atc-mediaplay-main');
		this.$playInner = this.$overlay.find('.atc-mediaplay-inner');
		this.$playlist = this.$overlay.find('.atc-mediaplay-playlist ul');
		this.$zoom = $(zoom);

		this.init(options);
		return this;
	};


	// MediaPlay Instance Methods	  
	$.extend(MediaPlay.prototype, {
		showThumbsBar: true,
		showZoom: true,
		fillFullScreen: false,
		playlistSelector: "",

		init: function (options) {
			var self = this, $win = $(window);
			if (options.showZoom) {
				self.$zoom = self.$zoom.prependTo(this.$overlay);
				var isPlayVideo = self._isPlayVideo();
				$("svg", self.$zoom).each(function () {
					var $this = $(this), classString = $this.attr('class');
					if (isPlayVideo) {
						$this.attr("class", classString.replace(' enabled', ''));
					} else {
						$this.attr("class", classString + ' enabled');	
					}
				});
			}
			if (options.fillFullScreen) {
				var padding = options.showThumbsBar ? " 0 0 90px" : "0";
				self.$overlay.css({ padding: padding });
			}

			$(this.$element, document).on("click", function (e) {
				self.play(e);
			});

			$win.on("resize", function () {
				clearTimeout(mediaplayResize);
				mediaplayResize = setTimeout(self.resize(self), 200);
			});
		},

		configure: function (options) {
			if (typeof options == 'object') {
				$.extend(this.prototype, options);
			}
		},

		play: function (e) {
			if (!this.playsource)
				return;
			var self = this;

			var pamZoomInstace = self.$playInner.panzoom("instance");
		    if (pamZoomInstace) {
		        self.$playInner.panzoom("destroy");
		    }

		    var isPlayVideo = self._isPlayVideo();
			var activeZoom = function (playVideo) {
				$("svg", self.$zoom).each(function () {
				    var $this = $(this), classString = $this.attr('class'), active = classString.indexOf('enabled') >= 0 ? classString : classString + ' enabled';
					playVideo ? $this.attr("class", classString.replace(' enabled', '')) : $this.attr("class", active);
					//if ($this.is(".icon-zoomout.enabled")) {
					//	$this.unbind("click").bind("click", function (e) {
					//		self.close(e);
					//	});
				    //}
				});
			};

			if ($(".atc-mediaplay").length > 0)
				$(".atc-mediaplay").remove();

		    self.$overlay.prependTo('body')
		        .find(".close")
		        .unbind("click")
		        .bind("click", function(e) {
		            self.close(e);
		            if (!isPlayVideo) {
		                self.$playInner.panzoom("destroy");
		            }
		        });

		    self.$overlay.unbind("selectstart").bind("selectstart", function(e) {
		        return false;
		    });

			self.resize();

            if (isPlayVideo) {
                self.playVideo();
            } else {
                self.playImage().on("load", function () {
                    var $panzoom = self.$playInner.panzoom({
                        $zoomIn: self.$zoom.find(".icon-zoomin"),
                        $zoomOut: self.$zoom.find(".icon-zoomout"),
                        //$zoomRange: self.$zoom.find(".zoom-range"),
                        //$reset: self.$zoom.find(".reset"),
                        startTransform: 'scale(0.9)',
                        increment: 0.1,
                        minScale: 0.5,
                        contain: 'automatic'  //invert
                    }).panzoom('zoom');

                    $panzoom.parent().on('mousewheel.focal', function (e) {
                        e.preventDefault();
                        var delta = e.delta || e.originalEvent.wheelDelta;
                        var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
                        $panzoom.panzoom('zoom', zoomOut, {
                            increment: 0.1,
                            animate: false,
                            focal: e
                        });
                    });

                    var matrix = [1, 0, 0, 1, 0, 0];
                    matrix[4] = -(self.$playInner.width() - self.$playInner.parent().width()) / 2;
                    matrix[5] = -(self.$playInner.height() - self.$playInner.parent().height()) / 2;
                    var transformMatrix = "matrix(" + matrix.join(",") + ")";
                    self.$playInner.css({ "transform": transformMatrix });
                });
            }

			activeZoom(isPlayVideo);
			self.showPlaylist();
		},

		playImage: function () {
		    return $("<img />")
		        .attr("src", this.playsource)
		        .appendTo(this.$playInner.empty());
		},

		playVideo: function () {
			$("<iframe/>", {
				src: this.playsource,
				frameborder: 0,
				scrolling: 'no'
			}).appendTo(this.$playInner.empty());
		},

		showPlaylist: function () {
			this.$playlist.empty();
			if (this.options.playlistSelector)
				$(this.options.playlistSelector).clone(false)
					.appendTo(this.$playlist);

			var self = this;
			this.$playlist.find("li a")
				.each(function () {
					$(this).unbind("click").bind("click", function (e) {
						var mediaPlay = new MediaPlay(this, self.options);
						mediaPlay.play(e);
					});
				});

			this.options.showThumbsBar ? this.$playlist.show() : this.$playlist.hide();
		},

		resize: function (self) {
			//var windowHeight = $(window).height();
			//var padding = this.options.showThumbsBar ? 2 * 80 + 90 : 2 * 80;

			//(this.$playMain || self.$playMain).css({
			//	'top': 0,
			//	'left': 0,
			//	'height': windowHeight - padding
		    //});
		    var height = (this.$playMain || self.$playMain).height();
		    var width = (this.$playMain || self.$playMain).width();
		    //var $playMainInner = (this.$playMain || self.$playMain).find(".atc-mediaplay-inner");
		    (this.$playInner || self.$playInner).css({ 'width': width, "height": height });
		},

		close: function (e) {
			this.$overlay.remove();
		},

		destroy: function (el) {
			var element = $(el).data('mediaplay');
			element.$overlay.remove();

			$(el).data('mediaplay', false);
			$(window).off("resize");
		},

		_isPlayVideo: function () {
			return this.$element.is(".atc-video");
		}
	});


	// MediaPlay Plugin Definition	   
	function Plugin(option) {

		return this.each(function () {
			var $this = $(this);
			var options = typeof option == 'object' && option;

			if (!$this.data('mediaplay')) {
				options = $.extend({}, $this.data(), options);
				$this.data('mediaplay', new MediaPlay(this, options));
			} else if (typeof option == 'object') {
				$.extend($this.data('mediaplay'), options);
			} else {
				MediaPlay.configure(options);
			}

			if (typeof option == 'string') {
				if (option == 'destroy') {
					MediaPlay['destroy'](this);
				} else {
					MediaPlay[option]();
				}
			}
		});
	};

	var old = $.fn.mediaplay;

	$.fn.mediaplay = Plugin;
	$.fn.mediaplay.Constructor = MediaPlay;

	// MediaPlay No Conflict
	$.fn.mediaplay.noConflict = function () {
		$.fn.mediaplay = old;
		return this;
	};

}(jQuery, window, document));
