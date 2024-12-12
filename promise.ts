let num:number=123;
const check=(num:number):Promise<number>=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num==123){
                resolve(567);
            }
            else{
                reject(100)
            }
        },10000)
    })
   
    
}
check(num)
.then((res)=>{
    console.log("the number is ",res)

})
.catch((err)=>{
    console.log("Error",err)
})