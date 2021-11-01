
function isEven(num){
    // if (num%2==0){
    //     return true
    // }
    // else{
    //     return false
    // }
    return num%2==0?true:false   // ternary operator for if else
}

console.log(isEven(3))
console.log(isEven(10))

// arrow function
var is_even = num => num%2==0
console.log(is_even(20))