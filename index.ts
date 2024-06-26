#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a any number

// 2) user input for guessing number

// 3) compare user input with computer generated number and get output

const randomNumber = Math.floor(Math.random() *10 +1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess number between 1-10: ",
    },
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you are correct.")
}else {
    console.log("you have guessed wrong number")
}