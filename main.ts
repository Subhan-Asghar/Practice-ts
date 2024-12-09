// Swap array
let arr:number[]=[2,3];
let arr_s:string[]=["abc","xyz"]
const swap=<T>(arr:T):T=>{
    let temp=arr[0];
    arr[0]=arr[1];
    arr[1]=temp;
    return arr;
}
console.log(swap(arr))
console.log(swap(arr_s))

// Generic Interface
interface Person<T,U>{
    name:T,
    age:U
}

let person:Person<number,string>={
    name:123,
    age:"subhan"
}
let person2:Person<string,number>={
    name:"subhan",
    age:123
    
}
console.log(person)
console.log(person2)

//Merge two Object
let obj1={
    name:"Hello world"
}
let obj2={
    age:96
}
const merge=<T>(obj1:T,obj2):T=>{
    return {...obj1,...obj2}
}
console.log(merge(obj1,obj2))