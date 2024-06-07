const obj={
    username : "myobj",
    cost : 999,

    welcome_msg : function (){
        console.log(this)
        return `${this.username } is welcomed `

    }

}

 //console.log(obj.welcome_msg())
 obj.username="om"
 console.log(obj.welcome_msg())
 console.log(this)

 //the above this has scope of node that is why it is empty ..instead if we had run this on console we would have got windows as our current contex.

//for the browser the global object is windows object and for this node the global object is null or empty object 

// function one(){
//    let username="om"
//     console.log(this.username)
//     console.log(this)
// }
// one()

const fun_call = function(){
    let username="om"
    console.log(this.username)
    console.log(this);
}
fun_call()

const fun_call_2 = ()=>{
    let username="om"
    console.log(this.username)
    console.log(this);
}
fun_call_2()


const arrow_fun= (num1,num2)=>{             
return num1+num2                                                           //explicit return
}


const arrow_fun_2= (num1,num2)=> (num1+num2  )                               //impicit return
const arrow_fun_3= (num1,num2)=> ({username:"om"} )                          //impicit return


console.log(arrow_fun(9,7))
console.log(arrow_fun_2(9,7))
console.log(arrow_fun_3(9,7))

