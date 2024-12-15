var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
var person = /** @class */ (function () {
    function person(n, a) {
        this.name = n;
        this.age = a;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.getAge = function () {
        return this.age;
    };
    return person;
}());
var p = new person("Ali", 10);
console.log(p.getName());
console.log(p.getAge());
// Inheritance
var Animal = /** @class */ (function () {
    function Animal(s, l) {
        this.legs = l;
        this.sound = s;
    }
    Animal.prototype.getLegs = function () {
        return this.legs;
    };
    Animal.prototype.getSound = function () {
        return this.sound;
    };
    Animal.prototype.setLegs = function (n) {
        this.legs = n;
    };
    Animal.prototype.setSound = function (s) {
        this.sound = s;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var D = new Dog("Boow", 4);
console.log(D.getLegs());
console.log(D.getSound());
