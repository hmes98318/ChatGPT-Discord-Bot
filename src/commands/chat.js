import chatGPT from '../chatGPT/index.js';


export default {
    name: 'chat',
    aliases: ['c'],
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
        if (!args[0]) return;

        const answer = await chatGPT(args.join(' '));
        console.log(answer)
        return message.channel.send(answer);
    },

    async slashExecute(client, interaction) {

        await interaction.deferReply(); // message delay send

        try {
            console.log(interaction.options.getString("message"));
            const answer = await chatGPT(interaction.options.getString("message"));

            console.log(answer);
            return interaction.editReply({ content: answer });
        }
        catch (error) {
            console.log(error);
            return interaction.editReply({ content: 'timeout' });
        }
    }
};