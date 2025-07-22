import { checkbox, confirm, editor, expand, input, number, password, rawlist, search, select } from '@inquirer/prompts';
import questions from './questions.json' assert { type: 'json'};

const checkForChoices = (question) => {
    if (!question.choices) {
        // choice: value*, name, description, short, checked, disabled
        throw new Error(`Question for ${question.name} requires a set of choices!`)
    }
}

const prompt = async () => {
    const uniqQuestionNames = [... new Set(questions.map((question) => question.name))]
    if (uniqQuestionNames.length !== questions.length) {
        throw new Error("Questions has duplicate Question Names");
    }
    let answersArr = [];
    for (let i=0;i<questions.length;i++){
        const question = questions[i];
        const answer = await promptQuestion(question);
        answersArr.push([questions[i].name, answer]);
    }
    let answers = Object.fromEntries(answersArr);
    console.log(answers);
    return answers;
}

const promptQuestion = async (question) => {
    switch(question.type) {
        case "checkbox":
            checkForChoices(question);
            return await checkbox(question);
        case "confirm":
            return await confirm(question);
        case "editor":
            return await editor(question);
        case "expand":
            checkForChoices(question);
            return await expand(question);
        case "input":
            return await input(question);
        case "number":
            return await number(question);
        case "password":
            return await password(question);
        case "rawlist":
            checkForChoices(question);
            return await rawlist(question);
        case "search":
            if (!question.source) {
                // choice: value*, name, description, short, checked, disabled
                throw new Error(`Question for ${question.name} requires a source to produce a set of choices!`)
            }
            return await search(question);
        case "select":
            checkForChoices(question);
            return await select(question);
        default:
            throw new Error(`Question Type incompatible with Inquirer prompts: ${question.type}`);
    }
}

export default prompt;
