// Class
class person{
    name:string;
    age:number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }

}

let p= new person("Ali",10);
console.log(p.getName())
console.log(p.getAge())

// Inheritance
class Animal{
    legs:number;
    sound:string;
    constructor(s:string,l:number){
        this.legs=l;
        this.sound=s;
    }
    getLegs():number{
        return this.legs;
    }
    getSound():string{
        return this.sound;
    }
    setLegs(n:number){
        this.legs=n;
    }
    setSound(s:string){
        this.sound=s;
    }
}

class Dog extends Animal{

}

let D=new Dog("Boow",4);
console.log(D.getSound())
console.log(D.getLegs());