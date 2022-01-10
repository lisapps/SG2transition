(function($) {

    var isRTL = false; // Should be changed to detect RTL on load

    // RTL METHOD
    function Endorsements() {
        // -- do nothing
    }

    Endorsements.prototype.toggleRTL = function() {
        var a = slickRegistries.length-1;
        isRTL = !isRTL;
        for(a; a>=0; a--) {
            _slick = slickRegistries[a];
            _slick.slick("slickSetOption", { rtl:isRTL, refresh:true });
        }
    }

    this.Rexus.endorsements = new Endorsements();

    var slickRegistries = [];
    function registerSlick(slick) {
        slickRegistries.push(slick);
    }

    var cSliderCards = document.querySelectorAll(".c-slider__card");
    if(cSliderCards.length>3) {
        cSliderCards[0].parentNode.classList.add("c-slider--slick");
        var _slick = $(".s-endorsements .c-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: ".c-slider__controls__left",
            nextArrow: ".c-slider__controls__right",
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        registerSlick(_slick);
    }   
})(jQuery);