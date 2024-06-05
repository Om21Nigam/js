/* we can declare objects in two ways
i. Singleton (Using Constructors)
ii.Non Singleton (  as we don downwards)

*/

const mysym=  Symbol("hello")

const myobj={
    name: "OM", //actally key is treated as "name"
    age: 18,
    [mysym]: "keyvalue",
    email:"om@gmail.com",
    contact:968595859,

}
//add symbol to object
//to access elements

// console.log(myobj.name)
// console.log(typeof myobj[mysym])

// console.log(myobj["age"])
console.log(myobj)
//to resist any change in the object we can add freeze option

Object.freeze();

//adding funtions to objects
myobj.greeting = Function()
{
    console.log("Hello user" );
}


myobj.greetingone = Function()
{
    console.log(`Hello user, ${myobj.age}`);
}

console.log("break")
console.log(myobj.greeting());
console.log(myobj.greetingone());



//****************** Singleton Object (Using Constructors) *****************

// const obj= new Object()
// obj.id="3355"
// obj.name="rgre"


//objcet ke andar object 

const obj2 ={
    id :54,
    fullname :{
        fname :
        {
            f1: "om",
            f2 : "nigam",
        },
        lname : "khare"
    },
    age: 30,
}
console.log(obj2)
console.log(obj2.fullname.fname.f1);

//combining two objects//

let obj_1={1:"a" , 2:"b"}
let obj_2={3:"a=c" , 4:"b=d"}

let obj_3={obj_1 , obj_2}
console.log(obj_3)

let obj_easy = Object.assign({}, obj_1, obj_2)
console.log(obj_easy)

//alternatively likewise of array

let object_best = {...obj_1,...obj_2}
console.log(object_best);

console.log(Object.keys(myobj))
console.log(Object.values(myobj))
console.log(Object.entries(myobj))
