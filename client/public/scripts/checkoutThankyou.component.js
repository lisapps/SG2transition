(function($){
	var target = $('#gMap');
	var api_key = 'AIzaSyB3PMkGoka1dNBCIbp8mGOJpl2yI82qojA';
	var map_zoom = 15;
	var map_loc = target.data('location');
	map_loc = encodeURI(map_loc);

	var iframe = document.createElement('iframe');
	var iframe_src = '//www.google.com/maps/embed/v1/place?q=' + map_loc + '&zoom=' + map_zoom + '&key=' + api_key;
	iframe.className = 'google-map';
	iframe.src = iframe_src;
	target.append(iframe);

})(jQuery)