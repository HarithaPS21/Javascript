var arr = [10,20,10,20,21,22] ;
var uniques = [] ;
// count = 0 ;

console.log("Duplicates in array : ")

for(var num of arr){
    if (!(num in uniques)){

        uniques.push(num)
        console.log(uniques)
        // count++
    }
    else{
        console.log(num)
    }
}

