module.exports = function (x, y) {
    var parents = [], parent, i;
    do {
        if (parent !== document.elementFromPoint(x, y)) {
            parent = document.elementFromPoint(x, y);
            parents.push(parent);
            parent.style.pointerEvents = 'none';
        } else {
            parent = false;
        }
    } while (parent);
    for (i = 0; i < parents.length; i++) {
        parent.style.pointerEvents = 'all';
    }
    return parents;
};
