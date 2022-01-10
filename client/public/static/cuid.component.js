/*
	=================================================
	:::::::::::::::::::::::::::::::::::::::::::::::::
	========= COMPONENT UNIQUE ID GENERATOR =========
	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
*/
(function() {
	var hashBank = [];
	var hash;
	var hashPrefix = "";

	function CUID() {
		// -- constructor does nothing
	}

	CUID.prototype.generate = function(prefix) {
		if (!prefix) prefix = "";
		else prefix = prefix + "-";
		hashPrefix = prefix;
		var newHash = getHash();
		while (checkHash()) newHash = getHash();
		hashBank.push(newHash);
		return newHash;
	};

	function getHash() {
		hash = Math.random().toString(36).substring(2, 8);
		return hashPrefix + hash;
	};

	function checkHash() {
		return (hashBank.indexOf(hashPrefix + hash) >= 0);
	};

	this.Rexus.cuid = new CUID();
})();
/*
	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
	========= COMPONENT UNIQUE ID GENERATOR =========
	:::::::::::::::::::::::::::::::::::::::::::::::::
	=================================================
*/
