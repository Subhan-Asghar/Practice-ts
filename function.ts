function printhello(){
    console.log("hello world")
}

function addnum(a:number,b:number):number{
    return a+b;
}

function mul(a:number,b:number=1):number{
    return a*b;
}
// Arrow function 
const arrow=(str:string):string=>{
    return str;

}

printhello();
console.log(addnum(5,3))
console.log(mul(5,2))
console.log(arrow("think again "))