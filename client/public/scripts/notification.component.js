(function() {

    var _ajax = window.Rexus.ajax;
    var nSvgBG;
    // ### CONSTRUCTOR ### //
    function Notification() {

        //put all notifications in an array
        var notifications = document.getElementsByClassName("c-notification");

        for (i = (notifications.length - 1); i >= 0; i--) {
            var notification = notifications[i];
            var closeBtn = notification.getElementsByClassName("c-notification__close")[0];
            closeBtn.addEventListener("click", closeNotification);

            nSvgBG = notification.getElementsByClassName("c-notification__bg")[0];
            if (notification.dataset.bg) {
                _ajax.getData({
                    "url": notification.dataset.bg
                }, appendSvgBG);                
            }
        }
    }


    // ### PUBLIC METHODS ### //


    // ### PRIVATE METHODS ### //
    function closeNotification() {
        this.parentNode.classList.add("c-notification--close");
    }

    function appendSvgBG(svg) {
        nSvgBG.innerHTML = svg;
    }

    // -- register notification class
    this.Rexus.notification = new Notification();
})();
