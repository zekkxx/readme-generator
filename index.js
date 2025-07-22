import fs from'fs';
import generateMarkdown from './utils/markdownGenerator.js';
import prompt from './utils/promptInterpreter.js';

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
        const rmData = await prompt();
        writeToFile(rmData);
        console.log("Read Me has been Generated");
    } catch (err) {
        console.error(err)
    }
}

init();
