// UNion 
type h=number|string
 let c:h=234;
 let b:h="abc"
 console.log(c,"",b);

// Intersection

type x={name:string};
type y={age:number};
type z=x&y;

let num:z={
    name:"subhan",
    age:1234,
}
console.log(num.age)
console.log(num)

//Practice Question 

// Basic Union Type
type shape="Circle"|"Square";
const getArea=(Shape:shape,size:number):number=>{
    if(Shape=="Circle"){
        return 3.14*size*size;
    }
    else if(Shape=="Square"){
        return size*size;
    }
    return 0;

}
console.log(getArea("Circle",20));
console.log(getArea("Square",10));

// Discriminated Union
type success={type:"success",
            message:string
}
type error={
    type:"error",
    errorcode:number,
}
const printMessage=(type:success|error)=>{
    if(type.type=="success"){
        console.log(type.type)
        console.log(type.message)
    }
    else if(type.type=="error"){
        console.log(type.type)
        console.log(type.errorcode)
    }
   

}
const s:success={
    type:"success",
    message:"hello world"
}
const e:error={
    type:"error",
    errorcode:123
}
printMessage(s)
console.log("-----------------")
printMessage(e)

// Intersection

let obj1={
    name:"subhan"
}
let obj2={
    age:1223
}
const merge=<T,U>(obj1:T,obj2:U):T & U=>{
    return {...obj1,...obj2};
}
const merge_A=merge(obj1,obj2)
console.log(merge_A)