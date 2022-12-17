const interactionCreate = async (client, int) => {

    if (int.isButton()) { }
    else {
        if (!int.isCommand() || !int.inGuild() || int.member.user.bot) return;

        const cmd = client.commands.get(int.commandName);
        if (cmd) {
            console.log(`(\x1B[2m${int.member.guild.name}\x1B[0m) ${int.user.username} : /${int.commandName}`);
            await int.deferReply();
            cmd.slashExecute(client, int);
        }
    }
};
export default interactionCreate;