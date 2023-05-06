/**
 * Lists the currently available models
 */

const fs = require("fs");
const util = require("util");

const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();
const configuration = new Configuration({ apiKey: String(process.env.OPENAI_API_TOKEN) });
const openai = new OpenAIApi(configuration);


(async () => {
    const response = await openai.listModels();
    //console.log('response',response.data);

    fs.writeFileSync("models-list.txt", util.inspect(response.data), (err) => {
        if (err) throw err;
    });
    console.log("write success");
})()