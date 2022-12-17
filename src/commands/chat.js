import chatGPT from '../chatGPT/index.js';


const GET_PROBLEMS = 'The service is experiencing some problems, please try again.';

export default {
    name: 'chat',
    aliases: ['c'],
    method: 'chat <message>',
    description: 'chat with chatAI',
    options: [
        {
            name: "message",
            description: "message",
            type: 3,
            required: true
        }
    ],

    async execute(client, message, args) {

        if (!args[0] || args[0] === '')
            return message.reply({ content: `❌ | Please enter valid message.`, allowedMentions: { repliedUser: false } });


        try {
            message.channel.sendTyping();
            let result = await chatGPT(args.join(' '));

            if (result === '') result = GET_PROBLEMS; // Discord can't send empty message

            result = (result.length >= 1950) ? result.substring(0, 1950) + ' ...' : result; // Discord can't send over 2000 length string

            console.log(`ChatGPT: Responded.`);
            return message.reply({ content: result, allowedMentions: { repliedUser: false } });
        }
        catch (error) {
            console.log(error);
            let result = GET_PROBLEMS;
            return message.reply({ content: result, allowedMentions: { repliedUser: false } });
        }

    },

    async slashExecute(client, interaction) {

        try {
            let result = await chatGPT(interaction.options.getString("message"));

            if (result === '') result = GET_PROBLEMS;

            result = (result.length >= 1950) ? result.substring(0, 1950) + ' ...' : result;

            console.log(`ChatGPT: Responded.`);
            return interaction.editReply({ content: result, allowedMentions: { repliedUser: false } });
        }
        catch (error) {
            console.log(error);
            let result = GET_PROBLEMS;
            return interaction.editReply({ content: result, allowedMentions: { repliedUser: false } });
        }
    }
};