const messageCreate = async (client, message) => {

    if (message.author.bot || message.channel.type === 'dm')
        return;

    const prefix = client.config.prefix;

    if (message.content.indexOf(prefix) !== 0)
        return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) {
        console.log(`(\x1B[2m${message.guild.name}\x1B[0m) ${message.author.username} : ${message.content}`);
        await message.channel.sendTyping();
        cmd.execute(client, message, args);
    }
};
export default messageCreate;