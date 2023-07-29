//Callback hell, also known as the pyramid of doom, is a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. 
//This occurs when you have many asynchronous functions or API calls that depend on the results of each other, leading to deeply nested and hard-to-read code. 
//Callback hell can make the code difficult to understand, debug, and maintain.
//example:

asyncFunction1((result1) => {
  // Handle result1
  asyncFunction2((result2) => {
    // Handle result2
    asyncFunction3((result3) => {
      // Handle result3
      // More nested callbacks...
    });
  });
});
//To solve callback hell, there are several approaches available in modern JavaScript.
// 1. USING PROMISES

asyncFunction1()
  .then((result1) => {
    // Handle result1
    return asyncFunction2();
  })
  .then((result2) => {
    // Handle result2
    return asyncFunction3();
  })
  .then((result3) => {
    // Handle result3
    // ...
  })
  .catch((error) => {
    // Handle errors
  });

// 2. USING ASYNC/AWAIT
async function asyncOperations() {
  try {
    const result1 = await asyncFunction1();
    // Handle result1
    const result2 = await asyncFunction2();
    // Handle result2
    const result3 = await asyncFunction3();
    // Handle result3
    // ...
  } catch (error) {
    // Handle errors
  }
}

asyncOperations();

//3. Using Promisify and Async/Await:
const util = require('util');
const asyncFunction1Async = util.promisify(asyncFunction1);
const asyncFunction2Async = util.promisify(asyncFunction2);
const asyncFunction3Async = util.promisify(asyncFunction3);

async function asyncOperations() {
  try {
    const result1 = await asyncFunction1Async();
    // Handle result1
    const result2 = await asyncFunction2Async();
    // Handle result2
    const result3 = await asyncFunction3Async();
    // Handle result3
    // ...
  } catch (error) {
    // Handle errors
  }
}

asyncOperations();
