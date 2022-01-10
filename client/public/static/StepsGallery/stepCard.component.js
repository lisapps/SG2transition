(function(){

	var stepCards = document.querySelectorAll('.c-stepCard');

	if(stepCards) {

		var a = stepCards.length - 1;
		var stepCard, stepCardParent, stepCardCopyElement, stepCardCopy, stepIndex;
		for(a; a>=0; a--) {
			stepCard = stepCards[a];
            stepCardParent = stepCard.parentNode;
            stepCardCopyElement = stepCard.querySelector(".c-stepCard__copy");
            stepCardCopy = stepCardCopyElement.innerHTML;
            if(stepCardParent.dataset.index) stepIndex = (parseInt(stepCardParent.dataset.index, 10) + 1);
            else stepIndex = 1;
            stepCardCopyElement.innerHTML = stepIndex + ") " + stepCardCopy;
		}
	}

})()