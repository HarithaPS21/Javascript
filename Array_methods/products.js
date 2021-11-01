// reduce()  - returns a single value   ,  only with numbers    eg : sum,max,min
var products=[
    [100,"oreo",40,50], 
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
    [101,"gooday",20,70],
    [101,"parle",20,70],
    [106,"treat",30,10],


]

// print the no. of items in products
var items = products.length
console.log(items)

// print details of available items
var avail_items = products.filter(item => item[3] > 0 )
console.log(avail_items)

products.sort((item1,item2) => item2[3] - item1[3])
console.log(products)

// costly item
var costly_item = products.reduce((item1,item2) => item1[2] > item2[2]?item1:item2)
console.log(costly_item)

// least expensive item
const low_cost_item = products.reduce((item1,item2) => item1[2] < item2[2]?item1:item2)
console.log(low_cost_item)

// const low_cost_item = products.reduceRight((item1,item2) => item1[2] < item2[2]?item1:item2)
// console.log(low_cost_item)

// var low_cost_items = products.filter(item => item[2]<lo)

// print treat details
var treat_details = products.find(item => item[1]=="treat")
console.log(treat_details)

var treat = products.filter(item => item[1]=="treat")
console.log(treat)

// is there any item available under rs 10
var is_available_under_10 = products.some(item => item[2]<10)
console.log(is_available_under_10)



