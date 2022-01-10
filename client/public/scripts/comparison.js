//KCMS.registerNamespace("KCMS.Comparison");
//KCMS.Comparison = (function ($) {
(function($) {
    var initialize = function (selector) {
        var removedClass = "removed";
        var section = $(selector);
        var header = $(".scroller .value-row:first", section);
        var footer = $(".scroller .value-row:last", section);
        var valueTable = $(".scroller .value-table", section);
        var headerPlaceholder = $("<div></div>");
        var scrollLeft = $(".comparision-inner .scroll-left", section);
        var scrollRight = $(".comparision-inner .scroll-right", section);
        scrollLeft.addClass("disabled");
        headerPlaceholder.insertAfter(header);
        var isMobile = false;
        function resetFilterItemWidth() {
            section.each(function () {
                var mobileFilterItem = $(".filter-item", this);

               
                if ($(".scroller .value-table", this).width() > $(".scroller", this).width()) {
                    $(".scroll,.value-table.cover", this).removeClass("noscroll");
                } else {
                    $(".scroll,.value-table.cover", this).addClass("noscroll");
                }
                var rows = $(".filter-values .scroller .value-row:not(.filter-xs)");
                $(".value-table.cover .value-row", section).each(function (i) {
                    if (i < rows.size()) {
                        var height = $(rows[i]).height();
                        if (height !== $(this).height()) {
                            $(this).height(height);
                        }

                    }
                });
                isMobile = mobileFilterItem.is(":visible");
                if (!isMobile && header.hasClass("fix-title")) {
                    headerPlaceholder.height(0);
                    header.removeClass("fix-title");
                    var scrollLeft = $(this).scrollLeft();
                    if (scrollLeft > 0) {
                        header.css("left", -scrollLeft);
                    } else {
                        header.css("left", "");
                    }
                }
            });
            scrollRight.removeClass("disabled");
        }

        resetFilterItemWidth();
        var columns = $(".comparision-btn.remove", section);
        if (columns.size() <= 2) {
            columns.addClass("disabled");
        }
        section.on("click", ".comparision-btn", function () {
            var comparisionBox = $(this).closest(".comparision-box");
            $(".last", comparisionBox).removeClass("last");
            if ($(this).hasClass("remove")) {
                var visiables = $(this).siblings(".comparision-item:not(." + removedClass + ")").size();
                if (visiables > 2) {
                    $(".value-row:not(.cover)", comparisionBox).find(".comparision-item:eq(" + $(this).index() + ")").addClass(removedClass);

                    $(".scroller .value-row", comparisionBox).each(function() {
                        $(".comparision-item:not(.filter-sm):not(." + removedClass + "):last", this).addClass("last");
                    });
                }
                if (visiables <= 3) {
                    $(".value-row:not(.cover)", comparisionBox).find(".comparision-item:not(.reset)").addClass("disabled");
                }
            } else if ($(this).hasClass("reset")) {
                if (columns.size() > 2) {
                    $(".comparision-item", $(this).closest(".comparision-box")).removeClass(removedClass).removeClass("disabled");
                }
            }
            resetFilterItemWidth();
        }).on("click", ".comparision-inner .scroll-left,.comparision-inner .scroll-right", function () {

            var box = $(this).closest(".comparision-box");
            var scroller = $(".filter-values .scroller", box);
            var item = $(".comparision-item:not(.filter-sm):first", box);
            var width = item.width() + parseInt(item.css("margin-right"));
            if ($(this).hasClass("scroll-left")) {
                width = 0 - width;
            }
            scroller.animate({ scrollLeft: scroller.scrollLeft() + width }, 200);
        }).on("click", ".comparision-inner .scroll .reset", function () {
            $(".value-table.cover .comparision-item.reset", $(this).closest(".comparision-box")).trigger("click");
        });
        
        var offsetTop = null;
        var maxOffsetTop = null;
        $(window).scroll(function () {
            if (isMobile) {
                offsetTop = valueTable.offset().top;
                maxOffsetTop = footer.offset().top;
                
                var scrollTop = $(this).scrollTop();
                if (scrollTop < maxOffsetTop && offsetTop < scrollTop && !header.hasClass("fix-title")) {
                    headerPlaceholder.height(header.outerHeight());
                    header.addClass("fix-title");
                } else if ((scrollTop > maxOffsetTop && header.hasClass("fix-title")) || scrollTop <= offsetTop) {
                    headerPlaceholder.height(0);
                    header.removeClass("fix-title");
                }
            }
        });
        $(".scroller", section).scroll(function () {
            var left = $(this).scrollLeft();
            if (left > 0) {
                header.css("left", -left);
            } else {
                header.css("left", "");
            }
            if (left === 0) {
                scrollLeft.addClass("disabled");
            } else if(scrollLeft.hasClass("disabled")) {
                scrollLeft.removeClass("disabled");
            }
            if (left + $(this).width() === $(this).prop("scrollWidth")) {
                scrollRight.addClass("disabled");
            } else {
                scrollRight.removeClass("disabled");
            }
        });

        //us scroll event to simulate resize event (font size may changed on font load so the size may changed)
        var resizeSensor = document.createElement('div');
        resizeSensor.className = 'resize-sensor';
        var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
        var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

        resizeSensor.style.cssText = style;
        resizeSensor.innerHTML =
            '<div class="resize-sensor-expand" style="' + style + '">' +
                '<div style="' + styleChild + '"></div>' +
            '</div>' +
            '<div class="resize-sensor-shrink" style="' + style + '">' +
                '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
            '</div>';
        valueTable.append(resizeSensor);

        var expand = resizeSensor.childNodes[0];
        var expandChild = expand.childNodes[0];
        var shrink = resizeSensor.childNodes[1];

        var reset = function () {
            expandChild.style.width = '100000px';
            expandChild.style.height = '100000px';
            expand.scrollLeft = 100000;
            expand.scrollTop = 100000;
            shrink.scrollLeft = 100000;
            shrink.scrollTop = 100000;
        };

        reset();

        var resizeTimeSpan = 0;
        $(".resize-sensor-expand,.resize-sensor-shrink",section).on("scroll", function () {
            clearTimeout(resizeTimeSpan);
            resizeTimeSpan = setTimeout(resetFilterItemWidth, 300);
            reset();
        });
    }
    initialize('#comparison');
})(jQuery);