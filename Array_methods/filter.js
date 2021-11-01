// filter() - used when some values from the input array has to be selected  
//        - returns a list of selected numbers
//          eg: all even numbers in an array
var arr = [10,2,4,9]

var evens = arr.filter(num => num%2==0)    // list of all  even numbers in arr
console.log("Even numbers in arr : ", evens)

var odds = arr.filter(num => num%2!=0)    // list of all odd numbers in arr
console.log("Odd numbers in arr : ", odds)

// var primes = arr.filter(num => )