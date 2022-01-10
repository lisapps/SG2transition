(function($) {

	$('.section-atc').before("<div class='atc-separator'></div>");

	/*
	//OLD IRRELEVANT STUFF
	var prodlineName = $('.atc-name'),
	prodlineSkew = $('.atc-skew'),
	prodlineImage = $('.atc-images img'),
	imagesFolder = '/images/fpo/section-add_to_cart/',
	changeId;

	function updateInfo() {
	var modelName = $("[name='model']:checked").val();
	var modelSkew = $("[name='model']:checked").data('skew');
	var modelColor = $("[name='color']:checked").val();

	var skew = modelSkew + modelColor;
	var photo = 'headsets-' + modelSkew + '-' + modelColor + '.jpg';

	prodlineName.text(modelName);
	prodlineSkew.text(skew);

	prodlineImage.hide();
	prodlineImage.attr('src', imagesFolder + photo);
	prodlineImage.fadeIn(300);
	}

	$('.atc-selections-list label').on('click', function(){
	if($(this).prev('.radio-button').is(':enabled')) {
	clearTimeout(changeId);
	changeId = setTimeout(updateInfo, 100);
	}
	});
	*/

})(jQuery);
