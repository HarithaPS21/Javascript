var arr = [10,20,30,33]
// arr.filter(num => num%2==0).forEach(num => console.log(num))
arr.forEach(num => {
    if (num%2==0) {
        console.log(num);
    }
})