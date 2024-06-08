//to immedistely execute functions and to remove the pollution caused by te variables of global scope we use iife(immediately invoked function expressions)


//by iife

(function on()  {
console.log("DB CONNECTED")   //named iife
})();

(() =>  {
console.log("DB CONNECTED Two")      //unnamed iffe
})();


((name) =>  {
console.log(`DB CONNECTED Two ${name} `)      //unnamed iffe with parameters passing
})("om'");


