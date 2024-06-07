//basic function


function AddTwo(number1 , number2){
    let result = number1+number2
    console.log(result)
    return result

}

let result=AddTwo(3,5)
console.log("Result is" ,result)


function loginuser(username) //for default value just write (username="user1")
{
    if(!username){
        console.log("Enter a valid username")
        return 
    }

    return `${username} just logged in`
}

console.log(loginuser())

//limited parameters but arguments count exceed 

function addCartPrice(val1,val2,...num1)
{
    console.log(num1)
    console.log(val1,val2)
    return num1,val1,val2 //in this case it will return this last value

}

addCartPrice(400,700,800,900,7965)
console.log(addCartPrice(500,700,544,675))

const myObj={
    name : "akash",
    age : 45,
}

const myArr=[23,5,6,4,3,5]

function AccessMyObj (obj_1){
    return  `ACCount holder name is ${obj_1.name} and is of ${obj_1.age} years`
}

function AccessMyArr (arr_1){
    return  `Second value is ${arr_1[3]}`
}

console.log(AccessMyObj(myObj))
console.log(AccessMyArr(myArr))

//we can also input arguments directly like:

console.log(AccessMyObj({
    name: "OM",
    age : 18,
}))


