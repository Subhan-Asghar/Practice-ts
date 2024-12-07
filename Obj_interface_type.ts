//object 
const user ={
    name:"subhan",
    date:"12/12/1211"
}
console.log(user)
console.log(user.name)
console.log(user.date)
user.name="Ali",
console.log(user.name)

// Interface
interface isPerson{
    name:string,
    age:number,
    price:number,
    tax:number,
    calculate(price:number,tax:number):number;
}

const person:isPerson={
    name:"Subhan",
    age:23,
    price:34,
    tax:10,
    calculate(price:number,tax:number):number{
        return price+tax;
    }
}
console.log(person);
console.log(person.calculate(23,10));

// Type Aliases
type student={
    name:string,
    age:number,
    marks:number
}
let std:student={
    name:"Subhan",
    age:123,
    marks:45,
}

const marks=(std:student):boolean=>{
    if(std.marks>33){
        return true;
    }
    return false
}

console.log(marks(std));
