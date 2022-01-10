/*

	var places = new ClientPlaces();

*/

(function ($, Stripe) {

	var body = document.getElementsByTagName("body")[0];

	var component = document.getElementsByClassName("s-checkout")[0];
	var signInContainer, overlay;

	if (component) {
		signInContainer = component.getElementsByClassName("s-checkout__signinContainer")[0];
		overlay = signInContainer.nextElementSibling;
		
		var signInToggleBtns = signInContainer.getElementsByClassName("signin-toggle");
	
		var signInToggleBtn;
		for (a = (signInToggleBtns.length - 1); a >= 0; a--) {
			signInToggleBtn = signInToggleBtns[a];
			signInToggleBtn.addEventListener("click", toggleSignIn);
		}
	}

	var cGooglePlaces = this.Rexus.googlePlaces;
	cGooglePlaces.newGroup([{
		street_address: "gAddress1",
		city: "gCity1",
		state: "gState1",
		postal: "gPostal1"
	}, {
		street_address: "gAddress2",
		city: "gCity2",
		state: "gState2",
		postal: "gPostal2"
	}])


	// #### STRIPE JAVASCIPT :: BEGIN #### //
	var elementStyles = {
		base: {
			iconColor: '#A20520',
			color: '#585858',
			lineHeight: '2em',
			fontWeight: 300,
			fontSize: "1em",
			fontFamily: '"proxima-nova", sans-serif',
			'::placeholder': {
				color: '#b0b0b0',
			}
		}
	}
	var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
	var elements = stripe.elements();
	var cardNumber = elements.create('cardNumber', {
		placeholder: "",
		style: elementStyles
	});
	cardNumber.mount('#cardNumber-element');

	var cardExpiry = elements.create('cardExpiry', {
		placeholder: "",
		style: elementStyles
	});
	cardExpiry.mount('#cardExpiry-element');

	var cardCvc = elements.create('cardCvc', {
		placeholder: "",
		style: elementStyles
	});
	cardCvc.mount('#cardCvc-element');

	cardNumber.on('change', function (event) {
		setOutcome(event);
	});

	function setOutcome(result) {
		var errorElement = document.querySelector('.error');
		errorElement.classList.remove('visible');
		if (result.token) {
			// Use the token to create a charge or a customer
			// https://stripe.com/docs/charges
		} else if (result.error) {
			errorElement.classList.add('visible');
		}
	}

	document.querySelector('#formCheckout').addEventListener('submit', function (e) {
		e.preventDefault();
		var form = document.querySelector('#formCheckout');
		var extraDetails = {
			name: form.querySelector('input[name=cardholder-name]').value,
			address_zip: form.querySelector('input[name=address-zip]').value
		};
		stripe.createToken(card, extraDetails).then(setOutcome);
	});
	// #### STRIPE JAVASCIPT :: END #### //

	// -- edit cart cta
	document.getElementById("editCartLink").addEventListener('click', editCart);
	function editCart() {
		editing = true;
		var _acc = document.querySelector(".c-cartCheckout");
		var chkBtn = document.querySelector(".checkout-btn");
		_acc.classList.add("c-cartCheckout--editing");
		chkBtn.classList.add("disabled");
		// updateAccordion();
	};

	// -- update cart cta
	document.getElementById("updateCartLink").addEventListener('click', cartUpdate);
	document.querySelector(".s-checkout .c-accordion__tab").addEventListener("click", cartUpdate)

	function cartUpdate() {
		editing = false;
		var _acc = document.querySelector(".c-cartCheckout");
		var chkBtn = document.querySelector(".checkout-btn");
		_acc.classList.remove("c-cartCheckout--editing");
		chkBtn.classList.remove("disabled");
	}

	// function updateAccordion() {
	// 	//Update accordion height
	// 	var _panel = document.querySelector(".s-checkout .c-accordion__panel");
	// 	_panel.style.maxHeight = _panel.scrollHeight + "px";
	// }

	//FORM SUBMIT CTA
	// document.getElementById("checkoutLink").addEventListener('click',function() {
	// 	if(!editing && !processing) {
	// 		processing = true;
	// 		$(this).addClass('processing');
	// 		$(this).attr('disabled');
	// 		setTimeout(function() {
	// 			window.location.hash = '#/checkout-thankyou';
	// 		}, 3000);
	// 	}
	// });

	var summaryAccordion = document.getElementsByClassName("c-accordion")[0];
	var tab = summaryAccordion.getElementsByClassName("c-accordion__tab")[0];
	checkAccordion();
	window.addEventListener("resize", checkAccordion);

	function checkAccordion() {
		if (window.innerWidth >= 800) {
			if (!tab.classList.contains("c-accordion__tab--active")) {
				tab.classList.add("c-accordion__tab--active");
				tab.setAttribute("aria-expanded", "true");
				tab.nextElementSibling.setAttribute("aria-hidden", "false");
			}
		}
	}

	// -- toggle billing form when checked
	var billCheck = document.getElementById("sameAsShip");
	if (billCheck) billCheck.addEventListener("formChange", function () {
		var billingFields = document.getElementById("billingFields");
		billingFields.classList.toggle("hidden");
	})

	//Toggles show password
	$('.show-pw').each(function () {
		$(this).click(function () {
			var _target = $(this).data('target');
			$(_target).toggleClass('active');
			if ($(_target).hasClass('active')) {
				$(_target).attr('type', 'text');
				$(this).text('Hide');
			} else {
				$(_target).attr('type', 'password');
				$(this).text('Show');
			}
		})
	})


	// //Toggle for signin link
	function toggleSignIn() {
		signInContainer.classList.toggle("s-checkout__signinContainer--active");
		overlay.classList.toggle("s-checkout__overlay--active");
		body.classList.toggle("scroll-disabled");
	}

})(jQuery, Stripe)



















