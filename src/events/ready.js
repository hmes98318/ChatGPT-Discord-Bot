import os from 'os';
import { exec } from 'child_process';
import Discord from 'discord.js'

import pkg from '../../package.json' assert { type: "json" };


const color = { white: '\x1B[0m', cyan: '\x1B[36m' };


export default async (client) => {

    client.status = {
        uptime: new Date(),
        os_version: await OSversion(),
        node_version: process.version,
        discord_version: `v${Discord.version}`,
        bot_name: `${pkg.name}`,
        bot_version: `v${pkg.version}`,
        cpu: `${os.cpus()[0].model}`
    };


    console.log(`+---------------------+`);
    console.log(`| ${client.status.bot_name}: ${color.cyan}${client.status.bot_version}${color.white}\t|`);
    console.log(`| Node.js: ${color.cyan}${client.status.node_version}${color.white}\t|`);
    console.log(`| Discord.js: ${color.cyan}${client.status.discord_version}${color.white}\t|`);
    console.log(`+---------------------+`);

    /*
        client.application.commands.set(client.commands.map(cmd => {
            return {
                name: cmd.name,
                description: cmd.description,
                options: cmd.options
            }
        }));
    */
    client.user.setActivity(client.config.playing);
    console.log(`>>> Logged in as ${client.user.username}`);
};




const OSversion = () => {
    let platform = process.platform;

    if (platform === "win32")
        return os.type();

    else if (platform === "linux")
        return new Promise(function (resolve, reject) {
            exec('cat /etc/*release | grep -E ^PRETTY_NAME',
                (error, stdout, stderr) => {
                    if (error !== null) reject(error);

                    let os_version = stdout.split('"')[1];
                    resolve(os_version);
                });
        });

    else
        return process.platform;
}