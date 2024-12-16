// Narrowing
const narrow=(num:number|string)=>{
    if(typeof num==="number"){
        console.log("The num is number ",num);
    }
    else{
        console.log("The num is String ",num);
    }
}
let num:number=123;
narrow(num);
let num1:string="qwe";
narrow(num1)

// Class
class Dog{
    
    Bow(){
        console.log("BOW");
    }
}
class Cat{
    Meow(){
        console.log("Meow")
    }
}
const classnarrow=(Animal:Dog|Cat)=>{
    if(Animal instanceof Dog){
        Animal.Bow();
    }
    else if(Animal instanceof Cat){
        Animal.Meow();
    }
    else{
        console.log("Failed")
    }

}
let cat=new Cat();
let dog=new Dog();
classnarrow(cat)
classnarrow(dog)