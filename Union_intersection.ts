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