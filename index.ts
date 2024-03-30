#! /usr/bin/env node
// write a program ToDo List
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue("Welcome to Todo List"));
let todoList: string[] = [];
async function askQuestion() {
  
    let answers: { todo: string; confirm: boolean; } = await inquirer.prompt([
    
    {  type: "input", name: "todo", message: "Enter your todo: ",  },
    
    { type: "confirm", name: "confirm", message: "Do you want to add more todo?", default: false, },]);
  
    let { todo, confirm } = answers;
    
  todoList.push(todo);
  if (confirm) {
    await askQuestion();
  } else {
    console.log(chalk.bgGreen("Your todo list: "));
    todoList.forEach((todo) => { console.log(todo); });
  }
}
await askQuestion();
