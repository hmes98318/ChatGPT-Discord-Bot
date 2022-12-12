import dotenv from 'dotenv';
import { ChatGPTAPI } from "chatgpt";

dotenv.config()


// sessionToken is required; see below for details
const api = new ChatGPTAPI({
    sessionToken: String(process.env.SESSION_TOKEN),
    clearanceToken: String(process.env.SESSION_TOKEN),
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
})

const chatGPT = async (issue) => {

    await api.ensureAuth();
    const response = await api.sendMessage(String(issue));
    return response;
}


export default chatGPT;