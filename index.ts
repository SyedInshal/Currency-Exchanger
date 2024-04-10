#! /usr/bin/env node

import {log} from 'console';
import inquirer from 'inquirer'

let currencyconvertor ={
    "USD": {
        "USD":1,
        "EUR":0.92,
        "PKR":278
    },
    "EUR": {
        "USD":1.08,
        "EUR":1,
        "PKR":300
    },
    "PKR":{
        "USD":0.0036,
        "EUR":0.0033,
        "PKR":1
    },
}

const answer : {
    from:"USD" | "EUR" | "PKR",
    to:"USD" | "EUR" | "PKR",
    amount : number,

} = await inquirer.prompt(
    [
        {
            name:"from",
            message: "enter your currency which you want to convert?",
            type: "list",
            choices: ["USD", "EUR" , "PKR"]
        },
        {
            name: "to",
            message: "select which currency convert?",
            type:"list",
            choices:["USD", "EUR", "PKR"]

        },
        {
            name:"amount",
            message:"enter your amount in numbers",
            type: "number",
            choices:["USD" , "EUR", "PKR"]
        }
    ]

)

const {from,to,amount} = answer;

//conversion

if(from && to && amount){
    let result =currencyconvertor[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result} `)
}else {
    console.log("invalid operator selected")
};