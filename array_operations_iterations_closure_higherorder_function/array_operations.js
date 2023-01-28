


let myarray = [456, 234, 986]



//arr.push(...items) – adds items to the end,
//arr.pop() – extracts an item from the end,
//arr.shift() – extracts an item from the beginning,
//arr.unshift(...items) – adds items to the beginning.


myarray.push(621)

console.warn(myarray)

console.log(`USING POP -->`,myarray.pop())

console.log(`USING SHIFT -->`,myarray.shift())

console.log(`USING UNSHIFT -->`,myarray.unshift(111))

console.warn(myarray)


//splice

// only removal with splice

demoArray = ["pune","kochi","ranchi","guwahati"]


demoArray.splice(1,2) // (starting index, no.of elements)

console.log(demoArray)

// removal and updation


demoArray.splice(1,1,"dimapur","amravati")
// (starting index, no.of elements, adding new elements)

console.log(demoArray)

// gettind removed elements

let removedElements = demoArray.splice(2,1)

console.log(removedElements)


// only adding elements

demoArray.splice(1,0,"indore","panji")

console.log(demoArray)

//using -ve in splice

demoArray.splice(-1,0,"rajkot")

console.log(demoArray)


// slice

let testArray = ["tennis","football","chess","boxing","karate"]


let abcd = testArray.slice(1,4)

console.log(abcd)
console.log("-----------------------------",testArray)


//concat

let test2Array = [1,2,3,4]
let test3Array = [5,6,7]

 console.log (test2Array.concat(test3Array))