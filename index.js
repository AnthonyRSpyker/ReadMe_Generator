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
        choices:["Apache2.0", "BoostSoftware1.0", "BSD-3--Clause", "BSD2--Clause", "EPL1.0", "GPLv3", "GPLv2", "AGPLv3", "LGPLv3", "FDLv1.3", "IPL1.0", "ISC", "MIT", "MPL2.0", "ODC_BY", "ODbl", "PDDL", "Perl", "Artistic2.0", "OFL1.1", "Unlicense", "WTFPL", "Zlib", "none"]
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
    {
        type: "input",
        name: "acknowledge",
        message: "Would you like to acknowledge or that any one?"
    }
])
.then((data) => {
    const licenseBadge = data.licensequestion;
    const licenseColor = data.licensecolor
    const licenseRender = `https://img.shields.io/badge/license-${licenseBadge}-${licenseColor}.svg`

   writeToFile(
   `# ${data.title}


       ![License](${licenseRender})
       (https://opensource.org/licenses/${licenseBadge})
       
       
   ## Installation
       
       ${data.install}
       
   ## Usage details
       
       ${data.usage}
       
   ## Contributions
       
       ${data.contribute}
       
   ## Testing
       
       ${data.test}
       
   ## Acknowledgements

       ${data.acknowledge}
    
   ## Git Hub
       
       ${data.username}
       
   ## Email address.
       
       ${data.email}
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
