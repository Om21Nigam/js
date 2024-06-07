let a=90
var b=89                                  //global scope
const c=900

if(true){
    let a=60
    b=66                                  // block scope
    let c=43

}

console.log(`${a} , ${b}, ${c}`)


// ****************** function scope *******************

console.log("At first.first",AddOne(6))

function AddOne (num){
    return num+1
}
console.log("At first.second",AddOne(6))
console.log("At second.first :",AddTwo(7)) // w cannot execute it because we have declared a const for this function later and we can onlyy access that when it is called.

const AddTwo = function(num){
    return num+2
}
console.log("At second.second",AddTwo(6)) 

