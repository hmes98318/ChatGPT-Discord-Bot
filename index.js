'use strict';

import fs from 'fs';
import dotenv from 'dotenv';
import consoleStamp from 'console-stamp';
import { Client, GatewayIntentBits, Collection } from 'discord.js';

dotenv.config();
consoleStamp(console, { format: ':date(yyyy/mm/dd HH:MM:ss)' });


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
    return new Promise(async (resolve, reject) => {
        const events = fs.readdirSync('./src/events/').filter(file => file.endsWith('.js'));

        console.log(`+--------------------------------+`);
        for (const file of events) {
            try {
                const event = await import(`./src/events/${file}`);
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
    return new Promise(async (resolve, reject) => {
        fs.readdir('./src/commands/', async (err, files) => {

            console.log(`+---------------------------+`);
            if (err)
                return console.log('Could not find any commands!');

            const jsFiles = files.filter(file => file.endsWith('.js'));

            if (jsFiles.length <= 0)
                return console.log('Could not find any commands!');

            for (const file of jsFiles) {
                try {
                    const command = await import(`./src/commands/${file}`);
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
    });
}

/*
Promise.all([loadEvents(), ])
    .then(function () {
        loadCommands()
        
    });
*/
Promise.resolve()
    .then(() => loadEvents())
    .then(() => loadCommands())
    .then(() => {
        console.log('\x1B[32m*** All loaded successfully ***\x1B[0m');
        client.login(process.env.TOKEN);
    });
  