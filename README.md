# ChatGPT-Bot
A Discord bot based on ChatGPT


### Usage
Slash Commands:  
 * `/chat <message>` : chat with the ChatAI Bot

Text Commands:  
 * `<prefix>chat`


### Configure environment
[`.env`](./.env)  
```env
TOKEN = "discord_bot_token"
SESSION_TOKEN = 
```

### To get a session token:
 * Go to https://chat.openai.com/chat and log in or sign up.
 * Open dev tools.
 * Open `Application` > `Cookies`.
 * Copy the value for `__Secure-next-auth.session-token` and save it to your environment.

![session-token](./imgs/session-token.png)