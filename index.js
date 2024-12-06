// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for the  project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is your project under?',

        type: 'input',
        name: 'GitHub',
        message: 'Enter GitHub username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter email'
    },
];

//ask user for inputs
inquirer.prompt(questions).then((answers) => {
    //make content for the README.md
    const readmeContent =  `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.tests}
    
    ## License
    ${answers.license} license

    ## Questions
    GitHub: https://github.com/${answers.GitHub}
    Email: ${answers.Email} This is my email feel free to reach out to me with any questions.
    `;


// TODO: Create a function to write README file
    writeFile('README.md', readmeContent, (err) => {
    if (err) {
        console.log('error creating README.md', err);
    } else {
        console.log('README.md has been generated');
    }
    });
    });