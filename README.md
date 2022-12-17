# ChatGPT-Bot
A Discord bot based on OpenAI Node.js library to build  
**NOTE**: This Bot is using the OpenAI Davinci model, so there is not using the official/unoffical ChatGPT API.  


## Installation
### Clone the repository
```
git clone https://github.com/hmes98318/ChatGPT-Bot.git
```
or [**click here**](https://github.com/hmes98318/ChatGPT-Bot/releases) to download

### Install the dependencies
auto install all dependencies on [`package.json`](./package.json)  
```
npm install
```


### Configure environment
[`.env`](./.env)  
```env
PREFIX = "?"
PLAYING = "?help"
TOKEN = "discord_bot_token"
OPENAI_API_TOKEN = 

OPENAI_API_MODEL = "text-davinci-003"
OPENAI_API_MAX_TOKEN = 1000
OPENAI_TIMEOUT = 30

MAX_REPLY_COUNT = 5
MAX_TEXT_LENGTH = 1000
```
`OPENAI_API_MODEL`: GPT-3 models list https://beta.openai.com/docs/models.  
`OPENAI_API_MAX_TOKEN`: Bot maximum reply message length.  
`OPENAI_TIMEOUT`: Reply message maximum waiting timeout.  
`MAX_REPLY_COUNT`: Number of previous messages the bot remembers.  
`MAX_TEXT_LENGTH`: Maximum send message length.  

#### Get the OpenAI api key :
 * Go to https://beta.openai.com/account/api-keys and log in or sign up.
 * Create new secret key.
 * Copy the secret key to `OPENAI_API_TOKEN`.


## Running the script 
```
npm run start
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
