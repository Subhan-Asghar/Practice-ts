const arr:number[]=[1,2,3,4,5,6]
const printnum=(arr:number[]):number=>{
    return arr[0];
}

console.log(printnum(arr))

const arr_s:string[]=["sdas","sadas","tyr"]
const printanyfirst=<T>(arr:T[]):T=>{
    return arr[0];
}

console.log(printanyfirst(arr))
console.log(printanyfirst(arr_s))