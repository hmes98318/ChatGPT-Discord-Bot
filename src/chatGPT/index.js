import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config()


const configuration = new Configuration({ apiKey: String(process.env.OPENAI_API_TOKEN) });
const openai = new OpenAIApi(configuration);

const OPENAI_API_MODEL = String(process.env.OPENAI_API_MODEL) || "text-davinci-003";
const OPENAI_API_MAX_TOKEN = Number(process.env.OPENAI_API_MAX_TOKEN) || 1024;
const OPENAI_TIMEOUT = Number(process.env.OPENAI_TIMEOUT) || 30; // 30s


const chatGPT = async (message) => {

    const response = await openai.createCompletion({
        model: OPENAI_API_MODEL,
        prompt: message,
        max_tokens: OPENAI_API_MAX_TOKEN
    },
        { timeout: OPENAI_TIMEOUT * 1000 }
    );

    const result = response.data.choices[0].text;
    return result;
}
export default chatGPT;