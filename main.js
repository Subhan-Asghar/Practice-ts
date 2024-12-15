// Never
function throwError(message) {
    console.log("...");
    throw new Error(message);
}
// console.log(throwError("XYZ"))
// Void
function VoidFn() {
    console.log("Void Function");
}
VoidFn();
// Unknown
var num;
num = 123;
console.log(num);
num = "abc";
console.log(num);
