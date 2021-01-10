const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer.prompt([
    {
        type: "input",
        message: "Enter your Github username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email"
    },
    {
        type: "input",
        message: "Enter your project's title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description"
    }, {
        type: "list",
        message: "What type of license should your project have?",
        name: "license",
        choices: ["MIT", "Creative Commons", "BSD"]
    }, {
        type: "input",
        message: "What command should be used to run tests?",
        name: "command"
    }, {
        type: "input",
        message: "Enter what the user needs to know about using the repository",
        name: "know"
    }, {
        type: "input",
        message: "Enter what the user needs to know about contributing to the repository?",
        name: "contribute"
    }
]).then(data => {
    fs.writeFile(`sampleREADME.md`, generateMarkdown(data), err  => err ? console.error(err) : console.log('Success!'));
}).catch(err => {
    console.log(err);
});
function user(data) {
    return `
    # ${
        data.title
    }

    ### ${
        data.username
    }

    ### ${
        data.email
    }

    ## Description

    ${
        data.description
    }
    ## Installation

    ${
        data.install
    }

    ## Usage License

    ${
        data.license
    }

    ## Command

    ${
        data.command
    }

    ## What You Need to Know

    ${
        data.know
    }
    
    ## Contributions

    ${
        data.contribute
    }
    `
}
