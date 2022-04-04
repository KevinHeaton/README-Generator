// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your current email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intall',
            message: 'What are the steps required to install your project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter how to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for how to use your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please explain how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide guidelines for how to contribute your project. (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please explain how to contribute to your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions for how to test your project. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please explain how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to attach to your project? (Required)',
            choices: ['None', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            default: [0]
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'What would you like to name your README? (required)',
            validate: fileNameInput => {
                if (fileNameInput) {
                    return true;
                } else {
                    console.log('Please name your README!');
                    return false;
                }
            }
        }
    ]);
};

const mockData = {
    title: 'README Generator',
    github: 'KevinHeaton',
    email: 'williamkevinheaton@gmail.com',
    description: 'Automatically generates a professional README file for your project.',
    install: 'This is how you install this project.',
    usage: 'This is how you use this project.',
    contribution: 'This is how you contribute to this project.',
    test: 'This is how to test it.'
};

// const fileName = 'README.md';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log('Your README has been created!'));
};
// TODO: Create a function to initialize app

async function init() {
    let answers = await questions();
    writeToFile((answers.fileName), (generateMarkdown(answers)));
};

//const readMe = questions(questionData);

// Function call to initialize app
init();



// questions()
// .then(questionData => {
//     return generateMarkdown(questionData);
// })
// .then(readMe => {
//     return writeToFile(readMe);
// })
