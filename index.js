import inquirer from "inquirer";
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter you sentence to count the word:"
});
const words = answers.sentence.trim().split(" ");
console.log(words);
// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
