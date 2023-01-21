"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slashExecute = exports.execute = exports.options = exports.description = exports.showHelp = exports.aliases = exports.name = void 0;
var Discord = __importStar(require("discord.js"));
var color = '#FFFFFF';
var github = 'https://github.com/hmes98318/ChatGPT-Bot';
exports.name = 'help';
exports.aliases = ['h'];
exports.showHelp = false;
exports.description = 'Get ChatGPT command help';
exports.options = [];
var execute = function (client, message, args) {
    var _a, _b;
    var prefix = client.config.prefix;
    var title = String((_a = client.user) === null || _a === void 0 ? void 0 : _a.username);
    var thumbnail = String((_b = client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL());
    var commands = client.commands.filter(function (x) { return x.showHelp !== false; });
    var description = "**Text Commands**\n" + commands.map(function (x) { return "\u2022 `".concat(prefix).concat(x.method, "`"); }).join('\n') + '\n\n' + "**Slash Commands**\n" + commands.map(function (x) { return "\u2022 `/".concat(x.method, "`"); }).join('\n');
    return message.reply({ embeds: [Embed_help(title, thumbnail, description)], allowedMentions: { repliedUser: false } });
};
exports.execute = execute;
var slashExecute = function (client, interaction) {
    var _a, _b;
    var prefix = client.config.prefix;
    var title = String((_a = client.user) === null || _a === void 0 ? void 0 : _a.username);
    var thumbnail = String((_b = client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL());
    var commands = client.commands.filter(function (x) { return x.showHelp !== false; });
    var description = "**Text Commands**\n" + commands.map(function (x) { return "\u2022 `".concat(prefix).concat(x.method, "`"); }).join('\n') + '\n\n' + "**Slash Commands**\n" + commands.map(function (x) { return "\u2022 `/".concat(x.method, "`"); }).join('\n');
    return interaction.editReply({ embeds: [Embed_help(title, thumbnail, description)], allowedMentions: { repliedUser: false } });
};
exports.slashExecute = slashExecute;
var Embed_help = function (help_title, help_thumbnail, description) {
    var Embed_help = new Discord.EmbedBuilder()
        .setColor(color)
        .setTitle(help_title)
        .setURL(github)
        .setThumbnail(help_thumbnail)
        .setDescription(description)
        .setTimestamp();
    return Embed_help;
};
