import * as fs from 'fs';
import * as dotenv from 'dotenv';
import consoleStamp from 'console-stamp';
import { Client, GatewayIntentBits, Collection } from 'discord.js';

dotenv.config();
consoleStamp(console, { format: ':date(yyyy/mm/dd HH:MM:ss)' });


declare module 'discord.js' {
    export interface Client {
        commands: Collection<unknown, any>,
        config: {
            prefix: string,
            playing: string
        }
    }
}




let client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ]
});
client.commands = new Collection();


client.config = {
    prefix: process.env.PREFIX || '?',
    playing: process.env.PLAYING || `${process.env.PREFIX}help`
};

const color = {
    white: '\x1B[0m',
    grey: '\x1B[2m',
    green: '\x1B[32m'
};




const loadEvents = () => {
    console.log(`-> loading Events ......`);
    return new Promise<void>(async (resolve, reject) => {
        const events = fs.readdirSync(`${__dirname}/events/`);

        console.log(`+--------------------------------+`);
        for (const file of events) {
            try {
                const event = await import(`${__dirname}/events/${file}`);
                client.on(file.split('.')[0], event.default.bind(null, client));
                console.log(`| Loaded event ${file.split('.')[0].padEnd(17, ' ')} |`);
            }
            catch (error) {
                reject(error);
            }
        }
        console.log(`+--------------------------------+`);
        console.log(`${color.grey}-- loading Events finished --${color.white}`);

        resolve();
    });
}

const loadCommands = () => {
    console.log(`-> loading Commands ......`);
    return new Promise<void>(async (resolve, reject) => {
        const jsFiles = fs.readdirSync(`${__dirname}/commands/`);

        console.log(`+---------------------------+`);
        for (const file of jsFiles) {
            try {
                const command = await import(`${__dirname}/commands/${file}`);
                client.commands.set(command.name.toLowerCase(), command);
                console.log(`| Loaded Command ${command.name.toLowerCase().padEnd(10, ' ')} |`);
            }
            catch (error) {
                reject(error);
            }
        }
        console.log(`+---------------------------+`);
        console.log(`${color.grey}-- loading Commands finished --${color.white}`);

        resolve();
    });
}


Promise.resolve()
    .then(() => loadEvents())
    .then(() => loadCommands())
    .then(() => {
        console.log(`${color.green}*** All loaded successfully ***${color.white}`);
        client.login(process.env.TOKEN);
    });
