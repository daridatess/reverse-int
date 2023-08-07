module.exports = function reverse(n) {
    let numb = Math.abs(n.toString());
    return numb.toString().split("").reverse().join("");
};
