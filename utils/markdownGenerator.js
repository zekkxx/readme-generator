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
    installation ? tocMarkdown += "* [Installation](#installation)\n" : "";
    testing ? tocMarkdown += "* [Testing](#testing)\n" : "";
    usage ? tocMarkdown += "* [Usage](#usage)\n" : "";
    features ? tocMarkdown += "* [Features](#features)\n" : "";
    technologies ? tocMarkdown += "* [Technologies](#technologies)\n" : "";
    license ? tocMarkdown += "* [License](#license)\n" : "";
    roadmap ? tocMarkdown += "* [Roadmap](#roadmap)\n" : "";
    contributing ? tocMarkdown += "* [Contributing](#contributing)\n" : "";
    contact ? tocMarkdown += "* [Contact](#contact)\n" : "";
    tocMarkdown += "\n";
  }

  let sectionMarkdown = "";
  sectionMarkdown += installation ? `## Installation\n${installation}\n\n`: "";
  sectionMarkdown += testing ? `## Testing\n${testing}\n\n`: "";
  sectionMarkdown += usage ? `## Usage\n${usage}\n\n`: "";
  sectionMarkdown += features ? `## Features\n${features}\n\n`: "";
  sectionMarkdown += technologies ? `## Technologies\n${technologies}\n\n`: "";
  sectionMarkdown += license ? `## License\n${license}\n\n`: "";
  sectionMarkdown += roadmap ? `## Roadmap\n${roadmap}\n\n`: "";
  sectionMarkdown += contributing ? `## Contributing\n${contributing}\n\n`: "";
  sectionMarkdown += contact ? `## Contact\n${contact}\n\n`: "";
  
  const fullMarkdown = titleMarkdown + tocMarkdown + sectionMarkdown;
  return fullMarkdown;
}

export default generateMarkdown;
