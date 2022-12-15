'use strict';

import dotenv from 'dotenv';
import consoleStamp from 'console-stamp';
import { Client, GatewayIntentBits, Collection } from 'discord.js';

// events
import ready from './src/events/ready.js';
import messageCreate from './src/events/messageCreate.js';
import interactionCreate from './src/events/interactionCreate.js';

// commands
import chat from './src/commands/chat.js';
import server from './src/commands/server.js';
import help from './src/commands/help.js';

dotenv.config();
consoleStamp(console, { format: ':date(yyyy/mm/dd HH:MM:ss.l)' });


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




const loadEvents = () => {
    console.log(`-> loading events ......`);
    return new Promise((resolve, reject) => {
        try {
            client.on('ready', ready.bind(null, client));
            client.on('messageCreate', messageCreate.bind(null, client));
            client.on('interactionCreate', interactionCreate.bind(null, client));
        } catch (error) {
            reject(error);
        }
        resolve();
    });
}

const loadCommands = () => {
    console.log(`-> loading commands ......`);
    return new Promise((resolve, reject) => {
        try {
            client.commands.set('chat', chat);
            client.commands.set('server', server);
            client.commands.set('help', help);
        } catch (error) {
            reject(error);
        }
        resolve();
    });
}


Promise.all([loadEvents(), loadCommands()])
    .then(function () {
        console.log('\x1B[32m*** All loaded successfully ***\x1B[0m');
        client.login(process.env.TOKEN);
    });