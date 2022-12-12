import chatGPT from '../chatGPT/index.js';


const GET_PROBLEMS = 'The service is experiencing some problems, please try again.';

export default {
    name: 'chat',
    aliases: ['c'],
    method : 'chat <message>',
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
        if (!args[0] || args[0] === '') return;

        message.channel.sendTyping();

        try {
            let result = await chatGPT(args.join(' '));

            if (result === '') result = GET_PROBLEMS; // Discord can't send empty message

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

        await interaction.deferReply(); // message delay send

        try {
            let result = await chatGPT(interaction.options.getString("message"));

            if (result === '') result = GET_PROBLEMS;

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