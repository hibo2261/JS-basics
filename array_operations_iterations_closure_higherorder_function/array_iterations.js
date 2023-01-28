

// for-each

let sampleArray = ["history","math","geography"]

sampleArray.forEach(i => console.log(i))


// simple for loop

for (var i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
  
}

// ES6 type 

for (i of sampleArray){
    console.log(i)
}