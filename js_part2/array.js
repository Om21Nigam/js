const arr1=[1,4,3,5,"om",true]

//array can contain different datatypes and array size can be increased later on.

// console.log(arr1);
arr1.push(6)
arr1.pop()
arr1.push("ok")
// console.log(arr1);

arr1.unshift("element_at_first")
arr1.shift()

// console.log(arr1.includes(9))
// console.log(arr1.indexOf(5))
// console.log(arr1);

let newARR= arr1.join()
// console.log(arr1);
// console.log(newARR);

let arr_4=[1,2,3,4,5,6]
// console.log("A  " ,arr_4);
// console.log(arr_4.slice(1,3));
// console.log("B  " ,arr_4);
// console.log(arr_4.splice(1,3));
// console.log("C  " ,arr_4);


//********************************* Arrays2 *************************

let array1 =[1,2,3,4,5]
let array2 =[6,7,8,9]

//now to join both these arrays

//array1.push(array2)
// console.log(array1)
// console.log(array1[5]);
// console.log(array1[5][3]);

//better way is to use concat

// array3=array1.concat(array2)
// console.log(array3);


//best way to join is to use spread

let final_array=[...array1,...array2]
// console.log(final_array);

// let another_complex_array= [1,2,3,[6,7,8],9,67,[6,5,7,[75,89.0],9]]
// console.log(another_complex_array)
// let another_complex_to_simple_array=another_complex_array.flat(Infinity)
// console.log(another_complex_to_simple_array)

console.log(Array.isArray("Om"))
console.log(Array.from("Om"))
console.log(Array.from({name: "OM "})) //we have to tell which is to be considered in array

let int1=50
let int2=90
let int3=80
console.log(Array.of(int1, int2, int3)) //using 'of'for converting multiple item to array

