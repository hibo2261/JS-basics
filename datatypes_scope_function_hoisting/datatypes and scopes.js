var age = 21;
var firstName = "Himanshu"
var lastName = "Borse"
var online = true;
var nothing;


nothing = null;

console.log("your age is = ",age)

console.log("HELLO",firstName,lastName)
console.log(nothing)
  
online = false
console.log(online)


var employeeName = "Sumit"

function demoFunction () {
    console.log("NAME OF THE EMPLOYEE IS = ",employeeName)
    // var isPresent = true
    // var jobDone = true 
}

//GIVING ERROR DUE TO isPresent AND jobDone IS FUNCTION SCOPE.
//console.log("NAME = ",employeeName,"PRESENT",isPresent,jobDone)
// variables isPresent and jobdone not accesible because it has function scope

console.log("I AM OUTSIDE THE FUNCTION",employeeName)