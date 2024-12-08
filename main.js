//Practice Question 
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
var getArea = function (Shape, size) {
    if (Shape == "Circle") {
        return 3.14 * size * size;
    }
    else if (Shape == "Square") {
        return size * size;
    }
    return 0;
};
console.log(getArea("Circle", 20));
console.log(getArea("Square", 10));
var printMessage = function (type) {
    if (type.type == "success") {
        console.log(type.type);
        console.log(type.message);
    }
    else if (type.type == "error") {
        console.log(type.type);
        console.log(type.errorcode);
    }
};
var s = {
    type: "success",
    message: "hello world"
};
var e = {
    type: "error",
    errorcode: 123
};
printMessage(s);
console.log("-----------------");
printMessage(e);
// Intersection
var obj1 = {
    name: "subhan"
};
var obj2 = {
    age: 1223
};
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
var merge_A = merge(obj1, obj2);
console.log(merge_A);
