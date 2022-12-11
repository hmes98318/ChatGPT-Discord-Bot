import dotenv from 'dotenv';
import { ChatGPTAPI } from "chatgpt";

dotenv.config()


// sessionToken is required; see below for details
const api = new ChatGPTAPI({
    sessionToken: String(process.env.SESSION_TOKEN)
})

const chatGPT = async (issue) => {

    await api.ensureAuth();
    const response = await api.sendMessage(String(issue));
    return response;
}


export default chatGPT;