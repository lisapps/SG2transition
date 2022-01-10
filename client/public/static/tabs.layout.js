(function($r) {

	// ### VALIDATION ### //
	// -- Determine if the RexusManager has been preloaded
	if(!$r) {
		console.error('Tabs Component :: RexusManager needs to be declared');
		return;
	}

	// -- Warn if this script has been preloaded
	// if($r.tabs) {
	// 	console.warn('Tabs Component :: Has already been loaded, consider running "Rexus.Tabs.update()" if any tabs are dynamically loaded');
	// 	return;
	// }
	// ===== //

	var html = document.getElementsByTagName("html")[0];
	var tabComponents = document.getElementsByClassName("l-tabView");
	if(tabComponents.length > 0) {

		var a = tabComponents.length - 1;
		var b = c = inc = 0;
		var $root, activeObj, tabComponent, tabsContainer, tab, tabs,
		tabContents, content, tabTmp, tabIDs, tabObj;

		// ### CONSTRUCTOR ### //
		var Tabs = function() {
			for(a; a>=0; a--) {
				
				$root = this;
				if($r.tabs) $root.activeLog = $r.tabs.activeLog;
				else $root.activeLog = [];
				
				// -- id log array
				tabIDs = [];
				// -- declare parent tab component
				tabComponent = tabComponents[a];
				// -- set id for tab layout
				if(tabComponent.dataset.id) continue;
				else tabComponent.dataset.id = $r.cuid.generate("tab");

				var tabList = tabComponent.getElementsByClassName("l-tabView__tabs")[0];
				tabList.addEventListener("keydown", tabFocusing);

				// -- collect listing per component
				tabs = tabList.getElementsByClassName("l-tabView__tabs__tab");
				// -- collect content blocks per listing
				tabContents = tabComponent.getElementsByClassName("l-tabView__panels__panel");
				// -- collect first UL from component
				tabsContainer = tabs[0].parentNode;
				// -- generate new tab for mobile reserve
				tabTmp = newTab();
				// -- generate generic object
				tabObj = {
					id: a,
					expanded: false
				};
		
				// -- identify tabs and set properties
				for(b=(tabs.length-1); b>=0; b--) {
					tab = tabs[b];
					tab.dataset.parent = a;
					if(!tab.dataset.href) {
						// -- store tab/content ids in object
						tab.id = "tab" + a + "_" + b;
						tab.dataset.tab = "tabContent" + a + "_" + b;
						tab.setAttribute("aria-controls", "tabContent" + a + "_" + b);
						tab.setAttribute("aria-selected", "false");
						tab.setAttribute("tabindex", "-1");

						tabIDs.push({
							"tabId": tab.id,
							"contentId": tab.dataset.tab
						});
						tab.addEventListener("click", tabClick);
					} else if(tab.dataset.href) {
						tabComponent.insertAdjacentElement("afterbegin", anchorReserve(this));
						tab.addEventListener("click", function() {
							window.open(this.dataset.href,"_blank");
						});				
					}
					if(tab.classList.contains("l-tabView__tabs__tab--active")) tabObj.tab = tab;
				}
		
				// -- set first tab as active if none are declared
				if(!tabObj.tab) {
					tabObj.tab = tabs[0];
					tabObj.tab.classList.add("l-tabView__tabs__tab--active");
					tabObj.tab.setAttribute("aria-selected", "true");
					tabObj.tab.setAttribute("tabindex", "0"); // -- aria
				}
		
				// -- identify content blocks and set properties
				for(c=(tabContents.length-1); c>=0; c--) {
					content = tabContents[c];
					content.setAttribute("aria-labelledby", tabIDs[inc].tabId);
					if(!content.id) content.id = tabIDs[inc].contentId;
					inc++;
				}
		
				// -- setup mobile reserve tab
				tabsContainer.insertBefore(tabTmp, tabsContainer.firstChild);
				tabTmp.dataset.parent = a;
				tabTmp.addEventListener("click", tabExpand);
		
				//Activate tab contents
				$root.activeLog.push(tabObj);
				activeObj = tabObj;
				tabShow();
			}
		}
	} else {
		console.warn('Tabs Component :: No "tab" objects found, check syntax or consider removing this class reference');
		return;
	}
	

	Tabs.prototype.activateTab = function (tab) {
		tabClick(tab);
	}


	function tabFocusing(e) {
		var newFocus;

		// Move right
		if (e.keyCode === 39 || e.keyCode === 37) {
			e.target.setAttribute("tabindex", -1);

			if (e.keyCode === 39) {
				if (html.dir == "rtl") newFocus = e.target.previousElementSibling;
				else newFocus = e.target.nextElementSibling;
			// Move left
			} else if (e.keyCode === 37) {
				if (html.dir == "rtl") newFocus = e.target.nextElementSibling;
				else newFocus = e.target.previousElementSibling;
			}

			newFocus.setAttribute("tabindex", 0);
			newFocus.focus();

		} else if (e.keyCode === 13) {
			tabClick(e);
		}

	}

	

	function anchorReserve() {
		var anchor = document.createElement("a");
		anchor.href = tab.dataset.href;
		anchor.target = "_blank";
		anchor.classList.add("l-tabView__externals");
		anchor.innerHTML = tab.innerHTML;
		return anchor;
	}

	// -- (RETURNS) mobile reseve tab
	function newTab() {
		// -- generate svg(arrow-down) for mobile reserve dropdown menu
		var svgTag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		var svgPath = '<path d="M24 2L8 16l16 14"/>';
		svgTag.setAttribute("viewBox", "0 0 32 32");
		svgTag.innerHTML = svgPath;

		// -- generate markup for mobile reserve element
		var tabReserve = document.createElement('li');
		var tabText = document.createElement('span');
		tabReserve.appendChild(tabText);
		tabReserve.classList.add("l-tabView__tabs__mobile");
		tabReserve.appendChild(svgTag);

		return tabReserve;
	}

	// -- (VOID) performs tab click actions
	function tabClick(e) {
		var _target;

		if (e.target) {
			_target = e.target;
			if (_target.tagName == "SPAN") _target = _target.parentElement;
		}
		else {
			if (e.tagName == "LI") _target = e;
			else _target = this;
		}

		var _index = _target.dataset.parent;
		activeObj = $root.activeLog[_index];

		if(!_target.classList.contains("l-tabView__tabs__tab--active")) {
			activeObj.tab.classList.remove('l-tabView__tabs__tab--active');
			activeObj.tab.setAttribute("aria-selected", "false");
			activeObj.tab = _target;
			tabShow();
		}
	}

	// -- (VOID) performs mobile reserve click actions
	function tabExpand(e) {
		var _target = e.target;
		var _index = _target.dataset.parent;
		for(var i=0; i<$root.activeLog.length; i++) {
			if(i!=_index) {
				$root.activeLog[i].tab.parentNode.classList.remove('l-tabView__tabs--active');
				$root.activeLog[i].expanded = false;
			}
		}
		activeObj = $root.activeLog[_index];
		if(!activeObj.expanded) _target.parentNode.classList.add('l-tabView__tabs--active');
		else _target.parentNode.classList.remove('l-tabView__tabs--active');
		activeObj.expanded = !activeObj.expanded;
	}

	// -- (VOID) 
	function tabShow() {
		// -- get related tab content
		var tabContent = document.getElementById(activeObj.tab.dataset.tab);
		if(tabContent != activeObj.content) {
			if(activeObj.content) activeObj.content.classList.remove('l-tabView__panels__panel--active');
			activeObj.tab.classList.add('l-tabView__tabs__tab--active');
			activeObj.tab.setAttribute("aria-selected", "true");
			tabContent.classList.add('l-tabView__panels__panel--active');
			activeObj.content = tabContent;
			
			if (activeObj.tab.parentElement.parentElement.dataset.tabshow == "false");
			else {
				tabText = tabComponents[activeObj.id].querySelector(".l-tabView__tabs__mobile > span");
				tabText.textContent = activeObj.tab.textContent;
			}

			if(activeObj.expanded) {
				activeObj.tab.parentNode.classList.remove('l-tabView__tabs--active');
				activeObj.expanded = false;
			}
		}
	}
	
	// -- Initiate Class
	$r.tabs = new Tabs();
})(((this.Rexus)?Rexus:null));