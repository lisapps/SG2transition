(function() {
	var parallax = document.getElementsByClassName("s-lifestyle__parallax");
	var parallaxItem, parallaxBg, yPos, yPosNew;

	if (parallax.length > 0) {
		for (i = (parallax.length - 1); i >= 0; --i) {
			parallaxItem = parallax[i];

			parallaxBg = parallaxItem.dataset.bg;
			parallaxItem.style.backgroundImage = "url('"+ parallaxBg + "')";
		}
	}
})();