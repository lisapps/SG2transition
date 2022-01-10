(function ($) {
	/*
		##### TOGGLE NAVIGATION #####
		=============================
		When in collapsed mode or mobile mode
		this feature will toggle the view of the
		main navigation and initiate the
		animation on mobile view.
	*/
	var collapsed = true;
	var anime_delay = 50;
	var body = document.querySelector("body");
	var elements = document.querySelectorAll(".nav-links > *");

	var navSmall = 768;
	var navLarge = 1152;

	// ** THIS NAV IS TORN UP ** //
	var inPageNav = document.getElementsByClassName("s-inPageNav")[0];

	$('.nav-toggle').click(function (e) {
		e.preventDefault();
		if (collapsed) {
			$('#main-nav').addClass('active');
			$('body').addClass('scroll-disabled');
			for (var i = 0; i < elements.length; i++) {
				load(elements[i], i);
			}
			if ($('.checkout-panel').hasClass('active')) {
				$('.checkout-panel').removeClass('active');
				$('.checkout-toggle').removeClass('active');
			}
		} else {
			$('#main-nav').removeClass('active');
			$('body').removeClass('scroll-disabled');
			if ($('#main-nav').hasClass('langPanel')) {
				$('#main-nav').removeClass('langPanel');
				langPanel = !langPanel;
			}
			if ($('#main-nav').hasClass('checkPanel')) {
				$('#main-nav').removeClass('checkPanel');
			}
			if ($('#main-nav').hasClass('searchPanel')) {
				$('#main-nav').removeClass('searchPanel');
				$('.c-searchPanel').removeClass('active');
				$('.search-toggle').removeClass('active');
			}
			if ($('#main-nav').hasClass('chatPanel')) {
				$('#main-nav').removeClass('chatPanel');
				$('.chat-toggle').removeClass('active');
			}
			if ($('.chat-panel').hasClass('active')) {
				$('.chat-panel').removeClass('active');
			}
			if ($('.language-panel').hasClass('active')) {
				$('.language-panel').removeClass('active');
				$('.language-toggle').removeClass('active');
			}
			if ($('.country-panel').hasClass('active')) {
				$('.country-panel').removeClass('active');
				$('.country-toggle').removeClass('active');
			}
			if ($('#main-nav').hasClass('panel')) {
				$('#main-nav').removeClass('panel');
				panel = !panel;
			}
			for (var i = 0; i < elements.length; i++) {
				elements[i].classList.remove("load");
			}
		}
		collapsed = !collapsed;
	})
	function load(elem, i) {
		setTimeout(function () {
			elem.classList.add("load");
		}, anime_delay * i);
	}
	// ##### END TOGGLE NAVIGATION #####


	/*
		##### DECLARE RESPONSE STATES ######
		##### BASED ON SCREEN SIZE #########
		====================================
		These response states are specifically for
		the panels and collapsed nav. It detects
		whether or not to use a click action or
		hover state.
	*/
	var isTouch = $('html').hasClass('touch');
	var _w = $(window).width();

	//BIND STATE SPECIFIC -- START
	//Click specific actions
	// function setClickStates() {
	// 	$('.collapsible a').bind("click", navigationPanel);
	// 	$('.language-toggle').bind("click", function () {
	// 		$('.language-panel').bind("click", languagePanel);
	// 		languagePanel();
	// 	});
	// }

	// //Hover specific actions
	// function setHoverStates() {
	// 	$('.collapsible').bind("mouseenter mouseleave", navigationPanel);
	// }

	// //Remove all bind state actions
	// function unbindStates() {
	// 	$('.collapsible, .collapsible a').unbind();
	// 	$('.language-toggle, .language-panel').unbind();
	// }
	// //BIND STATE SPECIFIC -- END

	// //ELEMENT SPECIFIC -- START
	// //Main navigation panel action
	// var navPanel = false;
	// function navigationPanel(e) {
	// 	if (navPanel) {
	// 		$('.collapsible').removeClass('open');
	// 	} else {
	// 		$('.collapsible').addClass('open');
	// 	}
	// 	navPanel = !navPanel;
	// }

	var navPrimarys = document.getElementsByClassName("nav-primary");
	var navPrimary, navPrimaryV2;

	var navPanel = false;

	for (i = (navPrimarys.length - 1); i >= 0; i--) {
		navPrimary = navPrimarys[i];

		if (isTouch) {
			navPrimary.addEventListener("click", navigationPanel2);
		} else {
			navPrimary.addEventListener("mouseenter", navigationPanel2);
			navPrimary.addEventListener("mouseleave", navigationPanel2);
		}

		if (navPrimary.classList.contains("nav-primary--v2")) {
			navPrimaryV2 = navPrimary;
			checkCollapse();
		}
	}

	window.addEventListener("resize", checkCollapse);
	function checkCollapse() {
		if (window.innerWidth > navLarge) {
			navPrimaryV2.classList.remove("collapsible");
		} else if (window.innerWidth >= navSmall && window.innerWidth <= navLarge) {
			navPrimaryV2.classList.add("collapsible");
		}
	}

	function navigationPanel2() {
		if (navPanel) {
			this.classList.remove('open');
			navPanel = false;
		} else {
			this.classList.add('open');
			navPanel = true;
		}
	}

	//Language panel action
	var langPanel = false;
	function languagePanel(e) {
		if (langPanel) {
			$('#main-nav').removeClass('langPanel');
			if (isTouch) $('.language-panel').unbind();
		} else {
			//RESET CHECKOUT PANEL
			if ($('#main-nav').hasClass('checkPanel')) {
				$('#main-nav').removeClass('checkPanel');
			}
			$('#main-nav').addClass('langPanel');
		}
		langPanel = !langPanel;
	}

	//PANEL TOGGLE ACTION
	$('.panel-toggle').each(function () {
		$(this).click(togglePanel);
	});
	// calcPanelPos();
	function togglePanel(e) {

		if (typeof e === "string") _target = $(e);
		else _target = $(this);

		var panelAttr = _target.attr("data-panel");

		var activePanel = $('div.panel[data-panel="' + panelAttr + '"]');

		if (activePanel.hasClass('active')) {
			_target.removeClass('active');
			activePanel.removeClass('active');
		} else {
			$('.panel').removeClass('active');
			$('.panel-toggle').removeClass('active');

			_target.addClass('active');
			activePanel.addClass('active');
		}

	}
	function calcPanelPos() {
		var panelAmt = $('.panels .panel').length;
		for (var i = 1; i <= panelAmt; i++) {
			var _panel = $('.panels .panel:nth-child(' + i + ')');
			_panel.css('right', (((panelAmt - i) / panelAmt) * 100) + '%');
		}
	}

	function checkoutPanel() {
		togglePanel('#checkoutPanel');
		$('.checkout-toggle').addClass('active');
	}

	$('.close-chat').click(function () {
		if ($('.chat-panel').hasClass('active')) {
			$('.chat-panel').removeClass('active');
			$('.chat-toggle').removeClass('active');
			$('.s-navigation').removeClass('chatPanel');
		}
	});
	$('.close-search').click(function () {
		if ($('.c-searchPanel').hasClass('active')) {
			$('.c-searchPanel').removeClass('active');
			$('.search-toggle').removeClass('active');
			$('.s-navigation').removeClass('searchPanel');
		}
	});

	$('.chat-toggle').click(function () {
		$('.s-navigation').addClass('chatPanel');
	});
	$('.search-toggle').click(function () {
		$('.s-navigation').addClass('searchPanel');
	});

	var cShopping = document.querySelector('.checkout-footer .checkout-toggle');
	cShopping.addEventListener('click', resetCheckout);

	function checkCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return false;
	}
	var cartFull = (checkCookie('cart') == '[]' || !checkCookie('cart')) ? false : true;
	if (cartFull) checkoutPanel();

	//ELEMENT SPECIFIC -- END

	//SET CORRECT EVENT STATES BASED ON WINDOW SIZE AND TOUCH DEVICE
	$(window).resize(function () {
		_w = $(window).width();
		navHeight = $('.s-navigation').height();

		// //Reset all features to inactive state
		if (_w > 768) {
			if ($('#main-nav').hasClass('active')) {
				$('#main-nav').removeClass('active');
				if ($('body').hasClass('scroll-disabled')) $('body').removeClass('scroll-disabled');
				collapsed = !collapsed;
			}
		}

		// Collapse open menus
		if ($('.collapsible').hasClass('open')) {
			$('.collapsible').removeClass('open');
			navPanel = !navPanel;
		}

		//Mobile Specific. Language Panel
		if ($('#main-nav').hasClass('langPanel')) {
			$('#main-nav').removeClass('langPanel');
			langPanel = !langPanel;
		}

		// //Maintain Checkout Panel active from SM to MD
		if ($('.checkout-panel').hasClass('active')) {
			$('.nav-tertiary .checkout-toggle').addClass('active');
			$('.mobile-shop.checkout-toggle').addClass('active');
		} else {
			resetCheckout();
		}

		if (_w <= 768) {
			if (!$('#main-nav').hasClass('active')) {
				$('#main-nav').removeClass('chatPanel');
				$('.chat-toggle').removeClass('active');
				$('.chat-panel').removeClass('active');
			}
			if ($('#main-nav').hasClass('searchPanel')) {
				$('#main-nav').removeClass('searchPanel');
				$('.c-searchPanel').removeClass('active');
				$('.search-toggle').removeClass('active');
			}
		}
	});

	function resetCheckout() {
		$('.mobile-shop.checkout-toggle').removeClass('active');
		$('.nav-tertiary .checkout-toggle').removeClass('active');
		$('.checkout-panel').removeClass('active');
	}

	//DETECT AND SET CORRECT CLICK/HOVER STATES ON LOAD
	var navHeight = $('.s-navigation').height() + 1;

	// -- SET OFFSET FOR INPAGENAV
	if(inPageNav) inPageNav.dataset.offset = navHeight;

	// if (_w <= 768) {
	// 	setClickStates();
	// } else {
	// 	// if (!isTouch) setHoverStates();
	// 	// else setClickStates();
	// }
	// ##### END DECLARE RESPONSE STATES ######


	/*
		##### HIDE NAVIGATION ON SCROLL #####
		=====================================
		Feature below detects when the user scrolls to hide
		or show the main navigation based on the direction
		of the scrolling.
	*/
	var lastStep = 0;
	var offset = 0;
	var scrolling = false;
	window.onscroll = function (e) {
		var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
		var distance = lastStep - scrollTop;
		if (scrolling) clearTimeout(scrolling);
		if (scrollTop > navHeight) {
			if (distance < 0 && !body.classList.contains('inpagenavScrolling')) {
				//Swipe Up
				distance *= -1;

				if (distance > 8) {
					offset = navHeight;
					//Close Panels
					if ($('.checkout-panel').hasClass('active')) {
						resetCheckout();
					}
					if ($('.chat-panel').hasClass('active')) {
						$('.chat-panel').removeClass('active');
						$('.chat-toggle').removeClass('active');
						$('.s-navigation').removeClass('chatPanel');
					}
					if ($('.language-panel').hasClass('active')) {
						$('.language-panel').removeClass('active');
						$('.language-toggle').removeClass('active');
					}
				}
			} else {
				//Swipe Down
				if (distance > 8) {
					offset = 0;
				}
			}
		} else {
			offset = 0;
		}
		$('#main-nav').css('top', -(offset) + 'px');

		// -- update inPagNav
		if(inPageNav) {
			if(!offset) inPageNav.style.top = navHeight+"px";
			else inPageNav.style.top = 0;
		}

		lastStep = scrollTop;
		// if ((offset != 0) && (offset != navHeight)) scrolling = setTimeout(scrollEnd, 250);
	}
	// function scrollEnd() {
	// 	console.log("SCROLL END");
	// 	scrolling = false;
	// 	if (offset < (navHeight * 0.6)) offset = 0;
	// 	else offset = navHeight;
	// 	$('#main-nav').css('top', -(offset) + 'px');
	// }
	// ##### END HIDE NAVIGATION ON SCROLL #####


})(jQuery);
