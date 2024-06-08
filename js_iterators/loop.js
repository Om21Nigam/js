let myArr=[1,2,3,4,"tanu","neeru"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr [i];
    //console.log(element);
    
}
//break and continue is understood 
 

// while loop 

let i=10;
// while(i<10)
//     {
//         console.log(i);
//         i++;
//     }

do{
        //console.log(`Score is ${i}`);
       i++
    }
    while(i<10)


//                        for of loop  

let string="Darsh Shrivastava !!"
  
for (const greet of string) {
   //console.log(`Hi ${greet}`);
    
}

// ********************** maps ***********
let myMap =new Map()
myMap.set('1',"Akash1")
myMap.set('2',"Akash2")
myMap.set('3',"Akash3")
myMap.set('4',"Akash4")
myMap.set('5',"Akash5")

// for (const key of myMap) {
//     console.log(key)
    
// }
// for (const [key,value] of myMap) {
//     console.log(`Key is : ${key} and val is ${value}`)   //objects cannot be destructured like this
    
// }


// for in loop (generally for objects and maps cannot be destructured as done above)

let mobj ={
c : "C",
cpp : "C++",
php : "Python",
js : "Java"
}

for (const key in mobj) {
  //  console.log(key ,": " ,mobj[key]);
  
}

//for each loop 

let coding =['js','cpp','c','php','java']

//coding.forEach((i)=>{console.log(i);})

 function printme(i) {
    //console.log(i)
    
}
coding.forEach(printme)


// arrays of object

let myCodingSpace=[{
    name:"cp",
    built :1970
},{    name:"cpp",
    built :1980},{    name:"py",
        built :1990}]


myCodingSpace.forEach((item)=>{
    //console.log(item.name);
})


//filter'

let myNUMS=[1,2,3,4,5,6,7,8,9,0]

let filtered = myNUMS.filter((i)=>(i>5))
// console.log(filtered);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let filtered_Books =books.filter((bk)=>(
     bk.genre=='Science' && bk.publish>2000
  ))

  //console.log(filtered_Books)


  //map fun

  let num_list=[1,2,3,4,5,6,7,8,9]
  
  let new_num_list =num_list.map((num)=>num+10)
//   console.log(new_num_list);

  //chaining 

  let new_num_list_2= num_list
                            .map((num)=>num*10)
                            .map((num)=>num+3)
                            .filter((num)=>num>45);
  //console.log(new_num_list_2);

  //reduce statement

  let array2=[1,2,3,5]
//   let reduce_used = array2.reduce(function(acc, curval) {
//     console.log(`Acc: ${acc} and curval: ${curval}`);   //readable way of writing 
//     return acc+curval
//   },0)


let reduce_used=array2.reduce((acc, curval)=>(acc+curval),0) //smart way of writing 
  //console.log(reduce_used);



  //example of shopping cart 

  let cart=[{
    item : "mobile",
    cost : 12000
  },
  {
    item : "mobile2",
    cost : 14000
  },
  {
    item : "mobile3",
    cost : 16070
  },
  {
    item : "mobile3",
    cost : 10000
  },
  {
    item : "mobile4",
    cost : 22000
  }
]

let pay=cart.reduce((acc,curval)=>(curval.cost+acc),0)
console.log(pay);