import Discord from 'discord.js';


const color = '#FFFFFF';
const github = 'https://github.com/hmes98318/ChatGPT-Bot';

export default {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    description: 'Get ChatGPT command help',
    options: [],

    execute(client, message, args) {
        const prefix = client.config.prefix;
        let title = client.user.username;
        let thumbnail = client.user.displayAvatarURL();
        const commands = client.commands.filter(x => x.showHelp !== false);
        let description = `**Text Commands**\n` + commands.map(x => `• \`${prefix}${x.method}\``).join('\n') + '\n\n' + `**Slash Commands**\n` + commands.map(x => `• \`/${x.method}\``).join('\n');

        return message.reply({ embeds: [Embed_help(title, thumbnail, description)], allowedMentions: { repliedUser: false } });
    },

    slashExecute(client, interaction) {
        const prefix = client.config.prefix;
        let title = client.user.username;
        let thumbnail = client.user.displayAvatarURL();
        const commands = client.commands.filter(x => x.showHelp !== false);
        let description = `**Text Commands**\n` + commands.map(x => `• \`${prefix}${x.method}\``).join('\n') + '\n\n' + `**Slash Commands**\n` + commands.map(x => `• \`/${x.method}\``).join('\n');

        return interaction.editReply({ embeds: [Embed_help(title, thumbnail, description)], allowedMentions: { repliedUser: false } });
    },
};


const Embed_help = (help_title, help_thumbnail, description) => {
    const Embed_help = new Discord.EmbedBuilder()
        .setColor(color)
        .setTitle(help_title)
        .setURL(github)
        .setThumbnail(help_thumbnail)
        .setDescription(description)
        .setTimestamp()
    return Embed_help;
}