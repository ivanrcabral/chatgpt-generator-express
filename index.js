import { Configuration, OpenAIApi } from "openai";
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.GPT_TOKEN,
});
const openai = new OpenAIApi(configuration);

async function execute(){
    
    try {
        const task = fs.readFileSync('task.txt', 'utf8');
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: task,
            max_tokens: 1000
        });
        
        console.log(completion.data.choices[0].text);

        const objString = completion.data.choices[0].text
        const objJson = JSON.parse(objString)
        fs.writeFileSync("dist/views/formulario.ejs", decodeURI(objJson["formulario.ejs"]))
        fs.writeFileSync("dist/index.js",  decodeURI(objJson["index.js"]))
        fs.writeFileSync("dist/package.json", decodeURI(objJson["package.json"]))
    
    } catch (err) {
        console.error(err);
    }

}

execute()