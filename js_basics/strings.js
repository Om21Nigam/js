let str1="hello"
let str2="50"

// console.log(str1+str2) //very old way of adding the string

// console.log(`This a message where i want to say ${str1} and my score is ${str2}`)

//another way of writing the string is 
const str3= new String( "wwdc_an apple event")
// console.log(str3)

// console.log(str3[0])
// console.log(str3.toUpperCase());
// console.log(str3.charAt(3));
// console.log(str3.indexOf('t'));


const newStr=str3.substring(0,9)
console.log(newStr)

let anotherstr=str3.slice(-9,15)
console.log(anotherstr)


console.log(str3.trim())

const url="frkjfbeiefseikjfesf--@14!%"

console.log(url.replace('14!' , '**'))
console.log(url)
console.log(url.includes('14!'))