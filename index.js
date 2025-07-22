import fs from'fs';
import generateMarkdown from './utils/markdownGenerator.js';
import prompt from './utils/promptInterpreter.js';

import questions from './utils/questions.json' assert { type: 'json'};

const writeToFile = (data) => {
    // console.log(process.cwd()); //__dirname
    const myDir = process.cwd(); //__dirname
    if(!fs.existsSync(myDir)){
        fs.mkdirSync(myDir);
    }
    fs.writeFileSync(myDir+"/readme.md", generateMarkdown(data));
}

const init = async () => {
    try {
        const rmData = await prompt(questions);
        writeToFile(rmData);
        console.log("Read Me has been Generated");
    } catch (err) {
        console.error(err)
    }
}

const test = async () => {
    try {
        const rmData = await prompt(questions);
        const rmMarkdown = generateMarkdown(rmData);
        console.log(rmMarkdown);
    } catch (err) {
        console.error(err);
    }
}

if (process.argv[2] && process.argv[2] === "-t") {
    test();
} else if (process.argv[2]) {
    console.error("Unrecognized modifier applied. Did you mean -t?");
} else {
    init();
}
