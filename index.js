// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        "type": "input",
        "message": "What is the title of your project?",
        "name": "title"
    },
    {
        "type": "input",
        "message": "Describe your project:",
        "name": "description"
    },
    {
        "type": "input",
        "message": "How would someone install your project?",
        "name": "installation"
    },
    {
        "type": "input",
        "message": "How would someone test your project?",
        "name": "testing"
    },
    {
        "type": "input",
        "message": "How does someone use your project?",
        "name": "usage"
    },
    {
        "type": "input",
        "message": "contributing",
        "name": "contributing"
    },
    {
        "type": "input",
        "message": "technologies",
        "name": "technologies"
    },
    {
        "type": "list",
        "message": "What license is your project using?",
        "name": "license",
        "choices": [
            "GNU GPL 3.0",
            "MIT",
            "Unliscense",
            "None"
        ]
    },
    {
        "type": "input",
        "message": "contact",
        "name": "contact"
    },
];

// TODO: Create a function to write README file
function writeToFile(folderName, data) {
    // console.log(process.cwd());
    // const myDir = process.cwd();
    // console.log(__dirname);
    const myDir = __dirname;
    if(!fs.existsSync(myDir+"/dist")){
        fs.mkdirSync(myDir+"/dist");
    }
    if(!fs.existsSync(myDir+"/dist/"+folderName)){
        fs.mkdirSync(myDir+"/dist/"+folderName);
    }
    fs.writeFileSync(
        myDir+"/dist/"+folderName+"/readme.md", //this is the path to file
        generateMarkdown(data) // this is the data of the file
    );
    console.log("File Written. Please check the distribution folder");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile(answers.title, answers);
        })
        .catch(err => {
            console.error(err);
        })
}

// Function call to initialize app
init();
