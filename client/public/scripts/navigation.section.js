(function() {
    var navExLinks = document.querySelectorAll(".c-dropDown__toggler[data-href]");
    var navExLink;
    if(navExLinks) {
        for(var i = 0; i < navExLinks.length; i++) {
            navExLink = navExLinks[i];
            navExLink.addEventListener("click", navExClick);
        }
    }
    function navExClick(e) {
        console.log('click');
        var href = this.dataset.href;
        if(window.innerWidth < 767) {
            this.nextElementSibling.style.display = "none";
            window.location.href = href;
        }
    }
})();