// /*

// 	var places = new ClientPlaces();

// */




// (function ($, Stripe) {

// 	var cGooglePlaces = this.Rexus.googlePlaces;
// 	cGooglePlaces.newGroup([{
// 		street_address: "gAddress1",
// 		city: "gCity1",
// 		state: "gState1",
// 		postal: "gPostal1"
// 	}, {
// 		street_address: "gAddress2",
// 		city: "gCity2",
// 		state: "gState2",
// 		postal: "gPostal2"
// 	}])


// 	// #### STRIPE JAVASCIPT :: BEGIN #### //
// 	var elementStyles = {
// 		base: {
// 			iconColor: '#A20520',
// 			color: '#585858',
// 			lineHeight: '2em',
// 			fontWeight: 300,
// 			fontSize: "1em",
// 			fontFamily: '"proxima-nova", sans-serif',
// 			'::placeholder': {
// 				color: '#b0b0b0',
// 			}
// 		}
// 	}
// 	var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
// 	var elements = stripe.elements();
// 	var cardNumber = elements.create('cardNumber', {
// 		placeholder: "",
// 		style: elementStyles
// 	});
// 	cardNumber.mount('#cardNumber-element');

// 	var cardExpiry = elements.create('cardExpiry', {
// 		placeholder: "",
// 		style: elementStyles
// 	});
// 	cardExpiry.mount('#cardExpiry-element');

// 	var cardCvc = elements.create('cardCvc', {
// 		placeholder: "",
// 		style: elementStyles
// 	});
// 	cardCvc.mount('#cardCvc-element');

// 	cardNumber.on('change', function (event) {
// 		setOutcome(event);
// 	});

// 	function setOutcome(result) {
// 		var errorElement = document.querySelector('.error');
// 		errorElement.classList.remove('visible');
// 		if (result.token) {
// 			// Use the token to create a charge or a customer
// 			// https://stripe.com/docs/charges
// 		} else if (result.error) {
// 			errorElement.classList.add('visible');
// 		}
// 	}

