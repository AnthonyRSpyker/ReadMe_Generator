// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const generateMarkdown = require("./utils/generateMarkdown.js");

//const licenseChoice = []
// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project"
    },
    {
        type: 'input',
        name: "install",
        message: "What is the installation instructions"
    },
    {
        type: 'input',
        name: "usage",
        message: "What is the usage information"
    },
    {
        type: 'input',
        name: "contribute",
        message: "What are the Contribution guidelines"
    },
    {
        type: 'input',
        name: "test",
        message: "What are the test instructions"
    },    
    {
        name: "licensequestion",
        type: "list",
        message: "Choose your liscence",
        choices:["Apache 2.0", "Boost Software 1.0", "BSD 3-clause License", "BSD 2-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", " Attribution License (BY)", " Opend Database License (ODbl)", "Public Domain Dedication and License (PDDL)", "The Perl License", "the Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The What the Fuch You Want to Public License", "The zlib/libpng License", "none"]
    },
    {
        type: "disctritption",
        name: "licensecolor",
        message: "What color would you like your liscence badge to be?"
    },    
    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email adress?"
    },
])
.then((data) => {
    const licenseBadge = data.licensequestion;
    const licenseColor = data.licensecolor
    const licenseRender = `https://img.shields.io/badge/license-${licenseBadge}-${licenseColor}`

   writeToFile(
       `# ${data.title}


       [![License](${licenseRender})]
       (https://opensource.org/licenses/${licenseBadge})
       
       
       ## ${data.install}
       
       ## ${data.usage}
       
       ## ${data.contribute}
       
       ## ${data.test}
       
       ## ${data.username}
       
       ## ${data.email}
       `
   )
});

// TODO: Create a function to write README file
questions();
function writeToFile(content) {
    fs.writeFile("README.md", content, (err) =>
    err ? console.error(err): console.log("Success!"))
}

// TODO: Create a function to initialize app
// function init() {}
// const init = async () => {
//     console.log('hi');
//     try {
//       const answers = await questions;
  
//       const readMe = markDown(license);
  
//       await writeFileAsync('README.md', license);
  
//       console.log('Successfully wrote to index.html');
//     } catch (err) {
//       console.log(err);
//     }
//   };
// Function call to initialize app
//init();
