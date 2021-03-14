const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("./generateHtml");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { inheritInnerComments } = require('@babel/types');

const teamMembers = [];

const promptManager = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?',
    },
    {
      type: 'input',
      name: 'office-number',
      message: 'What is the managers office number?',
    },

//once make a new intern pass all info to an array
//pass all array info to html to generate

  ]).then((data) => {
    //make a new instance of manager
    const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
    //add mgr to a list of employees
    teamMembers.push(newManager); 
    //calls a function that takes us to prompt for the rest of the team
    createTeamMembers();

  })

const createTeamMembers = () => {
  inquirer.prompt([
    {
        type: 'list',
        name: 'teamMembers',
        message: 'Which types of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Done adding employees'],
      },
  ]) .then((data) => {
    //if engineer then ask these questions
    const choice = data.teamMembers;
    switch(choice){
      case 'Engineer':
        return engineerQuestions();
      case 'Intern':
        return internQuestions();
      case 'Done adding employees':
        return console.log(teamMembers);
      };
    })
  }
  

const engineerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineers id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineers email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the Engineers github username?',
    },
  ]).then((data) => {
    //make a new instance of manager
    const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
    //add engineer to a list of employees
    teamMembers.push(newEngineer);
    createTeamMembers();
})
};

const internQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Interns name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Interns id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Interns email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the Interns school?',
    },
  ])
  .then((data) => {
    //make a new instance of manager
    const newIntern = new Intern(data.name, data.id, data.email, data.school);
    //add engineer to a list of employees
    teamMembers.push(newIntern);
    createTeamMembers();
    //console.log(teamMembers);
})

};




promptManager();

//function that builds rest of team
//ask what type of member want to add, then send taht info to dif functions based on which one it is
//each of those has different prompts 
//capture  those in .then function like line 37 
//then send all that info to the html where you want it to go

//how to write to html 
// .then((data) => {
//   fs.writeFileSync('index.html', generate(data));
// })