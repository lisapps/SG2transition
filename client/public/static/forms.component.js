/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
(function ($r) {
  // ### PRIVATE PROPERTIES ### //
  var activeForm;
  let formLog = {};

  // ### CONSTRUCTOR ### //
  var Forms = function () {
    let formElements = document.getElementsByTagName("form");
    let a = formElements.length - 1;
    let formElement;

    for (a; a >= 0; a--) {
      formElement = formElements[a];
      formElement.id = formElement.id ? formElement.id : $r.cuid.generate("fm");
      formElement.addEventListener("submit", formSubmit);
      formElement.addEventListener("reset", formElement.reset);

      if (formElement.dataset.steps) {
        formLog[formElement.id] = {
          steps: [],
          activeStep: null,
        };
        prepareSteps(formElement);
      }
    }
  };

  // ### PRIVATE METHODS ### //
  // -- form submission
  function formSubmit(e) {
    e.preventDefault();
    activeForm = this;

    // -- form data collection
    let _fd = new FormData(this);
    loadStep({
      formTarget: this.id,
      formAction: "next",
    });

    console.log(_fd);
  }

  // -- form reset
  function formReset(e) {
    this.reset();
  }

  function prepareSteps(frm) {
    let steps = frm.children;
    let a = steps.length - 1;
    let step;

    // -- store all steps into an array
    for (a; a >= 0; a--) {
      step = steps[a];
      step.dataset.step = a;
      formLog[frm.id]["steps"][a] = step;
      if (a != 0) step.hidden = true;
      else formLog[frm.id]["activeStep"] = a;
    }

    let formFinalStep = frm.dataset.finalStep;
    if (formFinalStep && formFinalStep != "") {
      let thankYouForm = document.getElementById(formFinalStep);
      thankYouForm.dataset.confirmation = true;
      thankYouForm.hidden = true;
      formLog[frm.id]["steps"].push(thankYouForm);
      console.log("Add", formFinalStep, "to", formLog[frm.id]);
    }

    // -- activate all buttons
    let buttons = frm.getElementsByTagName("button");
    let button;
    for (a = buttons.length - 1; a >= 0; a--) {
      button = buttons[a];
      button.dataset.target = frm.id;
      button.addEventListener("click", loadStep);
    }
  }

  function loadStep(e) {
    let buttonAction = e.formAction || this.dataset.action;
    let targetAction = e.formTarget || this.dataset.target;

    if (buttonAction) {
      if (e.preventDefault) e.preventDefault();
      buttonAction = buttonAction.toLowerCase();
      let stepsLog = formLog[targetAction];
      let activeStepIndex = parseInt(stepsLog.activeStep, 10);
      let allSteps = stepsLog.steps;
      let currentStep = allSteps[activeStepIndex];
      let activeStep;

      currentStep.hidden = true;

      switch (buttonAction) {
        case "next":
          activeStepIndex++;
          if (activeStepIndex >= stepsLog.length) activeStepIndex = stepsLog.length - 1;
          break;
        case "back":
          activeStepIndex--;
          if (activeStepIndex < 0) activeStepIndex = 0;
          break;
        default:
          let buttonActionIndex = parseInt(buttonAction);
          activeStepIndex = isNaN(buttonActionIndex) ? 0 : buttonActionIndex - 1;
      }

      stepsLog.activeStep = activeStepIndex;
      activeStep = allSteps[activeStepIndex];
      activeStep.hidden = false;

      return;
    }
  }

  // ### PUBLIC METHODS ### //

  // -- initiator
  $r.forms = new Forms();
})(Rexus);
