// arrays - same as list in python
// define using []
// possible to store different types of objects (heterogeneous)
var arr = [10,20,30,40,"hello",true];
console.log(arr[0]);   // access elements using index
// class Array{
//     length;
//     push(){

//     }
//     pop(){

//     }
// }
arr.push(100)
arr.push(200)
console.log(arr)
arr[1] = 300;
// linked list for inserting element at a particular position , not array
for(let num of arr){
    console.log(num);
}