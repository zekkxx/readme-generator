// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Testing](#testing)
* [Usage](#usage)
* [Contributing](#contributing)
* [Technologies](#technologies)
* [License](#license)
* [Contact](#contact)

## Installation
${data.installation}

## Testing
${data.testing}

## Useage
${data.usage}

## Contributing
${data.contributing}

## Technologies
${data.technologies}

## License
${data.license}

## Contact
${data.contact}
`;
}

module.exports = generateMarkdown;
