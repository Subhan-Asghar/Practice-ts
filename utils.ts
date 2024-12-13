export const sub=(a:number,b:number):number=>{
    return a-b;
}

export const add=(a:number,b:number):number=>{
    return a+b;
}
export const check=(num:number)=>{
    if(num%2==0){
        console.log("The number is Even ",num)
    }
    else{
        console.log("The number is odd ",num)
    }
}
