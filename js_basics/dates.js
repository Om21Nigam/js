let myDate =  new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());


let myCreatedDate = new Date(2023,12,30,45,55,67,554)
// console.log(myCreatedDate.toString())

const date_now= Date.now()
// console.log(date_now)
// console.log(Date.getTime())


const date3= new Date()
console.log(date3)
console.log(date3.toDateString())
console.log(date3.getDay())

//customize our display technique


date3.toLocaleString('default',{
    weekday: "short",


    }
)

