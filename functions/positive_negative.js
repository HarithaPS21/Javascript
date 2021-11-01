// var is_positive = num => num>0?true:false
var is_positive = num => num>0?true:num<0?false:"zero"
console.log(is_positive(10))
console.log(is_positive(-10))
console.log(is_positive(0))