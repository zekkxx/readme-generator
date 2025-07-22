const generateMarkdown = (data) => {
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

export default generateMarkdown;
