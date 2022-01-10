module.exports = (() => {

    // ### CONSTRUCTOR ### //
    const StringServices = function() {
        let stringProperties = {
            "toCamelCase": {
                // someCamelCase
                value() {
                    let str = cleanseString(this);
                    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
                        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
                    }).replace(/\W+|\s+/g, '');
                }
            },
            "revertCamelCase": {
                // someCamelCase -> Some Camel Case
                value() {
                    let str = cleanseString(this);
                    return str.replace(/([A-Z])/g, " $1").replace(/([a-z])/, (letter) => {
                        return letter.toUpperCase();
                    })
                }
            },
            "toSnakeCase": {
                // some_snake_case
                value() {
                    let str = cleanseString(this).toLowerCase();
                    return str.replace(/\W/g,"_");
                }
            },
            "toKebabCase": {
                // some-kabab-case
                value() {
                    let str = cleanseString(this).toLowerCase();
                    return str.replace(/\W/g,"-");
                }
            },
            "toPascalCase": {
                // SomePascalCase
                value() {
                    let str = cleanseString(this);
                    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter) => {
                        return letter.toUpperCase();
                    }).replace(/\W+|\s+/g, '');
                }
            },
            "cleanse": {
                value() {
                    return cleanseString(this);
                }
            } 
        };
        Object.defineProperties(String.prototype, stringProperties);
    };

    // ### PRIVATE METHODS ### //
    // -- clear strings from double and trailing spaces
    var cleanseString = (str) => {
        return str.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ");
    }

    return new StringServices();

})();