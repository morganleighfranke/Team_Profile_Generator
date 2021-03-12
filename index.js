const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require("./generateHtml")

const promptUser = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }
]);


function init() {
    promptUser().then((answers) => {
    try {
      const teamHtml = generateHtml(answers)
    
      fs.writeFileSync('team.html', teamHtml);
      console.log('Successfully wrote to team.html');
    } catch (error) {
      console.log(error);
    }
  });}

init();
