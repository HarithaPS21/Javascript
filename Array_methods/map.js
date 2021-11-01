// map() - used when each input has a corresponding output    eg: all employee names
//     - returns an array of mapped values
var arr = [10,2,4,9]

var squares = arr.map(num => num**2)  // array of squares of all numbers in array
console.log(squares)

var cubes = arr.map(num => num**3)    // array of cubes of all numbers in array
console.log(cubes)

var addnum = arr.map(num => num+10)   // 10 added to all numbers in array
console.log(addnum)