// Basic Function 
var calculateArea = function (lenght, width) {
    var area = lenght * width;
    return area;
};
console.log(calculateArea(3, 5));
// Array Operations
var arr = [1, 34, 104, 23, 78, 12];
var max = function (arr) {
    var num = arr[0];
    var lenght = arr.length;
    for (var i = 1; i < lenght; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
};
console.log(max(arr));
// Tuple as a Return Type
var studentDetails = function (name, age, num) {
    var pass = false;
    if (num > 33) {
        pass = true;
    }
    return [name, age, pass];
};
console.log(studentDetails("subhan", 19, 88));
var addproduct = function (product, newproduct) {
    product.push(newproduct);
    return product;
};
var array = [
    ["abc", 12],
    ["xyz", 32]
];
var pro = ["qwe", 57];
console.log(addproduct(array, pro));
