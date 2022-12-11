const interactionCreate = (client, int) => {

    if (!int.isButton()) {

        if (!int.isCommand() || !int.inGuild() || int.member.user.bot) return;

        const cmd = client.commands.get(int.commandName);
        if (cmd) cmd.slashExecute(client, int);
    }
};
export default interactionCreate;