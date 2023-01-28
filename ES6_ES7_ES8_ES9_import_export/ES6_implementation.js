

//let and const keyword

let nameOfStudent = `NIRAJ`

const  nameOfGuide = `OMKAR`
// cannot reassign values declared by const keyword

//nameOfGuide = `JITENDRA`


console.log(`YOUR GUIDE NAME IS ${nameOfGuide}....`)

//using input directly with ${} is akso ES6 feature



// for of loop

let arrayOfNations = ['Afghanistan', 'Albania', 'Algeria']


for (Nation of arrayOfNations){

    console.log(Nation)
} 


// Arrow function 

let sum = (a,b) => {
    console.log(`ADDITION OF ${a} AND ${b} is `, a + b )
}


sum(2,4)


// class implementation

class Car{
    constructor(color){
        this.color = color
    }

     showColor (){

        console.log(`YOUR CAR COLOR IS ${this.color}`)
    }
}



let car = new Car(`GREEN`)

car.showColor()


// spread operator


let arr = [`DHULE`,`SENDHWA`,`NARDANA`]

let arr2 = [...arr,`MALPUR`]

console.log(arr2)


// destructuring array

let [a,b,c,d] = arr

console.log(c)

console.log(arr2)

//  destructuring objects

let info = {id : 234,
            age : 46,
            department : `hr`,}

let {id : p ,age,department} = info

console.log(p)
console.log(age)
console.log(department)