(function() {
	console.log("hi google");

	// ************************** //
	// *** PRIVATE PROPERTIES *** //
	// ************************** //
	var components,
		keyTimeout,
		classTimeout,
		geoInfo,
		listingsContainer,
		activeTarget,
		locations,
		acService,
		acGeocode,
		cFormInput;

	// ******************* //
	// *** CONSTRUCTOR *** //
	// ******************* //	
	var GooglePlaces = function() {
		
		// -- check if rexus has been initiated
		if(!window.Rexus) return this.msg = "Rexus not found...";
		
		// -- determine if forms has been initialized
		if(!window.Rexus.formInput) return this.msg = "FormInput class must be initialized...";
		else cFormInput = window.Rexus.formInput;

		this.activeGroups = [];
		acService = new google.maps.places.AutocompleteService();
		acGeocode = new google.maps.Geocoder;
		
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var geolocation = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				geoInfo = new google.maps.LatLng(geolocation);
			});
		}
	}

	// ********************** //
	// *** PUBLIC METHODS *** //
	// ********************** //

	// -- initiate a new group for using Google Places
	GooglePlaces.prototype.newGroup = function(groups) {

		// -- group validation
		if(!Array.isArray(groups)) return this.msg = "Invalid Group, must be an array...";
		else {
			var inputGroup, inputElement, parentElement;
			for(var i = 0; i < groups.length; i++) {
				var group = groups[i];
				for(var key in group) {
					switch(key) {
						case "street_address":
							inputGroup = document.getElementById(group[key]);
							inputElement = inputGroup.querySelector("input");
							parentElement = inputElement.parentNode;
							group[key] = {
								element: inputGroup
							}
							inputGroup.addEventListener("click", function() {
								if(!this.classList.contains("c-googlePlaces--disabled") && this.classList.contains("c-googlePlaces--changed"))
									this.classList.add("c-googlePlaces--active");
							})

							// -- icon disable
							var disableBtn = inputGroup.querySelector(".f-input__icon");
							disableBtn.addEventListener("click", disableAction);

							// -- prepare container for predictions
							listingsContainer = buildContainer(i);
							parentElement.appendChild(listingsContainer);
							
							inputElement.addEventListener("focus", function() {
								activeTarget = this.parentNode.lastChild;
								if(classTimeout) clearTimeout(classTimeout);
								this.addEventListener("keyup", keyUpAction);
							});

							inputElement.addEventListener("blur", function() {
								var _this = this;
								activeTarget = null;
								classTimeout = setTimeout(function() {
									var query = "[data-id=" + _this.dataset.root + "]";
									var _parentElement = document.querySelector(query);
									_parentElement.classList.remove("c-googlePlaces--active");
								}, 150);
								this.removeEventListener("keyup", keyUpAction);
							});
							break;
						case "city":
						case "postal":
						case "state":
							inputGroup = document.getElementById(group[key]);
							group[key] = {
								element: inputGroup
							}
							break;
						default:
							this.msg = key + " is not a valid group key...";
					}
				}
				this.activeGroups[i] = group;
			}
		}
	}

	// *********************** //
	// *** PRIVATE METHODS *** //
	// *********************** //

	// ### EVENT HANDLERS ### //
	// vvvvvvvvvvvvvvvvvvvvvv //

	// -- generate predictions on keyup
	function keyUpAction() {
		if(keyTimeout) clearTimeout(keyTimeout);
		keyTimeout = setTimeout(() => {
			if(this.value) {
				acService.getQueryPredictions({
					input: this.value,
					types: "address",
					location: geoInfo,
					radius: 80500
				}, function(predictions, status) {
					if (status != google.maps.places.PlacesServiceStatus.OK) return;
					generateListings(predictions);
				});
			} else activeTarget.innerHTML = "";
		}, 750);
	}

	// --  get address details on click
	function predictionClick(e) {
		var parentElement = this.parentNode;
		var groupIndex = parentElement.dataset.groupIndex;
		var group = window.Rexus.googlePlaces.activeGroups[groupIndex];
		var location = locations[this.dataset.index];
		var _loc;
		acGeocode.geocode({'placeId': location.place_id}, function(results, status) {
			if (status === 'OK') {
				if(results[0]) {
					_loc = results[0].address_components;
					for(var i = 0; i < _loc.length; i++) {
						var _locDetail = _loc[i];
						switch(_locDetail.types[0]) {
							case "locality":
								group.city.value = _locDetail.short_name;
								break;
							case "administrative_area_level_1":
								group.state.value = _locDetail.short_name;
								break;
							case "postal_code":
								group.postal.value = _locDetail.short_name;
								break;
						}
					}
					applyValues(group);
				} else console.log('no results');
			} else {
				console.log("Geocoder Failed:",status)
			}
		});
		group.street_address.value = location.structured_formatting.main_text;
	}

	// -- disable places on specific field
	function disableAction(e) {
		var parentElement = this.parentNode;
		parentElement.classList.add("c-googlePlaces--disabled");
	}

	// ### MARKUP BUILDERS ### //
	// vvvvvvvvvvvvvvvvvvvvvvv //

	// -- generate listing based on predictions
	function generateListings(predictions) {

		// -- get parent group
		var parentElement = activeTarget.parentNode.parentNode;
		if(!parentElement.classList.contains("c-googlePlaces--active"))
			parentElement.classList.add("c-googlePlaces--active")
		activeTarget.innerHTML = "";
		for(var i = 0; i < predictions.length; i++) {

			// -- initiate listing element
			var location = predictions[i];
			var listing = document.createElement("li");
			listing.addEventListener("click", predictionClick);
			listing.dataset.index = i;

			// -- primary text
			var listingPrimary = document.createElement("span");
			var listingPrimaryTxt = document.createTextNode(location.structured_formatting.main_text);
			listingPrimary.appendChild(listingPrimaryTxt);
			listing.appendChild(listingPrimary);

			// -- secondary text
			var listingSecondary = document.createElement("span");
			var listingSecondaryTxt = document.createTextNode(location.structured_formatting.secondary_text);
			listingSecondary.appendChild(listingSecondaryTxt);
			listing.appendChild(listingSecondary);
			
			// -- finalize listing element
			activeTarget.appendChild(listing);
		}
		locations = predictions;	
	}

	// -- create predictions container
	function buildContainer(id) {
		var container = document.createElement("ul");
		container.classList.add("c-googlePlaces__predictions");
		container.dataset.groupIndex = id;
		return container;
	}
	
	// ### ACTION PERFORMERS ### //
	// vvvvvvvvvvvvvvvvvvvvvvvvv //

	// -- set the value for connected input fields
	function applyValues(group) {
		for(var key in group) {
			switch(key) {
				case "street_address":
					var inputGroup = group[key].element;
					inputGroup.classList.remove("c-googlePlaces--active");
					inputGroup.classList.add("c-googlePlaces--changed");
					cFormInput.setValue(group[key].element,group[key].value);
					break;
				case "city":
				case "state":
				case "postal":
					cFormInput.setValue(group[key].element,group[key].value);
					break;
				default:
					this.msg = key + " is not a valid group key...";
			}
		}
	}

	// -- initiate into Rexus object
	window.Rexus.googlePlaces = new GooglePlaces();
})();