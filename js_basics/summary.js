/* There are basically two types of datatypes:
i. Primitive(Call by value)
ii. Non-Primitive(Call by reference)

>Primitive: 1. String 2. Number 3.BigInt 4.Boolean 5.Null 6.Undefined 7.Symbol
>Non-Primitive: 1.Array 2. Object 3.Function
*/

let symbol1=Symbol("1234")
let symbol2=Symbol("1234")
console.log(symbol1==symbol2)

const arr=["23","44","56"]
let object=
{
    sum: 10,
    name: "om",
    
}

const myFunction=function()
{
    console.log("This is my first Function")
}
console.log(myFunction())

console.log(typeof myFunction)
console.log(typeof object)
console.log(typeof arr)
console.log(typeof null)



//**********************************  Memory   ***********************
// i. Stack(Primitive)          ii. Heap(Non_Primitive)

//ex. stack memeory
let data1=90
let data2=data1
data2=59
console.log(data1);
console.log(data2);

let obj1={

    email1 :"ok@omemail.com" ,
    email2 :"notok@omemail.com" ,
}

let obj2=obj1

obj2.email2="changed@email.com"

console.log(obj1.email2);
console.log(obj2.email2);