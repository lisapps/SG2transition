KCMS.registerNamespace("KCMS.AddToCart");
KCMS.AddToCart = function(n) {
    function r(n) {
        var i, r, t, u;
        for (n = n || location.search.substring(1), i = n.split("&"), r = {}, t = 0; t < i.length; t++) i[t] != "" && (u = i[t].split("="), r[u[0]] = decodeURI(u[1]));
        return r }

    function t(n) { n = encodeURI(n);
        var t = r();
        return t.hasOwnProperty(n) ? t[n] : "" }

    function u(n, t, i) {
        var f, u, e, t;
        t = encodeURI(t);
        f = n.split("?");
        n = f[0];
        u = r(f.length > 1 ? f[1] : "");
        u[t] = i;
        e = "";
        for (t in u) u.hasOwnProperty(t) && (e += "&" + t + "=" + encodeURI(u[t]));
        return n + "?" + e.substring(1) }
    var i = { Partnumber: "Partnumber", Filter: "Filter" };
    return { initialize: function(r, f, e) {
            function w(n) {
                for (var i, r, u, t = 0; t < f.Filters.length; t++)
                    if (i = f.Filters[t], i.Items)
                        for (r = 0; r < i.Items.length; r++)
                            if (u = i.Items[r], u.ID == n) return u.PartNumbers;
                return [] }

            function ft(t) {
                var i, r, e, f, u;
                if (t.Items) { i = s.samePartNumbers || s.selectedPartNumbers;
                    r = [];

                    function h(n) {
                        for (var f = !1, u = 0; u < i.length; u++) n.PartNumbers.indexOf(i[u]) >= 0 && (r.indexOf(i[u]) < 0 && r.push(i[u]), t.ID == 0 && s.mostPartNumbers.length < n.PartNumbers.length && (s.mostPartNumbers = n.PartNumbers), f = !0);
                        return f }
                    if (e = !1, n("input:checked", o.find("#g_" + t.ID)).each(function() {
                            var t = w(n(this).val());
                            h({ ID: n(this).val(), PartNumbers: t }) ? e = !0 : n(this).prop("checked", !1) }), !e)
                        for (f = 0; f < t.Items.length; f++)
                            if (u = t.Items[f], u.ID != s.id && u.PartNumbers.length > 0 && h(u)) { n("#v_" + u.ID + ":not(checked)", o.find("#g_" + t.ID)).prop("checked", !0);
                                break }
                    r.length > 0 && (s.samePartNumbers = r) } }

            function et(t) {
                if (n(".atc-selections-list", o).each(function() { n(this).removeClass("hidden").prev().find(".defaulttag-text").addClass("hidden") }), t && f.DefaultTags) {
                    var i = _.where(f.DefaultTags, { PartNumber: t.toUpperCase() });
                    _.each(i, function(t) {
                        var i = n("#g_" + t.ID, o),
                            r;
                        i.length > 0 && !i.is(".hidden") && (r = n("label[data-for='v_" + t.VID + "']", o).first().text().trim(), i.addClass("hidden").prev().find(".defaulttag-text").removeClass("hidden").find(".text").text(r)) }) } }

            function ot(n) {
                var t = [],
                    i = _.filter(f.ProductImages, { PartNumber: n });
                return _.each(i, function(n) { t = _.union(t, n.Images) }), t }

            function rt() { n(".act-image-current span.zoom, \t\t\t\t\t.act-image-current img, \t\t\t\t\t.act-image-thumbnails li a.atc-video, \t\t\t\t\t.atc-mediaplay ul.thumblist li a, \t\t\t\t\t.slidesjs-slide svg.icon-zoomin, \t\t\t\t\t.slidesjs-slide img, \t\t\t\t\t.slidesjs-slide a.atc-video", c).mediaplay({ showThumbsBar: !0, showZoom: !0, fillFullScreen: !0, playlistSelector: ".act-image-thumbnails li" }) }

            function st(t) {
                var r = ot(t),
                    i = function(n) {
                        return n ? n : "" },
                    f = function(n, t) {
                        var e = i(n.ImageType) == 2,
                            h = i(n.URL),
                            o = i(n.SmallURL),
                            c = i(n.MediumURL),
                            l = i(n.ZoomURL),
                            a = i(n.ZoomURL2),
                            r = window.screen.width > 1400 ? a : l,
                            s = i(n.VideoPlayUrl),
                            u = i(n.AltText),
                            f = i(n.AltTitle),
                            v = function() {
                                var n = [];
                                return n.push("<div>"), e ? (n.push('<img src="' + o + '" alt="' + u + '" title="' + f + '"/>'), n.push('<a class="atc-video" href="javascript:void(0)" data-playsource="' + s + '">'), n.push('<svg><use xlink:href="/Themes/HyperX/Styles/images/icons/icon-map.svg#play" /><\/svg>'), n.push("<\/a>")) : r ? (n.push('<img data-playsource="' + r + '" src="' + o + '" alt="' + u + '" title="' + f + '"/>'), n.push('<svg class="icon-zoomin" role="img" title="zoom in" data-playsource="' + r + '" >\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href="/Themes/HyperX/Styles/images/icons/Zoom-In Icon.svg#zoomin" />\t\t\t\t\t\t\t\t\t\t\t\t<\/svg>')) : n.push('<img src="' + o + '" alt="' + u + '" title="' + f + '"/>'), n.push("<\/div>"), n.join("") },
                            y = function() {
                                var n = [];
                                return e ? n.push('<a class="atc-video" href="javascript:void(0)" data-playsource="' + s + '">') : n.push('<a href="javascript:void(0)" data-mediumurl="' + c + '" data-zoomurl="' + r + '" data-playsource="' + r + '" data-alttext="' + u + '" data-alttitle="' + f + '">'), n.push('<img src="' + h + '" alt="' + u + '" title="' + f + '"/>'), e && n.push('<svg><use xlink:href="/Themes/HyperX/Styles/images/icons/icon-map.svg#play" /><\/svg>'), n.push("<\/a>"), n.join("") };
                        return t ? v() : y() },
                    e = function(n) {
                        if (!r || r.length === 0) return "";
                        var t = [];
                        return _.each(r, function(i) { n ? t.push(f(i, n)) : (t.push("<li>"), t.push(f(i)), t.push("<\/li>")) }), t.join("") },
                    u = n(".atc-images", c),
                    o = n(".act-image-slides .act-image-slides-inner", u),
                    s = n(".act-image-thumbnails ul", u),
                    h, l;
                n(".act-image-current", u).empty();
                h = n(e(!0));
                l = n(e());
                n(h).appendTo(o.empty());
                o.removeData("plugin_slidesjs").slidesjs({ width: 500, height: 440 });
                r.length == 1 && n(".slidesjs-navigation,.slidesjs-pagination", u).addClass("hidden");
                n(l).appendTo(s.empty());
                n("li:not(:has(a.atc-video)):first", s).trigger("click");
                rt() }

            function ut(t) {
                var r = n("a.pdf", c),
                    u, e, i;
                r.addClass("hide");
                t ? (t.PDF && f.ShowPDF && (r.removeClass("hide"), r.attr("href", r.data("href") + t.PDF + (t.PDF.toLocaleLowerCase().indexOf(".pdf") >= 0 ? "" : ".pdf"))), u = "productBuyBoxBuy", n.each(KCMS.Tracking.TrackingData, function(n, t) {
                    var i = KCMS.Tracking.GetSelector(t.TargetID, t.TargetClass, t.TargetHref);
                    if (i.indexOf("productBuyBoxBuy") >= 0) return u += " hasTracking", !1 }), e = !1, t.KingStonVendor ? (l.attr("href", t.KingStonVendor.Url).removeClass("hide"), it.show(), tt.hide()) : (l.addClass("hide"), it.hide(), tt.show()), t.OtherVendor && (i = [], n.each(t.OtherVendor, function(n, t) { e ? i.push("<li><a onclick='" + (t.OnClickEvent || "") + "' class='tracked " + u + "' data-track-category='Add To Cart' data-track-action='Products' data-track-label='" + t.TrackLabel + "' href='" + KCMS.url.content(t.Url) + "' target='_blank'><img src='" + t.HyperXLogoImageName + "'/><\/a><\/li>") : i.push("<li><a onclick='" + (t.OnClickEvent || "") + "' class='tracked " + u + "' data-track-category='Add To Cart' data-track-action='Products' data-track-label='" + t.TrackLabel + "' href='" + KCMS.url.content(t.Url) + "' target='_blank'><img src='" + t.GeneralLogoImageName + "'/><\/a><\/li>") }), i.length > 0 ? (a.removeClass("hide"), nt.html(i.join(""))) : l.hasClass("hide") && b.removeClass("hide")), t.Price && (t.Price.Discount < t.Price.Cost ? k.html('<p class="price-cost">' + t.Price.PricySymbol + t.Price.Cost + '<\/p><p class="price-discount">' + t.Price.PricySymbol + t.Price.Discount + '<\/p><p class="price-save">save ' + t.Price.Save + "%<\/p>") : k.html('<p class="price-discount">' + t.Price.PricySymbol + t.Price.Cost + "<\/p>"))) : (l.addClass("hide"), b.removeClass("hide")) }
            for (var y, p, v, h, g, c = n(r), o = n(".atc-selections", c), s = { id: 0, mostPartNumbers: [], selectedPartNumbers: [], samePartNumbers: [], whereToBuyResultCache: {} }, l = n("#add-to-cart", o), b = n("#where-to-buy", o), k = n(".price-info", o), a = n(".partners", o), nt = n(".verdorList", a), tt = n("#others", a), it = n("#with-others", a), d = 0; d < f.Filters.length; d++)
                if (y = f.Filters[d], y.Items)
                    for (p = 0; p < y.Items.length; p++) h = y.Items[p], h.PartNumbers && h.PartNumbers.length == 0 && n("#v_" + h.ID, o).prop("disabled", !0);
            c.on("click", ".act-image-thumbnails li", function() {
                var r = n(".act-image-current", c),
                    t = n("a", this),
                    i;
                return t.is(".atc-video") ? !1 : (i = [], t.data("zoomurl") ? (i.push('<span class="zoom" data-playsource="' + t.data("zoomurl") + '"><svg><use xlink:href="/Themes/HyperX/Styles/images/icons/Zoom-In%20Icon.svg#zoomin" /><\/svg><\/span>'), i.push('<img style="cursor:pointer;" data-playsource="' + t.data("zoomurl") + '" src="' + t.data("mediumurl") + '" alt="' + t.data("alttext") + '" title="' + t.data("alttitle") + '"/>')) : i.push('<img src="' + t.data("mediumurl") + '" alt="' + t.data("alttext") + '" title="' + t.data("alttitle") + '"/>'), n(i.join("")).appendTo(r.empty()), rt(), !0) });
            o.on("click", "input[type=radio].radio-button", function() {
                var g, y, h, v, p, d, r;
                for (n(this).prop("checked", !0), l.addClass("hide"), b.addClass("hide"), nt.html(""), a.addClass("hide"), k.html(""), g = n(this).val(), y = w(g), s.id = g, s.selectedPartNumbers = y, s.mostPartNumbers = [], h = [], v = 0; v < s.samePartNumbers.length; v++) s.selectedPartNumbers.indexOf(s.samePartNumbers[v]) >= 0 && h.push(s.samePartNumbers[v]);
                if (h.length == 0 && (h = s.selectedPartNumbers), s.samePartNumbers = h, y != null && y.length > 0) {
                    for (p = 0; p < f.Filters.length; p++) ft(f.Filters[p]);
                    f.DisableStyle && (d = null, o.find(".atc-selections-list").each(function() {
                        if (d != null) {
                            var t = [];
                            n("input:checked", d).each(function() {
                                var i = w(n(this).val());
                                n.each(i, function(n, i) { t.indexOf(i) < 0 && t.push(i) }) });
                            n("input[type=radio]", this).each(function() {
                                var u, r, i;
                                if (n(this).prop("checked")) n(this).attr("mark-disabled", !1);
                                else {
                                    for (u = w(n(this).val()), r = !0, i = 0; i < t.length; i++)
                                        if (u.indexOf(t[i]) >= 0) { r = !1;
                                            break }
                                    n(this).attr("mark-disabled", r) } }) }
                        d = this })) }
                r = s.samePartNumbers.join(";");
                st(r);
                n(".atc-skew", o).html(r);
                s.whereToBuyResultCache[r] != null ? ut(s.whereToBuyResultCache[r]) : (s.whereToBuyResultCache[r] = !1, n.getJson(e.addToCartUrl, { kingstonPN: r, campaignCode: t("ktc_campaign"), productCategory: e.productCategory, productSubCategory: e.productSubCategory, referrer: document.referrer }, "POST", function(n) { n && n.kingstonPN && (s.whereToBuyResultCache[n.kingstonPN] = n);
                    ut(n) }, !0));
                et(r);
                c.data("changeHash") && setTimeout(function() {
                    var e = location.href.split("#")[0];
                    f.ParameterOption == i.Partnumber || t("partnum") != "" ? e = u(e, "partnum", r) : f.ParameterOption == i.Filter && n("input[type=radio]:not(:disabled):checked", o).each(function() { e = u(e, n(this).data("name"), n(this).data("value")) });
                    history && history.pushState ? history.pushState({ title: document.title }, document.title, e) : window.location.href.search = e }, 100);
                c.data("changeHash", !0) });
            o.on("click", ".radio-button-trigger", function() { n("#" + n(this).data("for"), o).trigger("click") });
            o.on("click", "a.btn-toggletags", function() {
                var t = n(".atc-skew", o).text().trim(),
                    i = n(this).parent().addClass("hidden").parent().next().removeClass("hidden").attr("id").replace("g_", ""),
                    r = _.find(f.DefaultTags, { PartNumber: t, ID: parseInt(i) });
                f.DefaultTags = _.without(f.DefaultTags, r) });
            v = t("partnum");
            v ? (h = null, v = v.toLowerCase(), n.each(f.Filters, function() { n.each(this.Items, function() {
                    for (var t = 0; t < this.PartNumbers.length; t++)
                        if (this.PartNumbers[t].toLowerCase() == v) { h = this;
                            n("input[type=radio]#v_" + h.ID, o).prop("checked", !0);
                            break } }) }), h != null ? n("input[type=radio]#v_" + h.ID, o).prop("checked", !0).trigger("click") : n("input[type=radio]:not(:disabled):first", o).prop("checked", !0).trigger("click")) : (g = n("input[type=radio]:not(:disabled):checked:first", o), g.size() == 0 ? n("input[type=radio]:not(:disabled):first", o).prop("checked", !0).trigger("click") : g.trigger("click")) } } };
