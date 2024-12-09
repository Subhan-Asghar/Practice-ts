var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Swap array
var arr = [2, 3];
var arr_s = ["abc", "xyz"];
var swap = function (arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
};
console.log(swap(arr));
console.log(swap(arr_s));
var person = {
    name: 123,
    age: "subhan"
};
var person2 = {
    name: "subhan",
    age: 123
};
console.log(person);
console.log(person2);
//Merge two Object
var obj1 = {
    name: "Hello world"
};
var obj2 = {
    age: 123
};
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
console.log(merge(obj1, obj2));
