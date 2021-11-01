var employees = [
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]

// print all employee names   -   map()
var employee_names = employees.map(emp => emp[1])
console.log(employee_names)

// print all developers    -   filter()
var developers = employees.filter(emp => emp[3]=="developer")
console.log(developers)

// print all employees whose salary>30000    -  filter()
var high_paid_emp = employees.filter(emp => emp[2]>30000)
console.log(high_paid_emp)

// print employee details whose exp >10
var senior_employees = employees.filter(emp => (emp[5] - emp[4])>10)
console.log(senior_employees)

// sort employees based on salary
employees.sort((emp1,emp2) => emp1[2]<emp2[2]?-1:1)    // lowest to highest salary
console.log(employees)  

employees.sort((emp1,emp2) => emp1[2]<emp2[2]?1:-1)   // highest to lowest salary
console.log(employees)