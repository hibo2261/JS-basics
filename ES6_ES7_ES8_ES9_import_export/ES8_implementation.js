

// async / await

function demoFunction() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncFunction() {
    console.log('calling.....');
    const result = await demoFunction();
    console.log(result);

  }
  
  asyncFunction();


  // .entries()

  let demoObject = {

    id : 24,
    div : `BA`,
    salary : 4500
  }
   
     console.log(Object.entries(demoObject))


     for (var [key, val] of Object.entries(demoObject)) {
        console.log(key, val);
    }


    // .values

    var demoObject2 = {
        om: 10,
        neha: 20,
        dinesh: 30,
        ramesh: 40
    }
    
   console.log( Object.values(demoObject2) )
    