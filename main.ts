// Basic Function 
const calculateArea=(lenght:number,width:number):number=>{
    let area =lenght*width;
    return area;

}
console.log(calculateArea(3,5));

// Array Operations
let arr:number[]=[1,34,104,23,78,12]
const max=(arr:number[]):number=>{
    let num=arr[0];
    let lenght=arr.length;
    for(let i=1;i<lenght;i++){
     if(arr[i]>num)
     {
        num=arr[i];
     }
    }
    return num;

}
console.log(max(arr));

// Tuple as a Return Type
const studentDetails=(name:string,age:number,num:number):[string,number,boolean]=>{
    let pass=false;
    if(num>33){
        pass=true;
    }
    return [name,age,pass]

}
console.log(studentDetails("subhan",19,88))

// Manipulating Arrays and Tuples
type Product =[string,number];
const addproduct=(product:Product[],newproduct:Product):Product[]=>{
    product.push(newproduct)
    return product;
}
let array:Product[]=[
    ["abc",12],
    ["xyz",32]
]

let pro:Product=["qwe",57]

console.log(addproduct(array,pro))