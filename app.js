const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;
// const pageHTML = generatePage(portfolioData);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } 
                else {
                  console.log('Please enter your name!');
                  return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } 
                else {
                  console.log('Please enter your GitHub Username!');
                  return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    
    console.log(`
=================
Add a New Project
=================
`);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } 
            else {
              console.log('Please enter a project name!');
              return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } 
            else {
              console.log('Please enter a description!');
              return false;
            }
        }    
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you complete this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } 
            else {
              console.log('Please enter the GitHub link to your project!');
              return false;
            }
        }    
    },
    {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
    },
    {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } 
    else {
      return portfolioData;
    }
  });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => console.log(portfolioData));


// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });



  // const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);