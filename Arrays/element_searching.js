var arr = [10,20,30,40]
var element = 20 ;
var flag = 0 ;

for(let num of arr){
    if (num==element){
        flag++
        break
    }
}

console.log(flag==0?"Element not found":"Element found")