# ChatGPT-Bot
A Discord bot based on OpenAI Node.js library to build  
**NOTE**: There is not using the official/unoffical ChatGPT API so this Bot is using the Davinci model.  


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
OPENAI_API_TOKEN = "OpenAI_api_key"
```

#### Get the OpenAI api key :
 * Go to https://beta.openai.com/account/api-keys and log in or sign up.
 * Create new secret key.
 * Copy the secret key to `OPENAI_API_TOKEN`.


## Usage
Text Commands:  
 * `?chat <message>` : chat with the ChatAI Bot
 * `?help` : get command help

Slash Commands:  
 * `/chat`
 * `/help`


## Example
<img src="/imgs/img1.png" alt="img1" width="700"/>
<img src="/imgs/img2.png" alt="img2" width="700"/>
