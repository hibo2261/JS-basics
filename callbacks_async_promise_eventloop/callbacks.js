

//example 1
console.log("FIRST EXAMPLE------------------")
function fun2(a,b){
    setTimeout(() => {
        console.log("I AM IN 1ST EXAMPLE" ,a-b);
    }, 2000); 
}


// function fun2(a,b){
    
//         console.log(a-b);
 
// }

function fun1(a,b,cb){
    console.log(a-b);
    cb;
}

fun1(3,2,fun2(7,3))


//example 2
console.log("SECOND EXAMPLE---------------------")
function add(a, b, callback) {
    setTimeout(function() {
      callback(a + b);
    }, 1000);
  }
  
  add(3, 4, function(result) {
    console.log(result); 
  });
  console.log("I am called first");

  //example 3
console.log("THIRD EXAMPLE------------------")
  function print( ans ){
    console.log(ans) ; 
}
function add(a, b, callback){ 
    callback(a+b) ;
}
add(2,5,print); 



//example 4

console.log("FOURTH EXAMPLE-------------------------")

function demo1(p,cb){
    if(p == 5){
        console.log("CONDITION 1 IS PASSED.")
    }
    cb

}
function demo2 (q,cb){
    if (q == 2){
        console.log("CONDITION 2 IS PASSED.")
    }
    cb
}

function demo3(){
    console.log("I AM DEMO 3.")
} 

demo1(5,demo2(2,demo3()))



// example 5

console.log("FIFTH EXAMPLE------------------------")

function afunction (a,b,cb){

    if ((a + b) % 2 == 0){
        console.log("RESULT IS EVEN.")
    }
    cb
}

function bfunction (){
    console.log("I AM REPLACING CB")
}

afunction(2,6,bfunction())