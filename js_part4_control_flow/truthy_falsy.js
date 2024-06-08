let email=[]

if(email){
    console.log("Email Recieved");
}
else{
    console.log("Email NOt Recieved");
}

//       falsy values : values which are considered as false

// false,0,-0,BigInt 0n,"",null, undefined,NaN


//     truthy values ... values which are considered to be true
// Ex : Anything inside the string like : "0" , " ", 'false',[],{},function(){}..empty fun


//to check whehter array is empty :

let arr=[]

if(arr.length ===0) {
    console.log("Array is Empty");
    

}


let myobj={

}

if(Object.keys(myobj).length===0) {
    console.log("Obj is Empty");
    
}

// Nullish Coalescing Operator (??)  null undefined

let val1=5 ?? 10
let val2= null ?? 45
let val3=undefined ?? 4

console.log(val1,val2,val3);

//ternary operators 

let value=90

value<50 ? console.log("Value is small") : console.log("Value is big")