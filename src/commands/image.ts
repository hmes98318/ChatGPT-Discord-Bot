import * as dotenv from 'dotenv';
import imageGenerator from '../openai/imageGenerator';

import { Client, Message, CommandInteraction, EmbedBuilder } from "discord.js";

dotenv.config();


/**
 * --- Default values ---
 * BOT_MAX_TEXT_LENGTH = 1000
 */
const BOT_MAX_TEXT_LENGTH = typeof (process.env.BOT_MAX_TEXT_LENGTH) === 'undefined' ? 1000 : Number(process.env.BOT_MAX_TEXT_LENGTH);

const GET_PROBLEMS = 'The service is experiencing some problems, please try again.';


export const name = 'image';
export const aliases = ['img'];
export const showHelp = true;
export const method = 'img <prompt>';
export const description = 'Generate AI image';
export const options = [
    {
        name: "prompt",
        description: "Generate AI image prompts",
        type: 3,
        required: true
    }
];

export const execute = async (client: Client, message: Message, args: string[]) => {
    if (!args[0] || args[0] === '')
        return message.reply({ content: `❌ | Please enter valid message.`, allowedMentions: { repliedUser: false } });

    if (args.join().length > BOT_MAX_TEXT_LENGTH)
        return message.reply({ content: `❌ | Message length exceed ${BOT_MAX_TEXT_LENGTH}.`, allowedMentions: { repliedUser: false } });


    try {
        let result = await imageGenerator(args.join(' '));

        let imgEmbed = [];
        for (let i = 0; i < result.length; i++) {
            if (i == 0) {
                imgEmbed.push(new EmbedBuilder()
                    .setTitle(args.join(' '))
                    .setTimestamp()
                    .setURL(result[i].url)
                    .setImage(String(result[i].url + '&.png')));
            }
            else {
                imgEmbed.push(new EmbedBuilder()
                    .setURL(result[i].url)
                    .setImage(String(result[i].url + '&.png')));
            }
        }

        //return message.reply({ content: result, allowedMentions: { repliedUser: false } });
        return message.reply({ embeds: imgEmbed, allowedMentions: { repliedUser: false } });
    }
    catch (error) {
        console.log(`Image generator: Response error.`);
        console.log(error);
        let result = GET_PROBLEMS;
        return message.reply({ content: result, allowedMentions: { repliedUser: false } });
    }
}

export const slashExecute = async (client: Client, interaction: CommandInteraction) => {
    let requestMessage = String(interaction.options.get("prompt", true).value);

    if (requestMessage.length > BOT_MAX_TEXT_LENGTH)
        return interaction.editReply({ content: `❌ | Message length exceed ${BOT_MAX_TEXT_LENGTH}.`, allowedMentions: { repliedUser: false } });


    try {
        let result = await imageGenerator(requestMessage);

        let imgEmbed = [];
        for (let i = 0; i < result.length; i++) {
            if (i == 0) {
                imgEmbed.push(new EmbedBuilder()
                    .setTitle(requestMessage)
                    .setTimestamp()
                    .setURL(result[i].url)
                    .setImage(String(result[i].url + '&.png')));
            }
            else {
                imgEmbed.push(new EmbedBuilder()
                    .setURL(result[i].url)
                    .setImage(String(result[i].url + '&.png')));
            }
        }

        console.log(`Image generator: Responded.`);
        //return interaction.editReply({ content: result, allowedMentions: { repliedUser: false } });
        return interaction.editReply({ embeds: imgEmbed, allowedMentions: { repliedUser: false } });
    }
    catch (error) {
        console.log(`Image generator: Response error.`);
        console.log(error);
        let result = GET_PROBLEMS;
        return interaction.editReply({ content: result, allowedMentions: { repliedUser: false } });
    }
}