module.exports = function reverse(n) {
    var numb = n;
    if (numb < 0) {
        // numb *= -1;
        return Math.abs(numb)
            .toString()
            .split("")
            .reverse("")
            .join("");
    } else {
        return numb
            .toString()
            .split("")
            .reverse("")
            .join("");
    }
};
