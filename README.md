# ChatGPT-Bot
A Discord bot based on OpenAI Node.js library to build  
**NOTE**: There is not using the official/unoffical ChatGPT API so this Bot is using the Davinci model.  


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


### Example
Example bot <a href="https://discord.com/api/oauth2/authorize?client_id=1051826756862099576&permissions=414464727104&scope=bot%20applications.commands" target="_blank">invite link</a>.  

<img src="/imgs/img1.png" alt="img1" width="700"/>
<img src="/imgs/img2.png" alt="img2" width="700"/>
