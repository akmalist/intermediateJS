 We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

let sumAll = function range(start, end) {
  var myArray = [];
  for (var i = start; i <= end; i += 1) {
    myArray.push(i);
  }
  return myArray.reduce(add);

function add(accumulator, a) {
    return accumulator + a;
}
// console.log(sum);
};
 
sumAll(1,4)

sumAll([1, 4]) should return 10. 
 
