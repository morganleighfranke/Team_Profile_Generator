const generateHtml = teamMembers => {
    const createManager = Manager => {
        return `<div class="card text-white bg-info mb-3" style="max-width: 18rem; padding: 50px 50px 50px 50px;">
        <div class="card-header">Name: ${Manager.getName()}</div>
          <ul class="list-group list-group-flush">
                        <li class="list-group-item" class="id" style="color: black;">Role: ${Manager.getRole()}</li>              
                        <li class="list-group-item" class="id" style="color: black;">ID: ${Manager.getId()}</li>
                        <li class="list-group-item" class="email" style="color: black;"> Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>                    
                        <li class="list-group-item" class="officeNum" style="color: black;">Office number: ${Manager.getOfficeNumber()} </li>
          </ul> 
      </div>`
    };

    const createEngineer = Engineer => {
      return `<div class="card text-white bg-success mb-3" style="max-width: 18rem; padding: 50px 50px 50px 50px;">
      <div class="card-header">Name: ${Engineer.getName()}</div>
        <ul class="list-group list-group-flush">
                      <li class="list-group-item" class="id" style="color: black;">Role: ${Engineer.getRole()}</li>              
                      <li class="list-group-item" class="id" style="color: black;">ID: ${Engineer.getId()}</li>
                      <li class="list-group-item" class="email" style="color: black;"> Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>                    
                      <li class="list-group-item" class="officeNum" style="color: black;"><a href="https://github.com/${Engineer.getGitHub()}">GitHub:${Engineer.getGitHub()}</a></li>
        </ul> 
    </div>`
    }

    const createIntern = Intern => {
      return `<div class="card text-white bg-warning mb-3" style="max-width: 18rem; padding: 50px 50px 50px 50px;">
      <div class="card-header">Name: ${Intern.getName()}</div>
        <ul class="list-group list-group-flush">
                      <li class="list-group-item" class="id" style="color: black;">Role: ${Intern.getRole()}</li>              
                      <li class="list-group-item" class="id" style="color: black;">ID: ${Intern.getId()}</li>
                      <li class="list-group-item" class="email" style="color: black;"> Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>                    
                      <li class="list-group-item" class="officeNum" style="color: black;">School: ${Intern.getSchool()} </li>
        </ul> 
    </div>`
    }

    const htmlArray = [];

    htmlArray.push(teamMembers.filter(employee => employee.getRole()=== 'Manager').map(manager => createManager(manager)));
    htmlArray.push(teamMembers.filter(employee => employee.getRole()=== 'Engineer').map(engineer => createEngineer(engineer)));
    htmlArray.push(teamMembers.filter(employee => employee.getRole()=== 'Intern').map(intern => createIntern(intern)));

    return htmlArray.join('');
}
module.exports = team => {
  return `
  
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>Team Members</title>

</head>

<body>
<div class="jumbotron jumbotron-fluid">
       <div class="container">
         <h1 class="display-4">Team Profile</h1>
       </div>
    </div>

  <div style="margin-top: 50px; margin-side: 50px;">
      <div class="row">
      ${generateHtml(team)}
      </div>
  </div>



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"></script>


</body>

</html>
  
  
  `
}




















// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');

// const generateHtml = (teamMembers) => {
//   const teamObject = teamMembers;

//   //build out the html to look how you want it to using bootstrap
//   console.log(teamObject);
//   return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
//       <script src="jquery-3.5.1.min.js"></script>
//       <script src="./script.js"></script>
//       <title>Team Profile</title>
//     </head>
//     <body>
//     <div class="jumbotron jumbotron-fluid">
//       <div class="container">
//         <h1 class="display-4">Team Profile</h1>
//       </div>
//     </div>

//     <div>
//       ${Manager}
//     </div>
 
    
       
  
//     </body>
//     </html>`;
// }


// module.exports = generateHtml;