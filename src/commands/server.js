import Discord from 'discord.js';


export default {
    name: 'server',
    aliases: ['s'],
    method : 'server',
    description: 'Show currently active servers',
    options: [],

    execute(client, message) {
        return message.reply(
            {
                embeds: [
                    new Discord.EmbedBuilder()
                        .setDescription(
                            client.guilds.cache
                                .map(g => `Guild Name: ${g.name}\n  Total Members: ${g.memberCount}\n Guild ID: ${g.id}`).join('\n\n')
                        )
                ],
                allowedMentions: { repliedUser: false }
            }
        )
    },

    async slashExecute(client, interaction) {
        return interaction.reply(
            {
                embeds: [
                    new Discord.EmbedBuilder()
                        .setDescription(
                            client.guilds.cache
                                .map(g => `Guild Name: ${g.name}\n  Total Members: ${g.memberCount}\n Guild ID: ${g.id}`).join('\n\n')
                        )
                ],
                allowedMentions: { repliedUser: false }
            }
        )
    }
};