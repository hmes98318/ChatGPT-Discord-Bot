import Discord from 'discord.js';


export const name = 'server';
export const aliases = ['s'];
export const showHelp = false;
export const method = 'server';
export const description = 'Show currently active servers';
export const options = [];

export const execute = (client, message) => {
    return message.reply(
        {
            embeds: [
                new Discord.EmbedBuilder()
                    .setDescription(
                        client.guilds.cache
                            .map(g => `Guild ID: ${g.id}\n Guild: ${g.name}\n Members: ${g.memberCount}`)
                            .join('\n\n')
                    )
            ],
            allowedMentions: { repliedUser: false }
        }
    )
}

export const slashExecute = (client, interaction) => {
    return interaction.editReply(
        {
            embeds: [
                new Discord.EmbedBuilder()
                    .setDescription(
                        client.guilds.cache
                            .map(g => `Guild ID: ${g.id}\n Guild: ${g.name}\n Members: ${g.memberCount}`)
                            .join('\n\n')
                    )
            ],
            allowedMentions: { repliedUser: false }
        }
    )
}