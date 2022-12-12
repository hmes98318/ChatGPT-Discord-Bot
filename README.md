# ChatGPT-Bot
A Discord bot based on OpenAI Node.js library to build


### Usage
Slash Commands:  
 * `/chat <message>` : chat with the ChatAI Bot
 * `/help` : get command help

Text Commands:  
 * `<prefix>chat`
 * `<prefix>help`


### Configure environment
[`.env`](./.env)  
```env
PREFIX = "?"
TOKEN = "discord_bot_token"
OPENAI_API_TOKEN = "OpenAI_api_key"
```

### Get the OpenAI api key:
 * Go to https://beta.openai.com/account/api-keys and log in or sign up.
 * Create new secret key.
 * Copy the secret key to `OPENAI_API_TOKEN`.