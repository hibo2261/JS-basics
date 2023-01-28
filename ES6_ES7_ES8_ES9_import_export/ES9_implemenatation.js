
// promise finally

function testFunction() {
    return new Promise((resolve,reject) => resolve())
  }
  
  testFunction()
  .then(() => console.log("promise is resolved"))
  .finally(() => console.log("finally excuted"))
  
  

  // Async iterator

  function asyncIterator() {
    const array = [1,2,3,4];
    return {
      next: function() {
        if (array.length) {
          return Promise.resolve({
            value: array.shift(),
            done: false
          });
        } else {
          return Promise.resolve({
            done: true
          })
        }
      }
    }
  }
  
  var iterator = asyncIterator();
  
  (async function() {
      await iterator.next().then(console.log) 
      await iterator.next().then(console.log)  
      await iterator.next().then(console.log) 
      await iterator.next().then(console.log)
      await iterator.next().then(console.log)
  })()

