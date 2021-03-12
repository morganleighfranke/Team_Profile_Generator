const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        return 'put in link to github';
    }

    getRole(){
        return 'Manager';
    }
}