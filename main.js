#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Print Welcome Message
console.log(chalk.magentaBright("\n \t Welcome to Code With Malaika Quiz-System \n\t"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "\n Q1.What is the correct values to check if two values are not equal in Typescript?\n",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "\n Q2.Which of the following character is commonly allowed in variable names in Typescript?\n",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "\n Q3.Which operator is commonly used for string concatenation in Typescript?\n",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "\n Q4.In Typescript,which symbol is commonly used to terminate a statement?\n",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "\n Q5.Which method of Inquirer i.js is ued to start the prompt interface and receive user input?\n",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.blue("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("1. Incorrect!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.blue("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.blue("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("3. Incorrect!"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.blue("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("4. Incorrect!"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.blue("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("5. Incorrect!"));
}
console.log(`\n Score: ${score}`);
