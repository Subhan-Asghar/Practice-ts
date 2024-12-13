"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.add = exports.sub = void 0;
var sub = function (a, b) {
    return a - b;
};
exports.sub = sub;
var add = function (a, b) {
    return a + b;
};
exports.add = add;
var check = function (num) {
    if (num % 2 == 0) {
        console.log("The number is Even ", num);
    }
    else {
        console.log("The number is odd ", num);
    }
};
exports.check = check;
