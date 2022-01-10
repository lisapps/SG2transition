(function(){
	var svgContainer = document.querySelector('.svg-external');
	var svgURL = svgContainer.dataset.svg;

	var request = new XMLHttpRequest();
	request.open('GET', svgURL, true);
	request.addEventListener('load', requestLoad);
	request.addEventListener('error', requestError);
	request.send();

	function requestLoad(e) {
		var req = e.srcElement;
		if(req.status >= 200 && req.status < 400) {
			var svg = e.target.responseText;
			svgContainer.innerHTML = svg;
		} else console.log('Server Error');
	}
	function requestError(e) {
		console.log('Connection Error');
	}
})()