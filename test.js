import { ChatGPTAPI } from 'chatgpt';
import * as dotenv from 'dotenv';
dotenv.config()


// sessionToken is required; see below for details
const api = new ChatGPTAPI({
    sessionToken: String(process.env.SESSION_TOKEN)
})

const example = async () => {
    

    // ensure the API is properly authenticated
    await api.ensureAuth()

    // send a message and wait for the response
    const response = await api.sendMessage(
        'Write a python version of bubble sort.'
    )

    // response is a markdown-formatted string
    console.log(response)
}

example()
