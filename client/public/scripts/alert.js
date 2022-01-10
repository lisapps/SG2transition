(function() {

      // Variables
      var   overlay = getId('alertOverlay'),
            modal = getId('alertModal'),
            body = document.getElementsByTagName("body")[0],
            allNodes = document.querySelectorAll("input, button, a"),
            isModalOpen = false,
            xBtn,
            lastFocus;

      // Close [x] Switch: False = No Close Btn & Overlay clicking doesn't close
      // Use data-close="1" on overlay to activate
      if(overlay){
            if(overlay.dataset.close == 1) var hasCloseX = true;
            else var hasCloseX = false;
      }

      // Simplified Get Id
      function getId ( id ) { return document.getElementById(id); }

      // Open the modal
      function modalShow () {
            lastFocus = document.activeElement;
            body.classList.add('scroll-disabled');
            isModalOpen = true;
            modal.setAttribute('tabindex', '0');
            modal.focus();
            if(overlay){
                  overlay.setAttribute('aria-hidden', 'false');
            }
      }

      function createCloseBtn(){
            var   _xBtn = document.createElement("button"),
                  _xSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='14.7' height='14.72' viewBox='0 0 14.7 14.72'><polygon points='10.91 10.47 7.78 7.34 10.91 4.22 10.48 3.79 7.36 6.92 4.23 3.79 3.8 4.22 6.93 7.34 3.8 10.47 4.23 10.89 7.36 7.77 10.48 10.89 10.91 10.47' style='fill:#fff'/></svg>";
            _xBtn.innerHTML = _xSvg;
            _xBtn.setAttribute("id", "alertClose");
            _xBtn.setAttribute("class", "c-alert__close e-btnClose");
            _xBtn.setAttribute("type", "button");
            _xBtn.setAttribute("aria-label", "Close Modal");
            return _xBtn;
      }

      // Binds to both the button click and the escape key to close the modal window
      // but only if modalOpen is set to true
      function modalClose ( event ) {
            if (isModalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
                  body.classList.remove('scroll-disabled');
                  modal.setAttribute('tabindex', '-1');
                  isModalOpen = false;
                  lastFocus.focus();
                  if(overlay){
                        overlay.setAttribute('aria-hidden', 'true');
                  }
            }
      }

      // Restrict focus to the modal window when it's open.
      // Tabbing will just loop through the whole overlay.
      // Shift + Tab will allow backup to the top of the modal,
      // and then stop.
      function focusRestrict ( event ) {
            document.addEventListener('focus', function( event ) {
                  if ( isModalOpen && !overlay.contains( event.target ) ) {
                        event.stopPropagation();
                        modal.focus();
                  }
            }, true);
      }

      // Show Modal
      modalShow();

      // Restrict tab focus on elements only inside modal window
      for (i = 0; i < allNodes.length; i++) {
            allNodes.item(i).addEventListener('focus', focusRestrict);
      }

      // CLOSE [x] RELATED 
      if(hasCloseX){
            // Create close X button
            xBtn = createCloseBtn();
            modal.insertBefore( xBtn, modal.childNodes[0]);

            // Close modal window by clicking on the overlay
            if(overlay){
                  overlay.addEventListener('click', function( e ) {
                        if (e.target == modal.parentNode) {
                              modalClose(e);
                        }
                  }, false);
            }

            // Close modal via [x] btn click
            xBtn.addEventListener('click', modalClose);

            // Close modal by keydown, but only if modal is open
            document.addEventListener('keydown', modalClose);
      }
})();