(()=>{
	// ########################## //
	// ### PRIVATE PROPERTIES ### //
	// ########################## //

	let rootClass = "v-viewFrame";
	let typePrefix = rootClass.charAt(0);
	let objectName = rootClass.replace(typePrefix + "-", "");
    let components;
	
	let viewLog = {};
	let dragAction, mouseX, winWidth, activeObj;
	
	function Init() {
		components = document.getElementsByClassName(rootClass+"__window");
		if (components) {
			var component, dragHandles, dragHandle, a;
      for (a = (components.length - 1); a >= 0; a--) {
				component = components[a];
				component.id = (component.id) ? component.id : "vView"+a;
				dragHandles = component.getElementsByClassName(rootClass+"__grip");
				
				viewLog[component.id] = component;
			}
			
			for (a=(dragHandles.length-1); a>=0; a--) {
				dragHandle = dragHandles[a];
				dragHandle.dataset.target = component.id;
				dragHandle.addEventListener("mousedown", dragInit);
			}
		}
	}
	
	// ####################### //
	// ### PRIVATE METHODS ### //
  // ####################### //
	function dragInit(e) {
		activeObj = this.dataset.target;
		let currentMouseX = e.clientX;
		winWidth = window.innerWidth;
		if(currentMouseX>(winWidth/2)) dragAction = "right";
		else dragAction = "left";

        let viewObj = viewLog[activeObj];
        viewObj.classList.add(rootClass+"--active");
		
		document.addEventListener("mousemove", dragMove);
		document.addEventListener("mouseup", dragEnd);
	}
	function dragMove(e) {
		let dragPosX = e.clientX; // Get mouse position
		let viewObj = viewLog[activeObj];
		let viewWidth;
		if(dragPosX!=mouseX) {
			switch(dragAction) {
				case "right":
					viewWidth = Math.round((dragPosX-winWidth/2)/(winWidth/2)*100)+"%";
					break;
				default:
					viewWidth = Math.round(((dragPosX/(winWidth/2))*100)-100)*-1+"%";
			}
			viewObj.style.width = viewWidth;
			mouseX = dragPosX;
		}
	}
	function dragEnd() {
        let viewObj = viewLog[activeObj];
        viewObj.classList.remove(rootClass+"--active");

		document.removeEventListener("mousemove", dragMove);
		document.removeEventListener("mouseup", dragEnd);
	}
	
	// For demo purposes, don't attach this to the window obj
	this["SG2_"+objectName] = new Init();
})();