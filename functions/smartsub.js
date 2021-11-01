function smartSub(num1,num2){
    return num1>num2?num1-num2:num2-num1
}
console.log(smartSub(20,10))
console.log(smartSub(10,20))

// arrowfunction for smartSub
var smartSub = (num1,num2) => num1>num2?num1-num2:num2-num1
console.log(smartSub(20,10))
console.log(smartSub(10,20))