import * as dotenv from 'dotenv';
import {
    Configuration, OpenAIApi,
    CreateImageRequestSizeEnum, CreateImageRequestResponseFormatEnum, ChatCompletionRequestMessageRoleEnum
} from 'openai';

dotenv.config();


const configuration = new Configuration({ apiKey: String(process.env.OPENAI_API_TOKEN) });
const openai = new OpenAIApi(configuration);

/**
 * --- Default values ---
 * OPENAI_API_IMAGE_SIZE = '1024x1024'
 * OPENAI_API_IMAGE_COUNT = 1
 * OPENAI_API_IMAGE_RESPONSE_FORMAT = 'url'
 * OPENAI_API_USER = 'user'
 * OPENAI_API_TIMEOUT = 30
 */
const OPENAI_API_IMAGE_SIZE = typeof (process.env.OPENAI_API_IMAGE_SIZE) === 'undefined' ? '1024x1024' : String(process.env.OPENAI_API_IMAGE_SIZE);
const OPENAI_API_IMAGE_COUNT = typeof (process.env.OPENAI_API_IMAGE_COUNT) === 'undefined' ? 1 : Number(process.env.OPENAI_API_IMAGE_COUNT);
const OPENAI_API_IMAGE_RESPONSE_FORMAT = typeof (process.env.OPENAI_API_IMAGE_RESPONSE_FORMAT) === 'undefined' ? 'url' : String(process.env.OPENAI_API_IMAGE_RESPONSE_FORMAT);
const OPENAI_API_USER = typeof (process.env.OPENAI_API_USER) === 'undefined' ? 'user' : String(process.env.OPENAI_API_USER);
const OPENAI_API_TIMEOUT = typeof (process.env.OPENAI_API_TIMEOUT) === 'undefined' ? 30 : Number(process.env.OPENAI_API_TIMEOUT);


const imageGenerator = async (message: string): Promise<any> => {

    const response = await openai.createImage({
        prompt: message,
        n: OPENAI_API_IMAGE_COUNT,
        size: (OPENAI_API_IMAGE_SIZE as CreateImageRequestSizeEnum),
        response_format: (OPENAI_API_IMAGE_RESPONSE_FORMAT as CreateImageRequestResponseFormatEnum),
        user: (OPENAI_API_USER as ChatCompletionRequestMessageRoleEnum)
    },
        { timeout: OPENAI_API_TIMEOUT * 1000 }
    )

    //const result = String(response.data.data[0].url);
    const result = response.data.data;
    return result;
}
export default imageGenerator;