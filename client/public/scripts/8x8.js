(function(JSON) {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt) {
            var len = this.length >>> 0,
                from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0) {
                from += len
            }
            for (; from < len; from++) {
                if (from in this && this[from] === elt) {
                    return from
                }
            }
            return -1
        }
    }
    "object" != typeof JSON && (JSON = {}),
        function() {
            function f(t) {
                return 10 > t ? "0" + t : t
            }

            function quote(t) {
                return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }

            function str(t, e) {
                var r, n, o, f, u, p = gap,
                    i = e[t];
                switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) {
                    case "string":
                        return quote(i);
                    case "number":
                        return isFinite(i) ? i + "" : "null";
                    case "boolean":
                    case "null":
                        return i + "";
                    case "object":
                        if (!i) {
                            return "null"
                        }
                        if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                            for (f = i.length, r = 0; f > r; r += 1) {
                                u[r] = str(r, i) || "null"
                            }
                            return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + p + "]" : "[" + u.join(",") + "]", gap = p, o
                        }
                        if (rep && "object" == typeof rep) {
                            for (f = rep.length, r = 0; f > r; r += 1) {
                                "string" == typeof rep[r] && (n = rep[r], o = str(n, i), o && u.push(quote(n) + (gap ? ": " : ":") + o))
                            }
                        } else {
                            for (n in i) {
                                Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i), o && u.push(quote(n) + (gap ? ": " : ":") + o))
                            }
                        }
                        return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + p + "}" : "{" + u.join(",") + "}", gap = p, o
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "    ": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, r) {
                var n;
                if (gap = "", indent = "", "number" == typeof r) {
                    for (n = 0; r > n; n += 1) {
                        indent += " "
                    }
                } else {
                    "string" == typeof r && (indent = r)
                }
                if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) {
                    throw Error("JSON.stringify")
                }
                return str("", {
                    "": t
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var r, n, o = t[e];
                    if (o && "object" == typeof o) {
                        for (r in o) {
                            Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n : delete o[r])
                        }
                    }
                    return reviver.call(t, e, o)
                }
                var j;
                if (text += "", cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                        "": j
                    }, "") : j
                }
                throw new SyntaxError("JSON.parse")
            })
        }();
    var EmbeddedChat = {};
    EmbeddedChat.SHARED_ALIAS = "/shared";
    EmbeddedChat.CHAT_PATH = "/CHAT";
    EmbeddedChat.COMMON_PATH = "/common";
    EmbeddedChat.ERROR_FLAG = "8x8Chat";
    EmbeddedChat.POPUP_WINDOW_NAME_PREFIX = "8x8EmbeddedChatPopup";
    EmbeddedChat.MAX_CO_BROWSING_INSTANCE_CHECK_TRIES = 10;
    EmbeddedChat.logLevel = "debug";
    EmbeddedChat.logList = ["debug", "info", "warn", "error"];
    EmbeddedChat.logLevelIndex = EmbeddedChat.logList.indexOf(EmbeddedChat.logLevel);
    EmbeddedChat.containerProperties = {
        width: "334px",
        height: {
            closed: "0",
            minimized: "50px",
            invitationOpen: "260px",
            open: "330px"
        },
        left: "20px",
        right: "20px"
    };
    EmbeddedChat.windowProperties = EmbeddedChat.containerProperties;
    EmbeddedChat.bus = (function() {
        var topics = {};
        return {
            subscribe: function(topic, listener) {
                if (!topics[topic]) {
                    topics[topic] = {
                        listeners: []
                    }
                }
                var index = topics[topic].listeners.push(listener) - 1;
                return {
                    remove: function() {
                        delete topics[topic].listeners[index]
                    }
                }
            },
            publish: function(topic, info) {
                if (!topics[topic] || !topics[topic].listeners.length) {
                    return
                }
                var listeners = topics[topic].listeners;
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (typeof listeners[i] === "function") {
                        try {
                            listeners[i](info)
                        } catch (e) {
                            EmbeddedChat.log("error", e.message)
                        }
                    }
                }
            }
        }
    })();
    EmbeddedChat.start = function() {
        this.config = window.__8x8Chat;
        if (this.checkValid()) {
            this.checkPlatformAndConfigure()
        } else {
            EmbeddedChat.log("error", "Can't load - Invalid parameters")
        }
    };
    EmbeddedChat.checkPlatformAndConfigure = function() {
        EmbeddedChat.checkPlatform(function() {
            EmbeddedChat.configure()
        })
    };
    EmbeddedChat.configure = function() {
        this.configureMessage();
        this.container = this.createContainer();
        this.iframe = this.createIFrame();
        if(this.config.targetContainerId)
            this.attachToFrame(this.container, this.iframe);
        else
            this.appendToBody(this.container, this.iframe)
    };
    EmbeddedChat.onCommunicationEstablished = function(config) {
        EmbeddedChat.log("info", "Communication established to", (config && config.isPopup ? "Popup" : "IFrame"))
    };
    EmbeddedChat.checkValid = function() {
        var valid = window.__8x8Chat && this.config && this.config.uuid && this.config.tenant && this.config.domain && this.config.channel && this.config.align;
        if (valid) {
            if (this.config.busHandlerURL && typeof this.config.busHandlerURL != "string") {
                valid = false
            } else {
                if (this.config.busHandlerURL && this.config.busHandlerURL.toLowerCase().indexOf("https:") !== 0) {
                    valid = false
                } else {
                    if (this.config.stylesheetURL && typeof this.config.stylesheetURL != "string") {
                        valid = false
                    } else {
                        if (this.config.stylesheetURL && this.config.stylesheetURL.toLowerCase().indexOf("https:") !== 0) {
                            valid = false
                        }
                    }
                }
            }
        }
        return valid
    };
    EmbeddedChat.configBrokerListener = function(event) {
        try {
            var message = JSON.parse(event.data)
        } catch (e) {
            EmbeddedChat.log("error", "Failed to parse event data: " + e.message)
        }
        var type = message && message.type;
        switch (type) {
            case "_8x8ChatReady":
                var query = [];
                query.push("action=checkPlatform");
                query.push(["tenant", encodeURIComponent(this.config.tenant)].join("="));
                query.push(["channel", encodeURIComponent(this.config.channel)].join("="));
                query.push(["script", encodeURIComponent(this.config.uuid)].join("="));
                var src = this.getURL("chat") + "/chat.php?" + query.join("&");
                event.source.postMessage(JSON.stringify({
                    url: src
                }), "*");
                break;
            case "_8x8ChatConfig":
                try {
                    EmbeddedChat.checkPlatformScriptLoaded(JSON.parse(message.config))
                } catch (e) {
                    EmbeddedChat.log("error", "Failed to parse chat config: " + e.message)
                }
                break;
            default:
                EmbeddedChat.log("debug", "Unsuported type: " + type)
        }
    }.bind(EmbeddedChat);
    EmbeddedChat.checkPlatform = function(callback) {
        EmbeddedChat.checkPlatformCallback = callback;
        EmbeddedChat.__8x8ChatConfigBrokerFrame = EmbeddedChat.createConfigBrokerIFrame();
        window.addEventListener("message", EmbeddedChat.configBrokerListener, true)
    };
    EmbeddedChat.removeConfigBroker = function() {
        if (EmbeddedChat.__8x8ChatConfigBrokerFrame) {
            window.removeEventListener("message", EmbeddedChat.configBrokerListener, true);
            EmbeddedChat.__8x8ChatConfigBrokerFrame.parentNode.removeChild(EmbeddedChat.__8x8ChatConfigBrokerFrame);
            EmbeddedChat.__8x8ChatConfigBrokerFrame = null
        }
    };
    EmbeddedChat.checkPlatformScriptLoaded = function(data) {
        if (data) {
            var platformStatus = this.checkPlatformStatus(data.response);
            this.removeConfigBroker();
            if (platformStatus == "redirect" && !this.platformRedirection) {
                this.redirectPlatform(data.response.data.platformURLRedirect)
            } else {
                if (platformStatus == "redirect") {
                    EmbeddedChat.checkPlatformCallback && EmbeddedChat.checkPlatformCallback()
                } else {
                    if (platformStatus == "ready") {
                        EmbeddedChat.callerIpAddress = data.response.data.callerIPAddress;
                        EmbeddedChat.checkPlatformCallback && EmbeddedChat.checkPlatformCallback()
                    }
                }
            }
        }
    };
    EmbeddedChat.checkPlatformStatus = function(response) {
        var platformStatus;
        if (response && response.status !== undefined) {
            platformStatus = "ready";
            if (response.status == 1) {
                EmbeddedChat.log("error", "Can't load - Internal Server error");
                platformStatus = "error"
            } else {
                if (response.status == 0) {
                    if (!response.data.tenantEnabled) {
                        EmbeddedChat.log("error", "Can't load - Internal Server error");
                        platformStatus = "error"
                    } else {
                        if (response.data.tenantEnabled === "no") {
                            EmbeddedChat.log("error", "Can't load - Tenant disabled");
                            platformStatus = "error"
                        } else {
                            if (response.data.tenantEnabled === "yes") {
                                if (response.data.platformInMaintenance) {
                                    if (response.data.platformURLRedirect) {
                                        EmbeddedChat.log("info", "Platform in maintenance - Redirecting...");
                                        platformStatus = "redirect"
                                    } else {
                                        EmbeddedChat.log("error", "Can't load - Platform in maintenance");
                                        platformStatus = "error"
                                    }
                                }
                                if (!response.data.channelEnabled) {
                                    EmbeddedChat.log("error", "Can't load - Channel " + response.data.channelStatus || "disabled");
                                    platformStatus = "error"
                                }
                            }
                        }
                    }
                }
            }
        }
        return platformStatus
    };
    EmbeddedChat.redirectPlatform = function(redirectUrl) {
        var parsedURL = this.parseURL(redirectUrl);
        if (parsedURL.protocol) {
            this.config.domain = parsedURL.protocol + "://" + parsedURL.domain;
            this.config.path = parsedURL.path;
            this.platformRedirection = true;
            EmbeddedChat.log("debug", "Redirecting to", this.config.domain + this.config.path);
            this.checkPlatformAndConfigure()
        } else {
            EmbeddedChat.log("error", "Can't load - Redirect URL is invalid")
        }
    };
    EmbeddedChat.parseURL = function(url) {
        var parsedURL = {};
        if (typeof url == "string") {
            var urlSplit = url.split("://");
            if (urlSplit.length == 2) {
                parsedURL.protocol = urlSplit[0];
                var remainingUrl = urlSplit[1];
                var remainingUrlSplit = remainingUrl.split("/");
                parsedURL.domain = remainingUrlSplit[0];
                parsedURL.path = "/" + remainingUrlSplit.slice(1).join("/")
            }
        }
        return parsedURL
    };
    EmbeddedChat.createContainer = function() {
        var container = document.createElement("div");
        // container.style.position = "fixed";
        // container.style.bottom = "0";
        // container.style.width = EmbeddedChat.containerProperties.width;
        // container.style.height = EmbeddedChat.containerProperties.height.closed;
        // container.style.overflow = "hidden";
        // container.style.zIndex = "2147483600";
        // container.style.backgroundColor = "transparent";
        // container.style.border = "0";
        if (this.config.align == "left") {
            container.style.left = EmbeddedChat.containerProperties.left
        } else {
            container.style.right = EmbeddedChat.containerProperties.right
        }
        return container
    };
    EmbeddedChat.createIFrame = function() {
        var src = this.getEmbeddedChatURL(false);
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", src);
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = 0;
        iframe.marginHeight = "0";
        iframe.marginWidth = "0";
        iframe.frameBorder = "no";
        return iframe
    };
    EmbeddedChat.createConfigBrokerIFrame = function() {
        var src = this.getURL("static-common") + "/html/config-broker.html";
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", src);
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = 0;
        iframe.style.position = "absolute";
        iframe.style.top = "-10px";
        iframe.style.left = "-10px";
        iframe.marginHeight = "0";
        iframe.marginWidth = "0";
        iframe.frameBorder = "no";
        var os = document.getElementsByTagName("script")[0];
        os.parentNode.insertBefore(iframe, os);
        return iframe
    };
    EmbeddedChat.getEmbeddedChatURL = function(isPopup) {
        var domain = window.location.protocol + "//" + window.location.host;
        var src = this.getURL("static-common") + "/html/embedded-chat.html?uuid=" + encodeURIComponent(this.config.uuid) + "&tenant=" + encodeURIComponent(this.config.tenant) + "&domain=" + encodeURIComponent(domain) + "&channel=" + encodeURIComponent(this.config.channel) + "&referrer=" + encodeURIComponent(location.toString()) + "&popup=" + encodeURIComponent(isPopup && isPopup.toString() || "false") + "&popuporigin=button";
        if (this.config.busHandlerURL) {
            src += "&busHandlerURL=" + encodeURIComponent(this.config.busHandlerURL)
        }
        if (this.config.stylesheetURL) {
            src += "&stylesheetURL=" + encodeURIComponent(this.config.stylesheetURL)
        }
        return src
    };
    EmbeddedChat.appendToBody = function(container, iframe) {
        container.appendChild(iframe);
        document.body.appendChild(container)
    };
    EmbeddedChat.attachToFrame = function(container, iframe) {
        var targetFrame = document.getElementById(this.config.targetContainerId);
        container.appendChild(iframe);
        targetFrame.appendChild(container);
    }
    EmbeddedChat.loadButton = function(uuid) {
        if (this.config.buttonContainerId) {
            this.button = {};
            this.button.el = document.getElementById(this.config.buttonContainerId);
            if (this.button.el) {
                this.config.renderButton = function(data) {
                    EmbeddedChat.renderButton(data)
                };
                var src = this.getURL("static-tenant") + "/" + uuid + "/button.js";
                this.addScriptTagToBody(src)
            }
        }
    };
    EmbeddedChat.addScriptTagToBody = function(src) {
        var se = document.createElement("script");
        se.type = "text/javascript";
        se.async = true;
        se.src = src;
        var os = document.getElementsByTagName("script")[0];
        os.parentNode.insertBefore(se, os)
    };
    EmbeddedChat.renderButton = function(buttonHTML) {
        if (this.button && this.button.el) {
            var path = this.getURL("domain");
            var html = buttonHTML.replace(/##path##/g, path);
            this.button.el.innerHTML = html;
            EmbeddedChat.bindButtonClick();
            EmbeddedChat.log("debug", "button ready")
        }
    };
    EmbeddedChat.bindButtonClick = function() {
        this.button.linkList = this.button.el.getElementsByTagName("a");
        for (var i = 0, length = this.button.linkList.length; i < length; i++) {
            var link = this.button.linkList[i];
            link.onclick = EmbeddedChat.onButtonClick
        }
    };
    EmbeddedChat.showButton = function(uuid) {
        EmbeddedChat.log("debug", "show button");
        EmbeddedChat.loadButton(uuid)
    };
    EmbeddedChat.hideButton = function() {
        EmbeddedChat.log("debug", "hide button");
        EmbeddedChat.renderButton("")
    };
    EmbeddedChat.getURL = function(type) {
        var url = this.config.domain + this.config.path;
        switch (type) {
            case "chat":
                url += EmbeddedChat.CHAT_PATH;
                break;
            case "static-common":
                url += EmbeddedChat.CHAT_PATH + EmbeddedChat.COMMON_PATH;
                break;
            case "static-tenant":
                url = this.config.domain;
                url += EmbeddedChat.SHARED_ALIAS + EmbeddedChat.CHAT_PATH + "/" + this.config.tenant;
                break;
            case "domain":
                url = this.config.domain;
                break
        }
        return url
    };
    EmbeddedChat.onButtonClick = function() {
        if (EmbeddedChat.isChatConfiguredToPopout()) {
            EmbeddedChat.openChatPopup();
            EmbeddedChat.sendMessage("button:click", {
                asPopout: true
            })
        } else {
            EmbeddedChat.sendMessage("button:click", {
                asPopout: false
            })
        }
        return false
    };
    EmbeddedChat.setPopoutConfiguration = function(toPopout) {
        EmbeddedChat.configuredToPopout = toPopout
    };
    EmbeddedChat.isChatConfiguredToPopout = function() {
        return EmbeddedChat.configuredToPopout
    };
    EmbeddedChat.getPopupWindowName = function() {
        if (!this._popupWindowName) {
            this._popupWindowName = (this.POPUP_WINDOW_NAME_PREFIX + "_" + this.config.uuid).replace(/[^\w-_]/, "_")
        }
        return this._popupWindowName
    };
    EmbeddedChat.sendBrowserInfo = function() {
        this.sendMessage("chat:browser-info", {
            innerWidth: window.innerWidth,
            outerWidth: window.outerWidth,
            innerHeight: window.innerHeight,
            outerHeight: window.outerHeight
        })
    };
    EmbeddedChat.sendChatPopupPosition = function() {
        var popoupWidth = parseInt(EmbeddedChat.windowProperties.width, 10);
        var popupHeight = parseInt(EmbeddedChat.windowProperties.height.open, 10);
        var position = this.getChatPopupPosition(popoupWidth, popupHeight);
        this.sendMessage("chat:popup:position", position)
    };
    EmbeddedChat.getChatPopupPosition = function(popupWidth, popupHeight) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (popupWidth / 2)) + dualScreenLeft;
        var top = (height / 16) + dualScreenTop;
        return {
            left: left,
            top: top
        }
    };
    EmbeddedChat.openChatPopup = function() {
        var popoupWidth = parseInt(EmbeddedChat.windowProperties.width, 10);
        var popupHeight = parseInt(EmbeddedChat.windowProperties.height.open, 10);
        var position = this.getChatPopupPosition(popoupWidth, popupHeight);
        var windowSpecs = "width=" + popoupWidth + "px,height=" + popupHeight + "px,left=" + position.left + "px,top=" + position.top + "px,menubar=no,resizable=yes,scrollbars=yes,toolbar=no,status=no";
        var popupWindow;
        try {
            popupWindow = window.open("", EmbeddedChat.getPopupWindowName(), windowSpecs, true);
            if (popupWindow && popupWindow.location.pathname.indexOf("embedded-chat.html") == -1) {
                var src = this.getEmbeddedChatURL(true);
                popupWindow.location = src;
                popupWindow.focus();
                setTimeout(function() {
                    EmbeddedChat.sendMessage("chat:popup:open")
                }, 1000)
            } else {
                EmbeddedChat.log("debug", "Chat Popup already exists - not opening additional one");
                setTimeout(function() {
                    EmbeddedChat.sendMessage("chat:popup:open", {
                        tryFocus: true
                    })
                }, 1)
            }
        } catch (e) {
            console.log("Exception while trying to create the popup - probably it already exists");
            if (e && e.message && (e.message.indexOf("Permission denied") || e.message.indexOf("SecurityError"))) {
                setTimeout(function() {
                    EmbeddedChat.sendMessage("chat:popup:open", {
                        tryFocus: true
                    })
                }, 1)
            }
        }
        try {
            popupWindow.focus()
        } catch (e) {}
    };
    EmbeddedChat.configureMessage = function() {
        this.receiverDomain = this.config.domain;
        if (!window.addEventListener) {
            window.attachEvent("onmessage", this.receiveMessage)
        } else {
            window.addEventListener("message", this.receiveMessage)
        }
    };
    EmbeddedChat.sendMessage = function(topic, data) {
        var message = JSON.stringify({
            topic: topic,
            data: data
        });
        var receiver = this.getReceiver();
        if (receiver) {
            receiver.postMessage(message, this.receiverDomain)
        }
    };
    EmbeddedChat.receiveMessage = function(e) {
        if (e.origin === EmbeddedChat.receiverDomain) {
            var message = JSON.parse(e.data);
            EmbeddedChat.processMessage(message)
        }
    };
    EmbeddedChat.processMessage = function(message) {
        EmbeddedChat.log("debug", "message received", message);
        switch (message.topic) {
            case "chat:communication:established":
                this.onCommunicationEstablished(message.data);
                break;
            case "chat:loaded":
                this.chatLoaded(message.data);
                if(this.config.createOnLoad) this.onButtonClick();
                break;
            case "chat:open":
            case "chat:preChat:open":
            case "chat:postChat:open":
            case "chat:offline:open":
            case "chat:skipQueue:open":
                this.handleChangeHeight("open", message.data);
                break;
            case "chat:invitation:open":
                this.handleChangeHeight("invitationOpen", message.data);
                break;
            case "chat:close":
                this.handleChangeHeight("closed", message.data);
                break;
            case "chat:minimize":
                this.handleChangeHeight("minimized", message.data);
                break;
            case "show:button":
                var uuid = message.data;
                this.showButton(uuid);
                break;
            case "hide:button":
                this.hideButton();
                break;
            case "customer:info-sent":
                this.bus.publish(message.topic, message.data);
                break;
            case "chat:popup":
                this.onChatPopup(message.data);
                break;
            case "chat:resize":
                this.setHeight(message.data.height);
                break;
            case "co-browsing:start":
                this.startCoBrowsing();
                break;
            case "co-browsing:end":
                this.endCoBrowsing();
                break
        }
    };
    EmbeddedChat.onChatPopup = function(data) {
        if (data && data.popup) {
            this.setPopoutConfiguration(data.popup)
        }
    };
    EmbeddedChat.handleChangeHeight = function(state, data) {
        if (!data || !data.fromPopup) {
            this.changeHeight(state)
        }
    };
    EmbeddedChat.changeHeight = function(state) {
        EmbeddedChat.log("debug", "change height");
        var height = EmbeddedChat.containerProperties.height[state];
        this.setHeight(height, true)
    };
    EmbeddedChat.setHeight = function(height, shouldAutoFit) {
        this.container.style.height = height;
        this.sendMessage("chat:change:height", shouldAutoFit)
    };
    EmbeddedChat.chatLoaded = function(data) {
        this.unsubscribeBusEvents();
        this.subscribeBusEvents();
        this.unsubscribeFromCoBrowsingEvents();
        this.subscribeToCoBrowsingEvents();
        if (!data.popup) {
            var onInit = this.config.onInit;
            if (typeof onInit === "function") {
                onInit(this.bus)
            }
            this.sendBrowserInfo();
            this.sendChatPopupPosition()
        }
    };
    EmbeddedChat.startCoBrowsing = function() {
        var coBrowsingInstance = this.getCoBrowsingInstance();
        if (coBrowsingInstance) {
            coBrowsingInstance.requireCoBrowsing()
        }
    };
    EmbeddedChat.endCoBrowsing = function() {
        var coBrowsingInstance = this.getCoBrowsingInstance();
        if (coBrowsingInstance) {
            coBrowsingInstance.end()
        }
    };
    EmbeddedChat.subscribed = {};
    EmbeddedChat.subscribeBusEvents = function() {
        this.subscribed.customerSetInfo = this.bus.subscribe("customer:set-info", EmbeddedChat.onSetCustomerInfo);
        this.subscribed.customerResetInfo = this.bus.subscribe("customer:reset-info", EmbeddedChat.onResetCustomerInfo);
        this.subscribed.chatTriggerInvitation = this.bus.subscribe("chat:trigger-invitation", EmbeddedChat.onChatTriggerInvitation);
        this.subscribed.chatSetLanguage = this.bus.subscribe("chat:set-language", EmbeddedChat.onChatSetLanguage)
    };
    EmbeddedChat.unsubscribeBusEvents = function() {
        this.subscribed.customerSetInfo && this.subscribed.customerSetInfo.remove();
        this.subscribed.customerResetInfo && this.subscribed.customerResetInfo.remove();
        this.subscribed.chatTriggerInvitation && this.subscribed.chatTriggerInvitation.remove();
        this.subscribed.chatSetLanguage && this.subscribed.chatSetLanguage.remove()
    };
    EmbeddedChat.coBrowsingSubscriptionTimeoutId = null;
    EmbeddedChat.getCoBrowsingInstance = function() {
        return window.coBrowsingInstance
    };
    EmbeddedChat.onCoBrowsingInstanceFound = function(instance) {
        instance.on("co-browsing:connected", this.onCoBrowsingSessionConnected, this);
        instance.on("co-browsing:disconnected", this.onCoBrowsingSessionDisconnected, this);
        var sessionId = instance.getSessionId();
        if (sessionId != null) {
            this.onCoBrowsingSessionConnected({
                sessionId: sessionId
            })
        }
        this.log("info", "Co-browsing instance found");
        this.sendMessage("co-browsing:found")
    };
    EmbeddedChat.onCoBrowsingSessionConnected = function(data) {
        this.log("info", "Co-browsing session connected");
        var instance = this.getCoBrowsingInstance();
        this.sendMessage("co-browsing:connected", {
            sessionId: data.sessionId,
            stickyHash: instance.getStickyHash()
        })
    };
    EmbeddedChat.onCoBrowsingSessionDisconnected = function() {
        this.log("info", "Co-browsing session disconnected");
        this.sendMessage("co-browsing:disconnected")
    };
    EmbeddedChat.subscribeToCoBrowsingEvents = function(tries) {
        tries = tries || 0;
        var coBrowsingInstance = this.getCoBrowsingInstance();
        this.log("info", "Checking for co-browsing instance...");
        if (coBrowsingInstance) {
            this.onCoBrowsingInstanceFound(coBrowsingInstance);
            this.coBrowsingSubscriptionTimeoutId = clearTimeout(this.coBrowsingSubscriptionTimeoutId)
        } else {
            var maxTries = EmbeddedChat.MAX_CO_BROWSING_INSTANCE_CHECK_TRIES;
            tries++;
            if (tries >= maxTries) {
                this.log("warn", "Co-browsing instance not found after " + tries + " tries, giving up")
            } else {
                var delay = Math.pow(2, tries) * 100;
                this.coBrowsingSubscriptionTimeoutId = setTimeout(this.subscribeToCoBrowsingEvents.bind(this), delay, tries)
            }
        }
    };
    EmbeddedChat.unsubscribeFromCoBrowsingEvents = function() {
        var coBrowsingInstance = this.getCoBrowsingInstance();
        if (coBrowsingInstance) {
            coBrowsingInstance.off(null, null, this)
        }
    };
    EmbeddedChat.getReceiver = function() {
        return this.iframe.contentWindow
    };
    EmbeddedChat.onSetCustomerInfo = function(info) {
        EmbeddedChat.sendMessage("customer:set-info", info)
    };
    EmbeddedChat.onResetCustomerInfo = function() {
        EmbeddedChat.sendMessage("customer:reset-info")
    };
    EmbeddedChat.onChatTriggerInvitation = function() {
        EmbeddedChat.sendMessage("chat:trigger-invitation")
    };
    EmbeddedChat.onChatSetLanguage = function(language) {
        EmbeddedChat.sendMessage("chat:set-language", language)
    };
    EmbeddedChat.log = function(level) {
        if (window.console && EmbeddedChat.logList.indexOf(level) >= EmbeddedChat.logLevelIndex) {
            try {
                window.console[level].apply(console, [EmbeddedChat.ERROR_FLAG].concat(Array.apply(null, arguments).slice(1)))
            } catch (e) {}
        }
    };
    EmbeddedChat.start()
})(window.JSON);