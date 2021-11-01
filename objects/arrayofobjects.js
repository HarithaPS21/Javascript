var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:10000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]

// print cash payment bill details
const cash_transaction = bill_details.filter(transaction => transaction.payment_type=="cash")
console.log(cash_transaction);

// print transaction made on 17-09-2021
const transaction_date = bill_details.filter(transaction => transaction.date=="17-09-2021")
console.log(transaction_date);

// print costliest cash transaction
const costly_cash_transaction = cash_transaction.reduce((trans1,trans2) => trans1.amount>trans2.amount ? trans1 : trans2)
console.log(costly_cash_transaction);

// is there any transaction made on 20-09-2021
var is_made = bill_details.some(transaction => transaction.date=="20-09-2021")
console.log(is_made);