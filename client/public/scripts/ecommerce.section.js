(function($) {

	var imgs = [
		{
			title: 'HyperX Cloud Alpha Headset 1',
			source: 'http://via.placeholder.com/56x56/AEAEAE/000000?text=Thumbnail',
			mobile: 'http://via.placeholder.com/512x408/999999/FFFFFF',
			disclaimer: { 'msg': 'Disclaimer for product image goes here.' },
			video: '/images/fpo/section-ecommerce/alpha-rotate.mp4'
		}, {
			title: 'HyperX Cloud Alpha Headset 2',
			source: 'http://via.placeholder.com/56x56/AEAEAE/000000?text=Thumbnail',
			mobile: 'http://via.placeholder.com/512x408/777777',
			medium: 'http://via.placeholder.com/416x416/AEAEAE/000000?text=Product+Image+(416x416)',
			zoom: '/images/fpo/section-ecommerce/image4-zm.jpg'
		}, {
			title: 'HyperX Cloud Alpha Headset 3',
			source: 'http://via.placeholder.com/56x56/555555/000000?text=Thumbnail',
			mobile: 'http://via.placeholder.com/512x408/555555',
			medium: 'http://via.placeholder.com/416x416/555555/FFFFFF?text=Product+Image+(416x416)',
			zoom: '/images/fpo/section-ecommerce/image2-zm.jpg',
			disclaimer: {
				'msg': 'Another, longer disclaimer here that is taking two lines of text and changing its color to white.',
				'color': 'white'
			}
		}, {
			title: 'HyperX Cloud Alpha Headset 4',
			source: 'http://via.placeholder.com/56x56/333333/000000?text=Thumbnail',
			mobile: 'http://via.placeholder.com/512x408/333333',
			medium: 'http://via.placeholder.com/416x416/333333/FFFFFF?text=Product+Image+(416x416)',
			zoom: '/images/fpo/section-ecommerce/image3-zm.jpg'
		}
	];
	
	var mobileSize = 512;
	var KEYCODE = {
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39,
		SPACE: 32,
		UP: 38,
		ENTER: 13
	}
	
	var sEcommerces = document.getElementsByClassName("s-ecommerce");
	var ecommerce;
	
	var eThumbnails;
	var eImage, eDisclaimer;
	
	var slickContainer, slickID, viewItem, viewID;
	var thumbInt, thumbParent;

	var imgThumbHeight = 55; // image 50  + margins
	
	for (i = (sEcommerces.length - 1); i >= 0; i--) {
		ecommerce = sEcommerces[i];

		var selection = ecommerce.getElementsByClassName("s-ecommerce__details__selections")[0];
		if (selection) {
			var selectionBtns = selection.getElementsByTagName("label");
			var selectionBtn;
			for (b = (selectionBtns.length - 1); b >= 0; b--) {
				selectionBtn = selectionBtns[b];
				selectionBtn.addEventListener("click", radioBtnAction);
				selectionBtn.addEventListener("keydown", radioBtnAction);
			}
		}

		initializeContents();
	}
	
	window.addEventListener("resize", function() {
		for (i = (sEcommerces.length - 1); i>=0; i--) {
			ecommerce = sEcommerces[i];
			resetContent();  
		}
	});
	
	function radioBtnAction(e) {
		var type = e.type;
		var next = false;

		if(type == "keydown"){
		  var node = e.currentTarget;
	  
		  switch (e.keyCode) {
			case KEYCODE.DOWN:
			case KEYCODE.RIGHT:
				var next = nextRadioButton(node);
				if (next.disabled == "true") next = nextRadioButton(next);
				if (!next) next = firstRadioButton(node); //if node is the last node, node cycles to first.
				break;
	  
			case KEYCODE.UP:
			case KEYCODE.LEFT:
				next = previousRadioButton(node);
				if (next.disabled == "true") next = lastRadioButton(next);
				if (!next) next = lastRadioButton(node); //if node is the last node, node cycles to first.
				break;
	  
			case KEYCODE.SPACE:
				next = node;
				break;
		  }
	  
		  if (next) {
			var radioButton = firstRadioButton(node);
	  
			while (radioButton) {
			  setRadioButton(radioButton, "false");
			  radioButton = nextRadioButton(radioButton);
			}
	  
			setRadioButton(next, "true");
	  
			e.preventDefault();
			e.stopPropagation();
		  }
		} else if (type == "click") {
			var node = e.currentTarget;
			var parent = node.parentNode;
			var prevNode = parent.querySelector("label[tabindex=\"0\"]");
			setRadioButton(prevNode, "false");
			setRadioButton(node, "true");
			e.preventDefault();
			e.stopPropagation();
		}
	}

	function nextRadioButton(node) {

		var next = node.nextSibling;
	  
		while(next) {
		  	if (next.nodeType === Node.ELEMENT_NODE) {
				if (next.getAttribute("role") === 'radio') return next;
		  	}
		  	next = next.nextSibling;
		}
	  
		return null;
	}

	function previousRadioButton(node) {

		var prev = node.previousSibling;
	  
		while(prev) {
		 	if (prev.nodeType === Node.ELEMENT_NODE) {
				if (prev.getAttribute("role") === 'radio') return prev;
		  	}
		  	prev = prev.previousSibling;
		}
	  
		return null;
	}

	function firstRadioButton(node) {

		var first = node.parentNode.firstChild;
	  
		while(first) {
		  	if (first.nodeType === Node.ELEMENT_NODE) {
				if (first.getAttribute("role") === 'radio') return first;
		  	}
		  	first = first.nextSibling;
		}
	  
		return null;
	}

	function lastRadioButton(node) {

		var last = node.parentNode.lastChild;
	  
		while(last) {
		  	if (last.nodeType === Node.ELEMENT_NODE) {
				if (last.getAttribute("role") === 'radio') return last;
			}
		  	last = last.previousSibling;
		}
	  
		return last;
	}

	function setRadioButton(node, state) {
	  
		if (state == 'true') {
		  	node.setAttribute('aria-checked', 'true')
		  	node.tabIndex = 0;
		  	node.focus()
			node.previousSibling.checked = "true"
		}
		else {
		  	node.setAttribute('aria-checked', 'false') 
		  	node.tabIndex = -1;
		}
	}

	function isMobile() {
		return (window.innerWidth < mobileSize);
	}
	
	function resetContent() {
		var _slickContainer = ecommerce.getElementsByClassName("c-slick")[0];
		var _eThumbnails = ecommerce.getElementsByClassName("s-ecommerce__thumbnails")[0];
		var _eThumbnailsList = _eThumbnails.getElementsByTagName("li");

		if (_slickContainer) {
			_slickContainer.parentNode.removeChild(_slickContainer);
			_slickContainer = null;
		}
		if (_eThumbnailsList) {
			for (j = (_eThumbnailsList.length - 1); j >= 0; j--) {
				var _eThumbnailList = _eThumbnailsList[j];
				var _parent = _eThumbnailList.parentNode;
				
				_parent.removeChild(_eThumbnailList);
			}
		}
		initializeContents();
	}
	
	function setView() {
		(isMobile()) ? setupMobile() : setupDesktop();
	}
	
	function initializeContents() {
		var loadCount = 0;
		var thumbnailCount = imgs.length;
		thumbInt = null;

		eThumbnails = ecommerce.getElementsByClassName("s-ecommerce__thumbnails")[0];

		for (j = (imgs.length - 1); j >=0; j--) {
			img = imgs[j];

			var parentLi = document.createElement("li");
			var thumbImg = document.createElement("img");

			parentLi.dataset.index = j;
			parentLi.setAttribute("tabindex", "0");

			thumbImg.src = img.source;
			thumbImg.title = img.title;
			thumbImg.addEventListener("load", function() {
				loadCount++;
				if (loadCount == thumbnailCount) {
					thumbnails = eThumbnails.getElementsByTagName("img");
				}
			});

			parentLi.addEventListener("click", function() {
				var _thumbnailObj = {
					"thumbInt": this.dataset.index,
					"thumbnail": this.getElementsByTagName('img')[0],
				}
				setupDesktop(_thumbnailObj);
			});

			parentLi.addEventListener("keypress", function(e) {
				if (e.keyCode == KEYCODE.ENTER) {
					var _thumbnailObj = {
						"thumbInt": this.dataset.index,
						"thumbnail": this.getElementsByTagName('img')[0],
					}
					setupDesktop(_thumbnailObj);
				}
			});

			if (img.video) {
				thumbImg.dataset.video = img.video;
				thumbImg.dataset.mobileurl = img.mobile;
		
				var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				svg.setAttribute("viewBox", "0 0 73 73");
				svg.innerHTML = "<path d='M0 36.5a36.5 36.5 0 1 0 73 0 36.5 36.5 0 1 0-73 0' fill='rgba(0,0,0,0.5)'/><path d='M36.5 9A27.5 27.5 0 1 1 9 36.5 27.5 27.5 0 0 1 36.5 9m0-5.5a33 33 0 1 0 33 33 33 33 0 0 0-33-33z'/><path d='M52.56 37.36l-23 13.74a1 1 0 0 1-1.56-.86V22.76a1 1 0 0 1 1.51-.86l23 13.74a1 1 0 0 1 0 1.72z'/>"
				
				parentLi.appendChild(svg);
			} else {
				thumbImg.dataset.mobileurl = img.mobile;
				thumbImg.dataset.mediumurl = img.medium;
				thumbImg.dataset.zoom = img.zoom;
			}

			if (img.disclaimer) {
				thumbImg.dataset.disclaimer = img.disclaimer.msg;
				if (img.disclaimer.color) {
					thumbImg.dataset.disclaimerColor = img.disclaimer.color;
				}
			}

			parentLi.appendChild(thumbImg);
			eThumbnails.insertAdjacentElement("afterbegin", parentLi);

			if (eThumbnails.offsetHeight > imgThumbHeight) eThumbnails.style.justifyContent = "flex-start";
			else eThumbnails.style.justifyContent = "center";
		}
		setView();
	}
	
	function setupMobile() {
		slickContainer = ecommerce.getElementsByClassName("s-ecommerce__slickContainer")[0];

		var videoBlock, videoSlide;

		if (!slickContainer) {
			slickContainer = document.createElement("div");
			slickID = window.Rexus.cuid.generate("slick");
			slickContainer.id = slickID;
			slickContainer.classList.add("c-slick");
			eThumbnails = ecommerce.getElementsByClassName("s-ecommerce__thumbnails")[0];
			thumbnails = eThumbnails.getElementsByTagName("img");
				
			var thumbnail;

			for (j = (thumbnails.length - 1); j >= 0; j--) {
				thumbnail = thumbnails[j];
				var slideBlock = document.createElement("div");
				var media;
				if (thumbnail.dataset.mobileurl) {
					media = document.createElement("img");
					media.src = thumbnail.dataset.mobileurl;
					if (thumbnail.alt) media.alt = thumbnail.alt;
					if (thumbnail.title) media.title = thumbnail.title;
					media.addEventListener("click", function() {
						var zoomURL = thumbnail.dataset.zoomurl;
						launchOverlay(zoomURL);
					});
				} else if (thumbnail.dataset.video) {
					media = document.createAttribute("video");
					media.src = thumbnail.dataset.video;
					media.setAttribute("muted", 1);
					media.setAttribute("playsinline", 1);
					media.load();
					videoBlock = media;
					videoSlide = i;
				}
				slideBlock.appendChild(media);
				slickContainer.appendChild(slideBlock);
			}
			ecommerce.insertBefore(slickContainer, ecommerce.firstChild);
			$("#" + slickID).slick({
				slidesToScroll: 1,
				infinite: true,
				lazyLoad: 'progressive',
				dots: true,
				arrows: false
			});
			$("#" + slickID).on("afterChange", function(event, slick, currentSlide) {
				if(currentSlide == videoSlide) videoBlock.play();
			});
		}
	}
	
	function setupDesktop(obj) {
		for (let key in obj) {
			var int = obj.thumbInt;
			var thumbnailClicked = obj.thumbnail;
		}


		if (!int) int = 0;

		// if (thumbnailClicked) ecommerce = thumbnailClicked.closest(".s-ecommerce");
		if (thumbnailClicked) ecommerce = getClosestClass(thumbnailClicked, "s-ecommerce");

		if (int != thumbInt) {
			thumbInt = int; //int
			eThumbnails = ecommerce.getElementsByClassName("s-ecommerce__thumbnails")[0];
			thumbnails = eThumbnails.getElementsByTagName("img");
			var source = thumbnails[int]; //int
			eImage = ecommerce.getElementsByClassName("s-ecommerce__image")[0];
			var parent = source.parentNode;
			eDisclaimer = eImage.getElementsByClassName("s-ecommerce__image__disclaimer")[0];
			viewItem = eImage.getElementsByClassName("c-viewItem")[0];
			if (thumbParent) thumbParent.classList.remove("s-eccomerce__thumbnails--active");
			thumbParent = parent;
			parent.classList.add("s-eccomerce__thumbnails--active");

			if (viewItem) eImage.removeChild(viewItem);
			if (!eImage.classList.contains("loading"));
			eImage.classList.add("loading");

			//Prepare and add new image
			if (source.dataset.mediumurl) {
				viewItem = document.createElement('img');
				var svg = eImage.getElementsByClassName("s-ecommerce__image__zoom")[0];
				viewID = window.Rexus.cuid.generate("productView");
				viewItem.id = viewID;
				viewItem.classList.add("c-viewItem");
				viewItem.src = source.dataset.mediumurl;
				if (source.alt) viewItem.alt = source.alt;
				if (source.title) viewItem.title = source.title;
				viewItem.addEventListener('load', function(e) {
					if (eImage.classList.contains('loading')) eImage.classList.remove('loading');
					eImage.insertBefore(viewItem, eImage.firstChild);
				});
				svg.addEventListener('click', function() {
					var zoomURL = source.dataset.zoomurl;
					launchOverlay(zoomURL);
				});
				viewItem.addEventListener('click', function() {
					var zoomURL = source.dataset.zoomurl;
					launchOverlay(zoomURL);
				});
			} else if (source.dataset.video) {
				if (eImage.classList.contains('loading')) eImage.classList.remove('loading');
				viewItem = document.createElement("video");
				var svg = eImage.getElementsByClassName("s-ecommerce__image__replay")[0];
				viewID = window.Rexus.cuid.generate("productView");
				viewItem.id = viewID;
				viewItem.classList.add("c-viewItem");
				viewItem.src = source.dataset.video;
				viewItem.setAttribute('muted',1);
				viewItem.setAttribute('playsinline',1);
				viewItem.setAttribute('autoplay',1);
				viewItem.load();
				eImage.insertBefore(viewItem, eImage.firstChild);
				svg.addEventListener('click', function() {
					viewItem.play();
				});
				viewItem.addEventListener('click', function() {
					viewItem.play();
				});
			}

			if (source.dataset.disclaimer) {
				eDisclaimer.innerHTML = source.dataset.disclaimer;
				if (source.dataset.disclaimerColor) eDisclaimer.style.color = source.dataset.disclaimerColor;
				else eDisclaimer.style.color = null;
			} else {
				eDisclaimer.innerHTML = '';
			}
		}
	}
	
	function launchOverlay(url) {
		console.log('Lanuch Zoom Overlay');
		console.log('Zoom Image:', url);
	}

	function getClosestClass(el, targetClass) {
        while (!el.classList.contains(targetClass)) {
            el = el.parentNode;
            if (!el) return null;
        }
        return el;
    }
	
})(jQuery);