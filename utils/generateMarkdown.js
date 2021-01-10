// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "https//license.com";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `## ${
        data.title
    }
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="## Description">Description</a>
    </li>
    <li>
     <a href="## How to Use">How to Use</a>
    </li>
    <li>
     <a href="## Contact">Contact Me</a>
    </li>
    <li>
     <a href="## License">License</a>
    </li>
  </ol>
</details>

## Description
${
        data.description
    }

## How to Use

In order to run tests, you must use this command: ${
        data.command
    }

In order to contribute to ${
        data.title
    }, you must follow these steps:
${
        data.contribute
    }

## Contact

If you would like to contact me, please email me at: ${
        data.email
    }.

You may also head to my GitHub profile to view my projects. Find me on GitHub as: ${
        data.username
    }

## License

${
        data.license
    }

This generator uses the following license: [${
        data.license
    }](${
        renderLicenseLink(data.license)
    }).
`;
}

module.exports = generateMarkdown;
