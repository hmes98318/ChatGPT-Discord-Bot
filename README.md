# ChatGPT-Discord-Bot
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /></a> 
<a href="https://discord.js.org/"><img src="https://img.shields.io/badge/Discord.JS-v14-blue?style=for-the-badge&logo=DISCORD" /></a> 
<a href="https://github.com/hmes98318/ChatGPT-Bot/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/hmes98318/ChatGPT-Bot?style=for-the-badge&color=green"></a>  

A Discord chatbot based on the OpenAI GPT3.5 model  


## Installation
### Precondition
 * TypeScript `4.9`
 * Node.js `v18`

### Clone the repository
```
git clone https://github.com/hmes98318/ChatGPT-Discord-Bot.git
```
or [**click here**](https://github.com/hmes98318/ChatGPT-Discord-Bot/releases) to download

### Install the dependencies
install all the dependencies from [`package.json`](./package.json)  
```
npm install
```


## Configure environment
[`.env`](./.env)  
```env
PREFIX = "?"
PLAYING = "?help"
TOKEN = "discord_bot_token"
OPENAI_API_TOKEN = 

OPENAI_API_MODEL = "gpt-3.5-turbo"
OPENAI_API_USER = "user"
OPENAI_API_MAX_TOKEN = 1000
OPENAI_TIMEOUT = 30

MAX_REPLY_COUNT = 5
MAX_TEXT_LENGTH = 1000
```
`OPENAI_API_MODEL`: GPT models list https://beta.openai.com/docs/models.  
`OPENAI_API_USER` : Chat Completion Request Message Role Enum. [ `user` | `system` | `assistant` ]  
`OPENAI_API_MAX_TOKEN`: Bot maximum reply message length.  
`OPENAI_TIMEOUT`: Reply message maximum waiting timeout.  
`MAX_REPLY_COUNT`: Number of previous messages the bot remembers.  
`MAX_TEXT_LENGTH`: Maximum send message length.  

#### Get the OpenAI api key :
 * Go to https://beta.openai.com/account/api-keys and log in or sign up.
 * Create new secret key.
 * Copy the secret key to `OPENAI_API_TOKEN`.


## Running the script 
Production
```
npm run start
```
Development
```
npm run dev
```


## Usage
Text Commands:  
 * `?chat <message>` : chat with the ChatAI Bot
 * `?help` : get command help

Slash Commands:  
 * `/chat`
 * `/help`
 
**NOTE**: The remember effect is only useful when using Text Commands Reply.  
You have to reply to the previous message to trigger but it will increase the consumption of tokens.


## Example
<img src="/imgs/img1.png" alt="img1" width="700"/>
<img src="/imgs/img2.png" alt="img2" width="700"/>

#### Remember previous few one message example
<img src="/imgs/img3.png" alt="img3" width="700"/>
