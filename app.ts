#! /usr/bin/env node

import inquirer from 'inquirer';

// initilize user balance and pin code
let myBalance = 50000;
let myPin = 1234;

console.log("wellcome to rizwanali2202 ATM - machine");

let pinAnswer = await inquirer.prompt([
    {
        name : 'pin',
        type : 'number',
        message: 'Enter your PIN code',
    }
])
if (pinAnswer.pin === myPin){
    console.log('PIN is currect, login successfully');
    // console.log(`your current balance is ${myBalance}`)

let operationAns = await inquirer.prompt([
        {
            name : 'operation',
            type : 'list',
            message : 'Select your Operation',
            choices : ['withdraw ammount', 'Check balance']
        }
    ])

 if (operationAns.operation === "withdraw ammount"){
    let ammountAns = await inquirer.prompt([
        {
            name : "amount",
            type : "number",
            message : "Enter to ammount withdraw"
        }
    ])
        if(ammountAns.amount > myBalance){
            console.log("Insufficient balance");
        }
        else{
            myBalance -= ammountAns.amount;
            console.log(`${ammountAns} withdraw successfully`);
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
     else if(operationAns.operation === "Check balance") {
        console.log(`your current balance is ${myBalance}`)
    }
}
else {
    console.log("PIN is incorrect, try again");
}