import * as dotenv from 'dotenv';
import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai';

dotenv.config();


const configuration = new Configuration({ apiKey: String(process.env.OPENAI_API_TOKEN) });
const openai = new OpenAIApi(configuration);

/**
 * --- Default values ---
 * OPENAI_API_MODEL = 'gpt-3.5-turbo'
 * OPENAI_API_USER = 'user'
 * OPENAI_API_MAX_TOKEN = 1000
 * OPENAI_API_TIMEOUT = 30
 */
const OPENAI_API_MODEL = typeof (process.env.OPENAI_API_MODEL) === 'undefined' ? 'gpt-3.5-turbo' : String(process.env.OPENAI_API_MODEL);
const OPENAI_API_USER = typeof (process.env.OPENAI_API_USER) === 'undefined' ? 'user' : String(process.env.OPENAI_API_USER);
const OPENAI_API_MAX_TOKEN = typeof (process.env.OPENAI_API_MAX_TOKEN) === 'undefined' ? 1024 : Number(process.env.OPENAI_API_MAX_TOKEN);
const OPENAI_API_TIMEOUT = typeof (process.env.OPENAI_API_TIMEOUT) === 'undefined' ? 30 : Number(process.env.OPENAI_API_TIMEOUT);


const chatGPT = async (message: string): Promise<any> => {

    if (OPENAI_API_MODEL === 'gpt-3.5-turbo' || OPENAI_API_MODEL === 'gpt-3.5-turbo-0301') {
        const response = await openai.createChatCompletion({
            model: OPENAI_API_MODEL,
            messages: [{ role: (OPENAI_API_USER as ChatCompletionRequestMessageRoleEnum), content: message }],
            max_tokens: OPENAI_API_MAX_TOKEN
        },
            { timeout: OPENAI_API_TIMEOUT * 1000 }
        );

        const result = String(response.data.choices[0].message?.content);
        return result;
    }
    else {
        const response = await openai.createCompletion({
            model: OPENAI_API_MODEL,
            prompt: message,
            max_tokens: OPENAI_API_MAX_TOKEN
        },
            { timeout: OPENAI_API_TIMEOUT * 1000 }
        );

        const result = String(response.data.choices[0].text);
        return result;
    }
}
export default chatGPT;