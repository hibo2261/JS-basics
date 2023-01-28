


// example 1
console.log("EXAMPLE 1------------------------------------")
async function fun1() {
    console.log('Async function.');
    return Promise.resolve("HIMANSHU");
}

fun1().then(function(result) {
    console.log(result)
});


// EXAMPLE 2
console.log("EXAMPLE 2------------------------------------")

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});


async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
        console.log("JAY")
    }   
    catch(error) {
        console.log(error);
    }
}


asyncFunc()


// example 3
console.log("EXAMPLE 3------------------------------------")
async function functionDemo() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("I AM EXAMPLE 3"), 1000)
    });
  
    let result = await promise; 
  
    console.log(result)
  }
  
  functionDemo();