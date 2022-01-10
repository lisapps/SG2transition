(function($){
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

	var screenMD = 1152;
	var resizeDelay = 250;
    var resizeTimeout;

	var currentFocus;

	var section = document.getElementsByClassName("s-hx-navigation")[0];
	if (section) {
		var navPrimaries = section.getElementsByClassName("nav-primary");
		var navPrimary;
		for (a = (navPrimaries.length - 1); a >= 0; a-- ) {
			navPrimary = navPrimaries[a];
			var navPrimaryAnchor = navPrimary.getElementsByTagName("a")[0];
			navPrimaryAnchor.addEventListener("focus", togglePrimary);
			navPrimaryAnchor.addEventListener("click", togglePrimary);

			if (!navPrimary.classList.contains("nav-primary--v2") && window.innerWidth > screenMD) {
				var navLinks = navPrimary.getElementsByClassName("nav-links")[0];
				var lastLink = navLinks.lastChild;
				lastLink.addEventListener("focusout", removeFocus);
			}

			if (navPrimary.classList.contains("nav-primary--v2") && window.innerWidth <= screenMD) {
				navPrimary.classList.add("collapsible");
				var navLinks = navPrimary.getElementsByClassName("nav-links")[0];
				var lastLink = navLinks.lastChild;
				lastLink.addEventListener("focusout", removeFocus);
			}
		}
		// window.addEventListener("resize", resizeAction);
	}

	function togglePrimary(e) {
		var target = e.currentTarget;
		if (!currentFocus) currentFocus = target;
		if (target != currentFocus) {
			var parent = currentFocus.parentElement;
			parent.classList.remove("open");
			currentFocus.setAttribute("aria-expanded", "false");
			currentFocus = target;
		}
		var navPrimary = target.parentElement;
		if (navPrimary.classList.contains("open")) {
			navPrimary.classList.remove("open");
			target.setAttribute("aria-expanded", "false");
		} else {
			navPrimary.classList.add("open");
			target.setAttribute("aria-expanded", "true");
		}
	}

	function removeFocus() {
		var parent = currentFocus.parentElement;
		parent.classList.remove("open");
		currentFocus.setAttribute("aria-expanded", "false");
		currentFocus = null;
	}

    function chatConfirm() {
        if ($("#main-nav .chat-panel").hasClass("active")) {
            return $(".chat-toggle").data("confirm");
        }
        return null;
    }
	$('.nav-toggle').click(function (e) {
        var message = chatConfirm();
        if (message) {
            if (!confirm(message)) {
                return false;
            }
        }
		e.preventDefault();
		if(collapsed) {
			$('#main-nav').addClass('active');
			$('body').addClass('scroll-disabled');
			for (var i = 0; i < elements.length; i++) {
				load(elements[i], i); 
			}
			if($('.checkout-panel').hasClass('active')) {
				$('.checkout-panel').removeClass('active');
				$('.checkout-toggle').removeClass('active');
			}
		} else { 
			$('#main-nav').removeClass('active');
			$('body').removeClass('scroll-disabled');
			if($('#main-nav').hasClass('langPanel')) {
				$('#main-nav').removeClass('langPanel');
				langPanel = !langPanel;
			}
			if($('#main-nav').hasClass('checkPanel')) {
				$('#main-nav').removeClass('checkPanel');
            }
			if($('#main-nav').hasClass('searchPanel')) {
				$('#main-nav').removeClass('searchPanel');
				$('.c-searchPanel').removeClass('active');
				$('.search-toggle').removeClass('active');
			}
			if($('#main-nav').hasClass('chatPanel')) {
				$('#main-nav').removeClass('chatPanel');
				$('.chat-toggle').removeClass('active');
			}
			if($('.chat-panel').hasClass('active')) {
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
			if($('#main-nav').hasClass('panel')) {
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
		setTimeout(function() {
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
	var isTouch = $('html').hasClass('touchevents');
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
	var lastNavPanel = null;
	window.addEventListener("resize", checkCollapse);
	window.addEventListener("resize", tabFocus);
	function checkCollapse() {
		if (window.innerWidth > navLarge) {
			navPrimaryV2.classList.remove("collapsible");
		} else if (window.innerWidth >= navSmall && window.innerWidth <= navLarge) {
			navPrimaryV2.classList.add("collapsible");
		}
	}
	function tabFocus() {
		if (window.innerWidth > screenMD) {
			navPrimary.getElementsByClassName("nav-links")[0].lastChild.addEventListener("focusout", removeFocus);
		} else {
			navPrimary.getElementsByClassName("nav-links")[0].lastChild.removeEventListener("focusout", removeFocus);
			navPrimaryV2.getElementsByClassName("nav-links")[0].lastChild.addEventListener("focusout", removeFocus);
		}
	}

	function navigationPanel2() {
		var anchor = this.getElementsByTagName("a")[0];
		if (this.classList.contains("open")) {
			this.classList.remove('open');
			anchor.setAttribute("aria-expanded", "false");
			navPanel = false;
		} else {
			if (lastNavPanel != null) {
				lastNavPanel.classList.remove('open');
				anchor.setAttribute("aria-expanded", "false");
			}
			this.classList.add('open');
			anchor.setAttribute("aria-expanded", "true");
			navPanel = true;
			lastNavPanel = this;
		}
	}

	//Language panel action
	var langPanel = false;
	function languagePanel(e) {
		if(langPanel) {
			$('#main-nav').removeClass('langPanel');
			if(isTouch) $('.language-panel').unbind();
		} else {
			//RESET CHECKOUT PANEL
			if($('#main-nav').hasClass('checkPanel')) {
				$('#main-nav').removeClass('checkPanel');
			}
			$('#main-nav').addClass('langPanel');
		}
		langPanel = !langPanel;
	}	

	//PANEL TOGGLE ACTION
	$('.panel-toggle').each(function() {
		$(this).click(togglePanel);
    });
    if ($("#main-nav").hasClass("calc-panel")) {
        calcPanelPos();
    }	
	function togglePanel(e) {

		if(typeof e === "string") _target = $(e);
		else _target = $(this);
		var panelAttr = _target.attr("data-panel");
        _target.data("cancel", false);
		var activePanel = $('div.panel[data-panel="'+panelAttr+'"]');

		if (activePanel.hasClass('active')) {
            if (_target.data("confirm")) {
                if (!confirm(_target.data("confirm"))) {
                    _target.data("cancel", true);
                    return false;
                }
            }
			_target.removeClass('active');
			this.setAttribute("aria-expanded", "false");
            activePanel.removeClass('active');
			activePanel[0].setAttribute("aria-hidden", "true");
            $('body').removeClass('scroll-disabled');
		}else{
			$('.panel').removeClass('active');
			$('.panel-toggle').removeClass('active');
			
			_target.addClass('active');
			this.setAttribute("aria-expanded", "true");
			activePanel.addClass('active');
			activePanel[0].setAttribute("aria-hidden", "false");
		}

	}	
	function calcPanelPos(){
		var panelAmt = $('.panels .panel').length;
		for (var i = 1; i <= panelAmt; i++) {
			var _panel = $('.panels .panel:nth-child('+i+')');
			_panel.css('right', (((panelAmt - i)/panelAmt)*100)+'%' );
		}
	}

	function checkoutPanel() {
		togglePanel('#checkoutPanel');
		$('.checkout-toggle').addClass('active');
	}

	$('.close-chat').click(function () {
        var message = chatConfirm();
        if (message) {
            if (!confirm(message)) {
                return false;
            }
        }
        $('body').removeClass('scroll-disabled');
		if($('.chat-panel').hasClass('active')){
			$('.chat-panel').removeClass('active');
			$('.chat-toggle').removeClass('active');
			$('.section-navigation').removeClass('chatPanel');
		}
	});
	$('.close-search').click(function() {
		if($('.c-searchPanel').hasClass('active')){
			$('.c-searchPanel').removeClass('active');
			$('.search-toggle').removeClass('active');
			$('.section-navigation').removeClass('searchPanel');
		}
	});
    $('.chat-toggle').click(function (e) {
        /*Keyou add*/
        var $this = $(this), active = $this.hasClass("active");
        var $panel = $(".chat-panel");
        if ($this.data("cancel")) return;
        $panel.addClass("hidden").removeClass("active");
        $chatform = $(".chat-form");
        if (active) {
            $.getJson($this.data("checkpath"), {}, null, function (data) {
                if (data) {
                    if (data.IsActiveTime) {
                        $this.removeClass("link").attr("data-panel", "chatPanel");
                        $chatform.attr("src", data.Href);
                        $chatform.attr("scrolling", "yes");
                        $panel.removeClass("hidden").addClass("active");
                    } else {
                        $this.addClass("link").attr("data-panel", "");
                        window.location.href = data.Href;
                    }
                }
            });
        } else if (window.chatBus) {
            window.chatBus.publish("chat:end");
            setTimeout(function () { $chatform.attr("src", "about:blank"); }, 1000);            
        }    
        
        /*--Keyou add--*/
        $('.section-navigation').addClass('chatPanel');
    });
	$('.search-toggle').click(function(){
		$('.section-navigation').addClass('searchPanel');
	});

	$('.chat-bold360').on("click", function () {
		$(this).removeClass("active");
		// document.getElementsByClassName('bcFloat')[0].getElementsByTagName('a')[0].click()
		$(".bcFloat a").trigger("click", "top");
	});
	$('.close-language').click(function () {
		if ($('.language-panel').hasClass('active')) {
			$('.language-panel').removeClass('active');
			$('.language-toggle').removeClass('active');
		}
	});

	$('.close-country').click(function () {
		if ($('.country-panel').hasClass('active')) {
			$('.country-panel').removeClass('active');
			$('.country-toggle').removeClass('active');
		}
	});

    var cShopping = document.querySelector('.checkout-footer .checkout-toggle');
    if (cShopping) {//On check out page, cShopping is null.
        cShopping.addEventListener('click', resetCheckout);
    }	

	function checkCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while(c.charAt(0) == ' ') c = c.substring(1);
			if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return false;
	}
	var cartFull = (checkCookie('cart')=='[]'||!checkCookie('cart'))?false:true;
	if(cartFull) checkoutPanel();

	//ELEMENT SPECIFIC -- END
	
	//SET CORRECT EVENT STATES BASED ON WINDOW SIZE AND TOUCH DEVICE
	$(window).resize(function() {
		_w = $(window).width();
		navHeight = $('.section-navigation').height();

		// //Reset all features to inactive state
		if(_w>768) {
			if($('#main-nav').hasClass('active')) {
				$('#main-nav').removeClass('active');
				if($('body').hasClass('scroll-disabled')) $('body').removeClass('scroll-disabled');
				collapsed = !collapsed;
			}
		}

		// Collapse open menus
		if($('.collapsible').hasClass('open')) {
			$('.collapsible').removeClass('open');
			navPanel = !navPanel;
		}

		//Mobile Specific. Language Panel
		if($('#main-nav').hasClass('langPanel')) {
			$('#main-nav').removeClass('langPanel');
			langPanel = !langPanel;
		}

		// //Maintain Checkout Panel active from SM to MD
		if($('.checkout-panel').hasClass('active')){
			$('.nav-tertiary .checkout-toggle').addClass('active');
			$('.mobile-shop.checkout-toggle').addClass('active');
		}else{
			resetCheckout();
		}

		if(_w<=768) {
			if(!$('#main-nav').hasClass('active')){
				$('#main-nav').removeClass('chatPanel');
				$('.chat-toggle').removeClass('active');
				$('.chat-panel').removeClass('active');
            }
			if($('#main-nav').hasClass('searchPanel')) {
				$('#main-nav').removeClass('searchPanel');
				$('.c-searchPanel').removeClass('active');
				$('.search-toggle').removeClass('active');
			}
		}
	});

	function resetCheckout(){
		$('.mobile-shop.checkout-toggle').removeClass('active');
		$('.nav-tertiary .checkout-toggle').removeClass('active');
		$('.checkout-panel').removeClass('active');
	}
	
	//DETECT AND SET CORRECT CLICK/HOVER STATES ON LOAD
	var navHeight = $('.section-navigation').height() + 1;

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
    window.addEventListener("scroll", function (e) {
        if ($("#main-nav").hasClass("active") ||
            $("#main-nav .checkout-panel.active").length > 0 ||
            $("#main-nav .chat-panel.active").length > 0) return; //if basket is opened or chat is opend, no need to hide navigation.

		var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
		var distance = lastStep - scrollTop;
		if(scrolling) clearTimeout(scrolling);
		if(scrollTop>navHeight) {
			if(distance<0 && !body.classList.contains('inpagenavScrolling')) {
				//Swipe Up
				distance*=-1;

				if(distance>8) {
					offset = navHeight;
					//Close Panels
					if($('.checkout-panel').hasClass('active')){
						resetCheckout();
					}
					if($('.chat-panel').hasClass('active')){
						$('.chat-panel').removeClass('active');
						$('.chat-toggle').removeClass('active');
						$('.section-navigation').removeClass('chatPanel');
					}
					if($('.language-panel').hasClass('active')) {
						$('.language-panel').removeClass('active');
						$('.language-toggle').removeClass('active');
					}
				}
			} else {
				//Swipe Down
				if (distance > 8) offset = 0;
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
	});
	// function scrollEnd() {
	// 	console.log("SCROLL END");
	// 	scrolling = false;
	// 	if (offset < (navHeight * 0.6)) offset = 0;
	// 	else offset = navHeight;
	// 	$('#main-nav').css('top', -(offset) + 'px');
	// }
	// ##### END HIDE NAVIGATION ON SCROLL #####


})(jQuery);
