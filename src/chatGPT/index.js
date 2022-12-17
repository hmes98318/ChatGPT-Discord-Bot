import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();


const configuration = new Configuration({ apiKey: String(process.env.OPENAI_API_TOKEN) });
const openai = new OpenAIApi(configuration);

/**
 * Default values
 * OPENAI_API_MODEL = 'text-davinci-003'
 * OPENAI_API_MAX_TOKEN = 1000
 * OPENAI_TIMEOUT = 30
 */
const OPENAI_API_MODEL = typeof (process.env.OPENAI_API_MODEL) === 'undefined' ? 'text-davinci-003' : String(process.env.OPENAI_API_MODEL);
const OPENAI_API_MAX_TOKEN = typeof (process.env.OPENAI_API_MAX_TOKEN) === 'undefined' ? 1024 : Number(process.env.OPENAI_API_MAX_TOKEN);
const OPENAI_TIMEOUT = typeof (process.env.OPENAI_TIMEOUT) === 'undefined' ? 30 : Number(process.env.OPENAI_TIMEOUT);


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