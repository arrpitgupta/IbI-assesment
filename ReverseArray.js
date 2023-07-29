//Use Array.reduce() method to reverse the following given array

//const arr = [1, 2, 3, 4, 5];
//To reverse the given array using the Array.reduce() method, you can iterate through the elements of the array in reverse order and accumulate them into a new array. 
//Here's how you can do it:

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((accumulator, currentValue) => {
  return [currentValue, ...accumulator];
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
