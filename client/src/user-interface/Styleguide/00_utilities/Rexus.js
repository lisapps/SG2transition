const RexusManager = () => {
  if (this.Rexus) return false;

  console.log("Rexus loading...");
  // ### PRIVATE PROPERTIES ### //
  let tagBank = [];
  let log = {};

  // ### CONSTRUCTOR ### //
  function Rexus() {
    // ### PUBLIC PROPERTIES ### //
    // ~~~

    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent("RexusEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    // -- polyfill for custom events (IE9 - IE11)
    if (typeof window.CustomEvent != "function") {
      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent;
    }
  }

  // ### PRIVATE METHODS ### //
  function verifyHash(hash) {
    return tagBank.indexOf(hash) >= 0;
  }
  function generateHash() {
    return Math.random().toString(36).substring(2, 8);
  }

  // ### PUBLIC METHODS ### //
  Rexus.prototype.tag = function (prefix) {
    // -- prevalidate "prefix"
    if (!prefix) prefix = "";
    else prefix = prefix + "-";

    // -- generate new hash
    let newHash = prefix + generateHash();

    // -- verify that hash doesn't exist in bank
    while (verifyHash(newHash)) newHash = prefix + generateHash();

    // -- push unique hash to bank
    tagBank.push(newHash);

    // -- return unique hash
    return newHash;
  };

  Rexus.prototype.register = function (obj) {
    if (log[obj.key]) {
      let _tmpObj = log[obj.key];
      Object.assign(_tmpObj, obj.values);
    } else log[obj.key] = obj.values;
  };

  Rexus.prototype.getComponent = function (id) {
    return log[id] ? log[id]["component"] : false;
  };

  Rexus.prototype.getItem = function (id) {
    return log[id] ? log[id] : false;
  };

  // -- initiator
  this.Rexus = this.Rexus ? this.Rexus : new Rexus();
  console.log("Rexus done loading");
};

export default RexusManager;
