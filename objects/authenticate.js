var accounts = {
    1001: {
        acno: 1001, password: "userone", balance: 5000, transactions:
            [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1002: {
        acno: 1002, password: "usertwo", balance: 7000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1003: {
        acno: 1003, password: "userthree", balance: 8000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1002, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1004: {
        acno: 1001, password: "userone", balance: 9000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
}


function validateAccountNumber(accno) {
    return accno in accounts ? true : false
}

function authenticate(accno,password) {
    if (validateAccountNumber(accno)) {
        let pwd = accounts[accno].password
        if (password==pwd) {
            console.log("Access granted");
        }
        else{
            console.log("incorrect password");
        }
    }
    else{
       console.log("invalid account"); 
    }
}

function getDebitTransactions(accno) {
    if (validateAccountNumber(accno)) {
        let transactions = accounts[accno]["transactions"]
        console.log(transactions);
    }
    else{
        console.log("invalid account number");
    }
}

authenticate(1001,"userone")
authenticate(1001,"usertwo")
authenticate(1005,"usertwo")

getDebitTransactions(1001)
getDebitTransactions(1005)