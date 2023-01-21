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
exports.slashExecute = exports.execute = exports.options = exports.description = exports.method = exports.showHelp = exports.aliases = exports.name = void 0;
var Discord = __importStar(require("discord.js"));
exports.name = 'server';
exports.aliases = ['s'];
exports.showHelp = false;
exports.method = 'server';
exports.description = 'Show currently active servers';
exports.options = [];
var execute = function (client, message) {
    return message.reply({
        embeds: [
            new Discord.EmbedBuilder()
                .setDescription(client.guilds.cache
                .map(function (g) { return "Guild ID: ".concat(g.id, "\n Guild: ").concat(g.name, "\n Members: ").concat(g.memberCount); })
                .join('\n\n'))
        ],
        allowedMentions: { repliedUser: false }
    });
};
exports.execute = execute;
var slashExecute = function (client, interaction) {
    return interaction.editReply({
        embeds: [
            new Discord.EmbedBuilder()
                .setDescription(client.guilds.cache
                .map(function (g) { return "Guild ID: ".concat(g.id, "\n Guild: ").concat(g.name, "\n Members: ").concat(g.memberCount); })
                .join('\n\n'))
        ],
        allowedMentions: { repliedUser: false }
    });
};
exports.slashExecute = slashExecute;
