// sort()  - sorts array in ascending/descending order

var arr = [10,20,30,40]
arr.sort()   // partially sort the array

// arr.sort((num1,num2) => (num1<num2?-1:1))   // sort array in ascending order
arr.sort((num1,num2) => num1<num2?num1-num2:)
console.log(arr)

arr.sort((num1,num2) => num1<num2?1:-1)
console.log(arr)