// (function() {
//   var html = document.getElementsByTagName("html")[0];
//   var sliders = document.getElementsByClassName("c-slider");

//   var slider,
//       sliderContainer, slides, touchOverlay,
//       cards, card,
//       displayCount = 0,
//       ctrlLeft, ctrlRight,
//       lastSlideIndex;

//   var dspLG, dspMD, dspSM;

//   var windowSize;
//   var screenMD = 512;
//   var screenLG = 800;

//   var marginRight = 22;

//   var currentPos = 0;

//   let isDown = false;

//   var remainingChangeSet = false;
//   var remaining = 0;

//   // ### CONSTRUCTOR ### //
//   function Slider() {
//       for (i = (sliders.length - 1); i >= 0; i--) {
//           slider = sliders[i];
      
//           dspLG = slider.dataset.dsplg;
//           dspMD = slider.dataset.dspmd;
//           dspSM = slider.dataset.dspsm;
          
//           ctrls = slider.getElementsByClassName("c-slider__controls")[0];
//           ctrlLeft = ctrls.getElementsByClassName("c-slider__controls__left")[0];
//           ctrlRight = ctrls.getElementsByClassName("c-slider__controls__right")[0];
          
//           ctrlLeft.addEventListener("click", function() {
//               slideLeft();
//           });
//           ctrlRight.addEventListener("click", function() {
//               slideRight();
//           });
      
//           touchOverlay = slider.getElementsByClassName("c-slider__container__overlay")[0];
      
//           touchOverlay.addEventListener("mousedown", dragStart);
//           touchOverlay.addEventListener("mouseup", dragEnd);
//           touchOverlay.addEventListener("mousemove", drag);
//           touchOverlay.addEventListener("mouseleave", dragLeave);
      
//           touchOverlay.addEventListener("touchstart", dragStart);
//           touchOverlay.addEventListener("touchend", dragEnd);
//           touchOverlay.addEventListener("touchmove", drag);
      
//           sliderContainer = slider.getElementsByClassName("c-slider__container")[0];
//           slides = sliderContainer.getElementsByClassName("c-slider__container__slides")[0];
//           cards = slides.getElementsByClassName("c-slider__container__slides__card");
      
//           if (slider.dataset.flexible = "false") {
//               initial();
//               for (j = (cards.length - 1); j >= 0; j--) {
//                   card = cards[j];
//                   card.style.minWidth = (slider.offsetWidth / displayCount) - marginRight + "px";
//               }
//           } else { console.log("not flexible"); }

//           lastSlideIndex = displayCount - 1;
//           cards[lastSlideIndex].classList.add("c-slider__container__slides__card--active");

//           if (!html.dir) {
//               ctrlLeft.classList.add("c-slider__controls--hide");
//               ctrls.classList.add("c-slider__controls--noLeft");
//           } else if (html.dir == "rtl") {
//               ctrlRight.classList.add("c-slider__controls--hide");
//               ctrls.classList.add("c-slider__controls--noRIght");
//           }
//       }        
//   }

//   function slideRight(dragCount) {
//       if (!dragCount) dragCount = 1;
      
//       ctrlLeft.classList.remove("c-slider__controls--hide");
//       ctrls.classList.remove("c-slider__controls--noLeft");
      
//       // how many should slide
//       var width = dragCount * (parseInt(card.style.minWidth, 10) + marginRight); 
      
//       if (!remainingChangeSet) {
//           remainingChangeSet = true;
//           remaining = (cards.length - (lastSlideIndex + 1)) * (parseInt(card.style.minWidth, 10) + marginRight);
//       }
      
//       //if the current position moved is greater than the remaining card widths, then make it equal to the remaining card widths.
//       if ((currentPos + width) > remaining) {
//           currentPos = remaining;
//       } else {
//           currentPos += width;
//       }
  
//       // slides.scrollTo(currentPos + width, 0);
//       slides.scrollTo(currentPos, 0);
      
//       cards[lastSlideIndex].classList.remove("c-slider__container__slides__card--active");

      
//       for (i = (dragCount - 1); i >=0; i--) {
//           lastSlideIndex++
//       }
//       if (lastSlideIndex >= cards.length) {
//           lastSlideIndex = cards.length - 1;
//       }
  
