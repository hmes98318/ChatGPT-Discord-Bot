import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config()


const configuration = new Configuration({ apiKey: process.env.OPENAI_API_TOKEN });
const openai = new OpenAIApi(configuration);

const OPENAI_API_MODEL = "text-davinci-003";
const OPENAI_API_MAX_TOKEN = 1024;
const TIMEOUT = 30000; // 30s


const chatGPT = async (message) => {

    const response = await openai.createCompletion({
        model: OPENAI_API_MODEL,
        prompt: message,
        max_tokens: OPENAI_API_MAX_TOKEN
    },
        { timeout: TIMEOUT }
    );

    const result = response.data.choices[0].text;
    return result;
}
export default chatGPT;