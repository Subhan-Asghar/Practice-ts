//object 
var user = {
    name: "subhan",
    date: "12/12/1211"
};
console.log(user);
console.log(user.name);
console.log(user.date);
user.name = "Ali",
    console.log(user.name);
var person = {
    name: "Subhan",
    age: 23,
    price: 34,
    tax: 10,
    calculate: function (price, tax) {
        return price + tax;
    }
};
console.log(person);
console.log(person.calculate(23, 10));
var std = {
    name: "Subhan",
    age: 123,
    marks: 45,
};
var marks = function (std) {
    if (std.marks > 33) {
        return true;
    }
    return false;
};
console.log(marks(std));
