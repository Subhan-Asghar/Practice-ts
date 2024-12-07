function printhello() {
    console.log("hello world");
}
function addnum(a, b) {
    return a + b;
}
function mul(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
// Arrow function 
var arrow = function (str) {
    return str;
};
printhello();
console.log(addnum(5, 3));
console.log(mul(5, 2));
console.log(arrow("think again "));