//       cards[lastSlideIndex].classList.add("c-slider__container__slides__card--active");
//       if (cards[lastSlideIndex] == cards[cards.length - 1]) {
//           ctrlRight.classList.add("c-slider__controls--hide");
//           ctrls.classList.add("c-slider__controls--noRight");
//       }
//   }

//   function slideLeft(dragCount) {
//       if (!dragCount) dragCount = 1;
  
//       ctrlRight.classList.remove("c-slider__controls--hide");
//       ctrls.classList.remove("c-slider__controls--noRight");
//       var width = dragCount * (parseInt(card.style.minWidth, 10) + marginRight);


//       // if the current position moved is greater than the remaining card widths, then make it equal to the remaining card widths.
//       if ((currentPos - width) <= 0) {
//           currentPos = 0;
//       } else {
//           currentPos -= width;
//       }  

//       slides.scrollTo(currentPos,0);

//       cards[lastSlideIndex].classList.remove("c-slider__container__slides__card--active");
  
//       for (i = (dragCount - 1); i >=0; i--) {
//           lastSlideIndex--;
//       }
//       if (lastSlideIndex <= displayCount - 1) {
//           lastSlideIndex = displayCount - 1;
//       }
  
//       cards[lastSlideIndex].classList.add("c-slider__container__slides__card--active");
//       if (cards[lastSlideIndex] == cards[displayCount - 1]) {
//           ctrlLeft.classList.add("c-slider__controls--hide");
//           ctrls.classList.add("c-slider__controls--noLeft");
//       }
//   }

//   var startMousePosX;
//   var endMousePosX;

//   function dragStart(e) { 
//   if (e.type == 'touchstart') {
//       startMousePosX = parseInt(e.changedTouches[0].clientX);
//   } else {
//       startMousePosX = e.pageX;
//   }
//   isDown = true;
//   };

//   function dragEnd(e) {
//       isDown = false;
//       if (e.type == 'touchend') {
//           endMousePosX = parseInt(e.changedTouches[0].clientX);
//       } else {
//           endMousePosX = e.pageX;
//       }
  
//       var diffVal = Math.abs(endMousePosX - startMousePosX);
//       if (diffVal > 0) {
//           if (endMousePosX > startMousePosX) {
//               slideLeft(displayCount);
//           } else {
//               slideRight(displayCount);
//           }
//       }
//   };

//   function drag(e) {
//       if(!isDown) return;
//       e.preventDefault();
//   };

//   function dragLeave() {
//       isDown = false;
//   }

//   function initial() {
//       setSize();
//       window.addEventListener('resize', setSize);
//   }

//   function setSize() {
//       ctrlRight.classList.remove("c-slider__controls--hide");
//       ctrlLeft.classList.remove("c-slider__controls--hide");
//       ctrls.classList.remove("c-slider__controls--noRight");
//       ctrls.classList.remove("c-slider__controls--noLeft");

//       if (!html.dir) {
//           ctrlLeft.classList.add("c-slider__controls--hide");
//           ctrls.classList.add("c-slider__controls--noLeft");
//       } else if (html.dir == "rtl") {
//           ctrlRight.classList.add("c-slider__controls--hide");
//           ctrls.classList.add("c-slider__controls--noRIght");
//       }
      
//       windowSize = window.innerWidth;
//       slides.scrollTo(0,0);
//       currentPos = 0;
  
//       switch (true) {
//           case (windowSize < screenMD):
//           if (displayCount != dspSM) displayCount = dspSM;
//               break;
//           case ((screenMD < windowSize) && (windowSize < screenLG)):
//               if (displayCount != dspMD) displayCount = dspMD;
//                   break;
//           case (screenLG < windowSize):
//               if (displayCount != dspLG) displayCount = dspLG;
//                   break;
//       }
  
//       remainingChangeSet = false;
//       remaining = 0;
  
//       for (j = (cards.length - 1); j >= 0; j--) {
//           card = cards[j];
//           card.style.minWidth = (slider.offsetWidth / displayCount) - marginRight + "px";
//           card.classList.remove("c-slider__container__slides__card--active");
//       }
  
//       //reset
//       lastSlideIndex = displayCount - 1;
//       cards[lastSlideIndex].classList.add("c-slider__container__slides__card--active");
//   }
//   // -- register slider class
//   this.Rexus.slider = new Slider();
// })();
