 
 // array created
  let myarray = ["Nikhil", "Shubham", "Vidya"]
 

  // simple function declaration
 function printArray (abc){
    console.log(abc)
    myarray.push("Abhishek")
  }

   //simple function calling
  printArray(myarray)


// arrow function (ES6)
  let display = (a) => {

    console.log(a)

  }

  console.log(display(myarray))


