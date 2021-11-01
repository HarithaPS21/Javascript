var employees = [
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]

// print employee names only

console.log("Employees are : ")

for (let employee of employees){
    var id = employee[0]
    var name = employee[1]
    var salary = employee[2]
    var dept = employee[3]
    var joining_yr = employee[4]
    var leaving_yr = employee[5]

    console.log(name)
    
}

// print developer details

console.log("Developers are : ")

for (let employee of employees){
    var id = employee[0]
    var name = employee[1]
    var salary = employee[2]
    var dept = employee[3]
    var joining_yr = employee[4]
    var leaving_yr = employee[5]

    if (dept=="developer"){
        console.log(employee)
    }
    
}

// print highest salary
var max_salary = employees[0][2]
var min_salary = employees[0][2]
for (let employee of employees){
    var id = employee[0]
    var name = employee[1]
    var salary = employee[2]
    var dept = employee[3]
    var joining_yr = employee[4]
    var leaving_yr = employee[5]

    if (salary > max_salary){
        max_salary = salary
    }
    else if(salary < min_salary){
        min_salary = salary
    }
   
}
console.log("Highest salary is " + max_salary)
console.log("Least salary is " + min_salary)







// print lowest salary
var min_salary = employees[0][2]

for (let employee of employees){
    var id = employee[0]
    var name = employee[1]
    var salary = employee[2]
    var dept = employee[3]
    var joining_yr = employee[4]
    var leaving_yr = employee[5]

    if (salary < min_salary){
        min_salary = salary
    }
}
// console.log("Least salary is " + min_salary)

