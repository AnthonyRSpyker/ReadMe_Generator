// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js")
const licenseChoice = []
// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project"
    },
    {
        type: 'input',
        name: "discription",
        message: "Discription: Mention; installation instructions, usage information, contribution guidelines, and test instructions"
    },
    {
        name: "licensequestion",
        type: "list",
        message: "Choose your liscence",
        choices:["Apache 2.0", "Boost Software 1.0", "BSD 3-clause License", "BSD 2-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", " Attribution License (BY)", " Opend Database License (ODbl)", "Public Domain Dedication and License (PDDL)", "The Perl License", "the Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The What the Fuch You Want to Public License", "The zlib/libpng License", "none"]
    },
    {
        type: "disctritption",
        name: "liscencecolor",
        message: "What color would you like your liscence badge to be?"
    },    
    {
        type: "input",
        name: "name",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your email adress?"
    },


]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}
const init = async () => {
    console.log('hi');
    try {
      const answers = await questions;
  
      const readMe = markdown(data);
  
      await writeFileAsync('README.md', data);
  
      console.log('Successfully wrote to index.html');
    } catch (err) {
      console.log(err);
    }
  };
// Function call to initialize app
init();
