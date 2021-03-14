const generateHtml = (teamMembers) => {
  const teamObject = teamMembers;

  //build out the html to look how you want it to using bootstrap
  console.log(teamObject);
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <script src="jquery-3.5.1.min.js"></script>
      <script src="./script.js"></script>
      <title>Team Profile</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Team Profile</h1>
      </div>
    </div>
 
    
       
  
    </body>
    </html>`;
}


module.exports = generateHtml;