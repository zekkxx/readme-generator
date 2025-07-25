const generateMarkdown = (data) => {
  const {
    contact,
    contributing,
    description,
    features,
    installation,
    license,
    roadmap,
    technologies,
    testing,
    title,
    usage
  } = data;

  const titleMarkdown = `# ${title}\n${description? `${description}\n\n` : "\n"}`;

  let tocMarkdown = "";
  const includeTOC = contact || contributing || description || features || installation || license || roadmap || technologies || testing || title || usage;
  if (includeTOC){
    tocMarkdown += "## Table of Contents\n";
    installation ? tocMarkdown += "* [Installation](#installation)\n" : null;
    testing ? tocMarkdown += "* [Testing](#testing)\n" : null;
    usage ? tocMarkdown += "* [Usage](#usage)\n" : null;
    features ? tocMarkdown += "* [Features](#features)\n" : null;
    technologies ? tocMarkdown += "* [Technologies](#technologies)\n" : null;
    license ? tocMarkdown += "* [License](#license)\n" : null;
    roadmap ? tocMarkdown += "* [Roadmap](#roadmap)\n" : null;
    contributing ? tocMarkdown += "* [Contributing](#contributing)\n" : null;
    contact ? tocMarkdown += "* [Contact](#contact)\n" : null;
    tocMarkdown += "\n";
  }

  let sectionMarkdown = "";
  sectionMarkdown += installation ? `## Installation\n${installation}\n\n\n\n`: null;
  sectionMarkdown += testing ? `## Testing\n${testing}\n\n`: null;
  sectionMarkdown += usage ? `## Usage\n${usage}\n\n`: null;
  sectionMarkdown += features ? `## Features\n${features}\n\n`: null;
  sectionMarkdown += technologies ? `## Technologies\n${technologies}\n\n`: null;
  sectionMarkdown += license ? `## License\n${license}\n\n`: null;
  sectionMarkdown += roadmap ? `## Roadmap\n${roadmap}\n\n`: null;
  sectionMarkdown += contributing ? `## Contributing\n${contributing}\n\n`: null;
  sectionMarkdown += contact ? `## Contact\n${contact}\n\n`: null;
  
  const fullMarkdown = titleMarkdown + tocMarkdown + sectionMarkdown;
  return fullMarkdown;
}

export default generateMarkdown;