// 	document.querySelector('#formCheckout').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var form = document.querySelector('#formCheckout');
// 		var extraDetails = {
// 			name: form.querySelector('input[name=cardholder-name]').value,
// 			address_zip: form.querySelector('input[name=address-zip]').value
// 		};
// 		stripe.createToken(card, extraDetails).then(setOutcome);
// 	});
// 	// #### STRIPE JAVASCIPT :: END #### //

// 	// -- edit cart cta
// 	document.getElementById("editCartLink").addEventListener('click', editCart);
// 	function editCart() {
// 		editing = true;
// 		var _acc = document.querySelector(".c-cartCheckout");
// 		var chkBtn = document.querySelector(".checkout-btn");
// 		_acc.classList.add("c-cartCheckout--editing");
// 		chkBtn.classList.add("disabled");
// 		// updateAccordion();
// 	};

// 	// -- update cart cta
// 	document.getElementById("updateCartLink").addEventListener('click', cartUpdate);
// 	document.querySelector(".s-checkout .c-accordion__tab").addEventListener("click", cartUpdate)

// 	function cartUpdate() {
// 		editing = false;
// 		var _acc = document.querySelector(".c-cartCheckout");
// 		var chkBtn = document.querySelector(".checkout-btn");
// 		_acc.classList.remove("c-cartCheckout--editing");
// 		chkBtn.classList.remove("disabled");
// 	}

// 	// function updateAccordion() {
// 	// 	//Update accordion height
// 	// 	var _panel = document.querySelector(".s-checkout .c-accordion__panel");
// 	// 	_panel.style.maxHeight = _panel.scrollHeight + "px";
// 	// }

// 	//FORM SUBMIT CTA
// 	// document.getElementById("checkoutLink").addEventListener('click',function() {
// 	// 	if(!editing && !processing) {
// 	// 		processing = true;
// 	// 		$(this).addClass('processing');
// 	// 		$(this).attr('disabled');
// 	// 		setTimeout(function() {
// 	// 			window.location.hash = '#/checkout-thankyou';
// 	// 		}, 3000);
// 	// 	}
// 	// });

// 	var summaryAccordion = document.getElementsByClassName("c-accordion")[0];
// 	var tab = summaryAccordion.getElementsByClassName("c-accordion__tab")[0];
// 	checkAccordion();
// 	window.addEventListener("resize", checkAccordion);

// 	function checkAccordion() {
// 		if (window.innerWidth >= 800) {
// 			if (!tab.classList.contains("c-accordion__tab--active")) {
// 				tab.classList.add("c-accordion__tab--active");
// 				tab.setAttribute("aria-expanded", "true");
// 				tab.nextElementSibling.setAttribute("aria-hidden", "false");
// 			}
// 		}
// 	}

// 	// -- toggle billing form when checked
// 	var billCheck = document.getElementById("sameAsShip");
// 	if (billCheck) billCheck.addEventListener("formChange", function () {
// 		var billingFields = document.getElementById("billingFields");
// 		billingFields.classList.toggle("hidden");
// 	})

// 	//Toggles show password
// 	$('.show-pw').each(function () {
// 		$(this).click(function () {
// 			var _target = $(this).data('target');
// 			$(_target).toggleClass('active');
// 			if ($(_target).hasClass('active')) {
// 				$(_target).attr('type', 'text');
// 				$(this).text('Hide');
// 			} else {
// 				$(_target).attr('type', 'password');
// 				$(this).text('Show');
// 			}
// 		})
// 	})

// 	//Toggle for signin link
// 	$('.signin-toggle').each(function () {
// 		$(this).click(function () {
// 			$('.signin-container').toggleClass('active');
// 			$('.grey-overlay').toggleClass('active');
// 			$('body').toggleClass('scroll-disabled');
// 		})
// 	})
// })(jQuery, Stripe)
