//  We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

 

// let sumAll = function range(start, end) {
//   var myArray = [];
//   for (var i = start; i <= end; i += 1) {
//     myArray.push(i);
//   }
//   return myArray.reduce(add);

// function add(accumulator, a) {
//     return accumulator + a;
// }
// // console.log(sum);
// };
 
// function(a,b){
//  (b-a+1) * (a + b)  / 2
// }

// let sumAll = function(nums) {
//   var a = nums[0];
//   var b = nums[1];
//   return (b-a+1) * (a+b) / 2;
// };

// a is the first number and b the 2nd
// let sumAll = function range(array) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   var myArray = [];
//   for (var index = 0; index <= array[1]; index++) {
//     myArray.push(index);
//   }
//   return myArray.reduce(reducer);
// }



// let sumAll = function range(array) {
//     var max = getMax(array)
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   var myArray = [];
//   for (var index = 0; index <= max; index++) {
//     myArray.push(index);
//   }
//   return myArray.reduce(reducer);
// }

// let sumAll = function(nums) {
//   var a = nums[0];
//   var b = nums[1];
//   return (Math.abs(b-a)+1) * (a+b) / 2;
// };

 
// function getMax(numArray) {
//   return Math.max.apply(null, numArray);
// }
// function getMin(numArray) {
//   return Math.min.apply(null, numArray);
// }

// let sumAll = function range(array) {
//     var max = getMax(array);
//     var min = getMin(array);
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     var myArray = [];
//     for (min; min <= max; min++) {
//       myArray.push(min);
//     }
//     return myArray.reduce(reducer);
// }


// sumAll([1, 4])


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// You have to use the arguments object.

function destroyer(arr) {
  const  result  = Array.prototype.slice.call(arguments);
  const [first, ...rest] = result;

  const fileList = first.filter(function(event) {
  return rest.indexOf(event) ===-1;
 })

 return fileList;
}
  
destroyer  ([1, 2, 3, 5, 1, 2, 3], 2, 3)

  
 
