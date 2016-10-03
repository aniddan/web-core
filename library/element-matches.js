module.exports = Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    function (selector) {
        return [].indexOf.call(document.querySelectorAll(selector), this) !== -1;
    };
