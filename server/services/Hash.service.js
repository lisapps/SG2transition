module.exports = (() => {
    const Hashing = function() {
        return this;
    }

    Hashing.prototype.newHash = (prefix = "") => {
        let hash = prefix + Math.random().toString(36).substring(2, 8);
        return hash;
    }

    return new Hashing();
})();