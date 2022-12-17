const interactionCreate = async (client, int) => {

    if (int.isButton()) { }
    else {
        if (!int.isCommand() || !int.inGuild() || int.member.user.bot) return;

        const cmd = client.commands.get(int.commandName);
        if (cmd) {
            await int.deferReply();
            cmd.slashExecute(client, int);
        }
    }
};
export default interactionCreate;