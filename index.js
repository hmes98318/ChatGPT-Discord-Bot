'use strict';

import path from 'path';
import dotenv from 'dotenv';

import { Client, GatewayIntentBits, Collection } from 'discord.js';

import ready from './src/events/ready.js';
import messageCreate from './src/events/messageCreate.js';
import interactionCreate from './src/events/interactionCreate.js';

import chat from './src/commands/chat.js';

dotenv.config();

let client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

client.config = {
    prefix: '-'
};
client.commands = new Collection();




const loadEvents = () => {
    return new Promise((resolve, reject) => {
        try {
            client.on('ready', ready.bind(null, client));
            client.on('messageCreate', messageCreate.bind(null, client));
            client.on('interactionCreate', interactionCreate.bind(null, client));
        } catch (error) {
            reject(error);
        }
        resolve();
    })
}

const loadCommands = () => {
    console.log(`-> loading commands ......`);
    return new Promise((resolve, reject) => {
        try {
            client.commands.set('chat', chat);
        } catch (error) {
            reject(error);
        }
        resolve();

    })
}


Promise.all([loadEvents(), loadCommands()])
    .then(function () {
        console.log('\x1B[32m*** All loaded successfully ***\x1B[0m');
        client.login(process.env.TOKEN);
    });