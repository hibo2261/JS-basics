

//example 1

console.log("EXAMPLE 1------------------------------------")

const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve(randomNumber);
    } else {
        reject(new Error(`Random number was too low: ${randomNumber}`));
    }
});

myPromise
    .then(result => {
        console.log(`Random number is greater than 0.5: ${result}`);
    })
    .catch(error => {
        console.log(`Error: ${error.message}`);
    });


    //example 2

    console.log("EXAMPLE 2------------------------------------")
    
    var prompt = require('prompt-sync')();

// Creating a new promise
const myPromise2 = new Promise((resolve, reject) => {
const input = prompt("ENTER A NAME:")
if(input == "ok"){
    resolve(input)
}
else{
 reject (input,"ERROR")
}})


myPromise2
.then(value =>{
    console.log("RESOLVED DONE",value)
})
.catch("OK IS NOT PRESENT.")



//example 3

console.log("EXAMPLE 3------------------------------------")

let myPromise3 = new Promise((resolve,reject) => {
let a = prompt("ENTER A NUMBER 1 = ")
let b = prompt("ENTER A NUMBER 2 = ")

    if ((a+b) % 2 == 0){
        resolve (console.log("SUM OF ",a," AND",b," IS EVEN."))
    }
    else{
        reject(console.log("SUM OF ",a," AND",b," IS NOT EVEN."))
    }
})


myPromise3
.then()
.catch()



// example 4
console.log("EXAMPLE 4------------------------------------")


function checkResult(marks) {
    return new Promise((resolve, reject) => {
      if (marks > 32) {
        resolve("Congrats");
      } else {
        reject(new Error("Failed"));
    
}
    });
  }
  
  checkResult(56)
            .then((result) => {
             console.log(result);
             })
           .catch((err) => {
            console.error(err);
            })
            .finally(() => {
            console.log("Finally Block");
             });
  
// example 5 

const skn = 2;

let promise1 = new Promise(function (resolve, reject) {
    if (skn>9) {
        resolve("IN RESOLVED SECTION");
    } else {
        reject("IN A REJECT SECTION ");
    }
});

console.log(promise1);
promise1.catch()
