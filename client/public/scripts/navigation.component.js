(function() {

    var body = document.body;
    var mainNav = body.getElementsByClassName("s-kt-navigation")[0];
    var navHeight = mainNav.offsetHeight;
	var scrollTopPrev = 0;
	var navHeightOffset = 0;
	var inPageNavHeight = 0;
	var screenMD = 800;
	let navActive = false;
	let searchForm, searchInput, searchValue, resizeTimer, keyTimer;

	var inPageNav = document.getElementsByClassName("s-inPageNav")[0];
	if(inPageNav) {
		inPageNav.dataset.offset = navHeight;
		inPageNavHeight = inPageNav.offsetHeight;
	}
	
	var slideMenus = document.getElementsByClassName("c-slideMenu"); // --- CHECK IF THERE'S MORE
	if(slideMenus.length>0) var slideMenuOffset = navHeight + inPageNavHeight;
	document.documentElement.style.setProperty('--navHeight', `${navHeight}px`);

	var currentFocus;

    var Navigation = function() {

        // -- check if rexus exists
        if(!window.Rexus) return this.msg = "Rexus not found...";

		// -- activate nav toggle (hamburger)
		var navToggle = mainNav.querySelector(".s-kt-navigation__toggle");
		navToggle.addEventListener("click", activateNav);

		// -- activate search input
		var navSearch = mainNav.getElementsByClassName("s-kt-navigation__searchToggle")[0];
		navSearch.addEventListener("click", openSearch);

		// -- setup search form
		searchForm = document.getElementById("searchOverlay");
		searchForm.addEventListener("reset", closeSearch);

		// -- setup search listener
		searchInput = document.getElementById("searchInput");
		searchInput.addEventListener("focus", inputFocus);
		// searchInput.addEventListener("blur", closeSearch);

		var navigationLinks = mainNav.getElementsByClassName("s-kt-navigation__nav__links")[0];
		var navHovers = navigationLinks.getElementsByClassName("c-dropDown--hover");
		var navHover;

		for (a = (navHovers.length - 1); a >= 0; a--) {
			navHover = navHovers[a];
			var anchor = navHover.getElementsByTagName("a")[0];	
			anchor.addEventListener("focus", openPanel);	
		}

		window.addEventListener("scroll", scrollAction);
    }

	// ### PUBLIC METHODS ### //
	Navigation.prototype.getNavHeight = function() {
		return navHeight;
	}

    // ### PRIVATE METHODS ### //
    function activateNav() {
        var _nav = this.parentNode.parentNode;
        _nav.classList.toggle("s-kt-navigation--active");

		if (_nav.classList.contains("s-kt-navigation--active")) this.setAttribute("aria-expanded", "true");
		else this.setAttribute("aria-expanded", "false");
    }

	function openSearch() {
		mainNav.classList.add("s-kt-navigation--search");
		window.addEventListener("resize", resizeAction);
		searchInput.focus();
		readjustNav();
	}

	function openPanel(e) {

		var dropDown = this.parentElement.parentElement;
		if (!currentFocus) currentFocus = dropDown;
		if (dropDown != currentFocus) {
			currentFocus.classList.remove("c-dropDown--active");
			var toggler = currentFocus.getElementsByClassName("c-dropDown__toggler")[0];
			var panel = toggler.nextElementSibling;
			toggler.setAttribute("aria-expanded", "false");
			panel.setAttribute("aria-hidden", "true");
			currentFocus = dropDown;
		}

		dropDown.classList.add("c-dropDown--active");
		var toggler = dropDown.getElementsByClassName("c-dropDown__toggler")[0];
		var panel = toggler.nextElementSibling;
		toggler.setAttribute("aria-expanded", "true");
		panel.setAttribute("aria-hidden", "false");
	}

    function scrollAction() {

		var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
		var scrollSpeed = scrollTopPrev - scrollTop;
		// var offset = 0;
		
		// -- check if initial scroll is further down the page than the height of the nav
		if(scrollTop > navHeight) {

			// if((scrollSpeed < 0) && !body.classList.contains('inpagenavScrolling')) {
			if(scrollSpeed < 0) {
				// -- moving page towards the bottom
				scrollSpeed *= -1;
				if(scrollSpeed > 8) {
					offset = 0;
					navHeightOffset = navHeight; // -- to hide nav
					// -- Close Panels
					// window.Rexus.dropDown.closeDropDowns();
				}
			} else {
				// -- moving page towards the top
				if(scrollSpeed > 8) navHeightOffset = 0; // -- to reveal nav
			}

		} else navHeightOffset = 0;

		// -- update nav position
		mainNav.style.top = -(navHeightOffset) + 'px';


		// -- update inPagNav
		if(inPageNav) {
			if(navHeightOffset == 0) inPageNav.style.top = navHeight+"px";
			else inPageNav.style.top = 0;
		}

		if(slideMenus.length>0) {
			var slideMenu, a;
			if (window.innerWidth < screenMD) {
				if(navHeightOffset == 0) {
					if(inPageNav) {
						for(a=slideMenus.length-1; a>=0; a--) {
							slideMenu = slideMenus[a];
							slideMenu.style.top = (navHeight+inPageNavHeight)+"px";
							document.documentElement.style.setProperty('--navHeight', `${navHeight + inPageNavHeight}px`);
						}
					} else {
						for(a=slideMenus.length-1; a>=0; a--) {
							slideMenu = slideMenus[a];
							slideMenu.style.top = navHeight+"px";
							document.documentElement.style.setProperty('--navHeight', `${navHeight}px`);
						}
					}
				} else {
					if(inPageNav) {
						for(a=slideMenus.length-1; a>=0; a--) {
							slideMenu = slideMenus[a];
							slideMenu.style.top = inPageNavHeight+"px";
							document.documentElement.style.setProperty('--navHeight', `${inPageNavHeight}px`);
						}
					} else {
						for(a=slideMenus.length-1; a>=0; a--) {
							slideMenu = slideMenus[a];
							slideMenu.style.top = 0;
							document.documentElement.style.setProperty('--navHeight', `0px`);
						}
					}
				}
			}
		}

		// -- update the "previous" scrollTop number
		scrollTopPrev = scrollTop;
	}

	function readjustNav() {
		let winWidth = window.innerWidth;
		if(winWidth>766) {
			let links = mainNav.getElementsByClassName("s-kt-navigation__nav__links")[0].children;
			let a = links.length - 1;
			let rightMostX = 0;
			let link, rightX;

			for(a; a>=0; a--){
				link = links[a];
				rightX = link.getBoundingClientRect().right;
				if(rightX>rightMostX) rightMostX = rightX;
			}
			
			let searchMaxWidth = Math.round((rightMostX/winWidth)*100);
			let searchWidth = Math.round(100-(rightMostX/winWidth)*100);

			searchForm.style.maxWidth = searchMaxWidth+"%";
			searchForm.style.left = (searchMaxWidth<searchWidth) ? ((100-searchMaxWidth)+"%") : searchMaxWidth+"%"; //Math.round((rightMostX/winWidth)*100)+"%";
			searchForm.style.width = searchWidth+"%";
		} else {
			searchForm.removeAttribute("style");
		}
	}

	function resizeAction() {
		if(resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(readjustNav, 500);
	}

	function inputFocus() {
		this.addEventListener("keydown", keyDownAction);
	}

	function closeSearch() {
		navActive = false;
		mainNav.classList.remove("s-kt-navigation--search");
		if(mainNav.classList.contains("s-kt-navigation--query"))
			mainNav.classList.remove("s-kt-navigation--query");
		window.removeEventListener("resize", resizeAction);
		mainNav.removeEventListener("click", navClick);
		searchForm.removeAttribute("style");
		searchInput.value = "";
	}

	function keyDownAction(e) {
		let input = e.target;
		searchValue = input.value;
		if(keyTimer) clearTimeout(keyTimer);
		keyTimer = setTimeout(querySearch, 1000, input);
	}

	function querySearch(input) {
		if(searchValue!=input.value) {
			if(input.value!="") {
				mainNav.classList.add("s-kt-navigation--query");
				mainNav.addEventListener("click", navClick);
			} else mainNav.classList.remove("s-kt-navigation--query");
			searchValue = input.value;
		}
	}

	function navClick(e) {
		var target = e.target;
		if(target==mainNav) closeSearch();
	}

    this.Rexus.navigation = new Navigation();
})()