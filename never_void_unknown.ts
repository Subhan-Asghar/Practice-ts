// Never
function throwError(message:string):never{
    console.log("...")
    throw new Error(message);
}

console.log(throwError("XYZ"))

// Void
function VoidFn():void{
    console.log("Void Function")
}

VoidFn()

// Unknown
let num:unknown;
num=123;
console.log(num)
num="abc";
console.log(num)
