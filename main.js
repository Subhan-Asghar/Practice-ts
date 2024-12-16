// Narrowing
var narrow = function (num) {
    if (typeof num === "number") {
        console.log("The num is number ", num);
    }
    else {
        console.log("The num is String ", num);
    }
};
var num = 123;
narrow(num);
var num1 = "qwe";
narrow(num1);
// Class
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.Bow = function () {
        console.log("BOW");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.Meow = function () {
        console.log("Meow");
    };
    return Cat;
}());
var classnarrow = function (Animal) {
    if (Animal instanceof Dog) {
        Animal.Bow();
    }
    else if (Animal instanceof Cat) {
        Animal.Meow();
    }
    else {
        console.log("Failed");
    }
};
var cat = new Cat();
var dog = new Dog();
classnarrow(cat);
classnarrow(dog);
