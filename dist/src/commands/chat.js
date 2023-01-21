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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slashExecute = exports.execute = exports.options = exports.description = exports.method = exports.showHelp = exports.aliases = exports.name = void 0;
var dotenv = __importStar(require("dotenv"));
var chatGPT_1 = __importDefault(require("../chatGPT"));
dotenv.config();
/**
 * Default values
 * MAX_REPLY_COUNT = 5
 * MAX_TEXT_LENGTH = 1000
 */
var MAX_REPLY_COUNT = typeof (process.env.MAX_REPLY_COUNT) === 'undefined' ? 5 : Number(process.env.MAX_REPLY_COUNT);
var MAX_TEXT_LENGTH = typeof (process.env.MAX_TEXT_LENGTH) === 'undefined' ? 1000 : Number(process.env.MAX_TEXT_LENGTH);
var GET_PROBLEMS = 'The service is experiencing some problems, please try again.';
exports.name = 'chat';
exports.aliases = ['c'];
exports.showHelp = true;
exports.method = 'chat <message>';
exports.description = 'chat with AI';
exports.options = [
    {
        name: "message",
        description: "content",
        type: 3,
        required: true
    }
];
var execute = function (client, message, args) { return __awaiter(void 0, void 0, void 0, function () {
    var prefixString, requestMessage, hasReply, cacheReply, currentMsg, count, relpyMsg, filterReply, textLength, error_1, result, error_2, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!args[0] || args[0] === '')
                    return [2 /*return*/, message.reply({ content: "\u274C | Please enter valid message.", allowedMentions: { repliedUser: false } })];
                if (args.join().length > MAX_TEXT_LENGTH)
                    return [2 /*return*/, message.reply({ content: "\u274C | Message length exceed ".concat(MAX_TEXT_LENGTH, "."), allowedMentions: { repliedUser: false } })];
                prefixString = client.config.prefix + exports.aliases;
                requestMessage = '';
                hasReply = message.reference || null;
                if (!(hasReply !== null)) return [3 /*break*/, 6];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                cacheReply = [];
                currentMsg = message;
                count = 0;
                _a.label = 2;
            case 2:
                if (!(hasReply !== null && count < MAX_REPLY_COUNT)) return [3 /*break*/, 4];
                return [4 /*yield*/, currentMsg.fetchReference()];
            case 3:
                relpyMsg = _a.sent();
                cacheReply.push(relpyMsg);
                currentMsg = relpyMsg;
                hasReply = currentMsg.reference || null;
                count++;
                return [3 /*break*/, 2];
            case 4:
                filterReply = cacheReply.reverse()
                    .filter(function (msg) { return msg.author.bot !== true && msg.content.startsWith("".concat(prefixString)) && msg.content !== message.content; })
                    .map(function (msg) { return String(msg.content.split(' ').splice(1)).replaceAll(',', ' '); });
                textLength = filterReply.reduce(function (acc, str) { return acc + str.length; }, 0);
                while (textLength > MAX_TEXT_LENGTH) {
                    filterReply.shift();
                    textLength = filterReply.reduce(function (acc, str) { return acc + str.length; }, 0);
                }
                // Add filtered reply messages to requestMessage
                requestMessage += filterReply.join('\n') + '\n';
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log('ChatGPT: Search reply error');
                console.log(error_1);
                return [3 /*break*/, 6];
            case 6:
                // Add current message content to requestMessage
                requestMessage += args.join(' ');
                _a.label = 7;
            case 7:
                _a.trys.push([7, 9, , 10]);
                return [4 /*yield*/, (0, chatGPT_1.default)(requestMessage)];
            case 8:
                result = _a.sent();
                if (result === '')
                    result = GET_PROBLEMS; // Discord can't send empty message
                result = (result.length >= 1950) ? result.substring(0, 1950) + ' ...' : result; // Discord can't send over 2000 length string
                console.log("ChatGPT: Responded.");
                return [2 /*return*/, message.reply({ content: result, allowedMentions: { repliedUser: false } })];
            case 9:
                error_2 = _a.sent();
                console.log("ChatGPT: Response error.");
                console.log(error_2);
                result = GET_PROBLEMS;
                return [2 /*return*/, message.reply({ content: result, allowedMentions: { repliedUser: false } })];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.execute = execute;
var slashExecute = function (client, interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var requestMessage, result, error_3, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestMessage = String(interaction.options.get("message", true));
                if (requestMessage.length > MAX_TEXT_LENGTH)
                    return [2 /*return*/, interaction.editReply({ content: "\u274C | Message length exceed ".concat(MAX_TEXT_LENGTH, "."), allowedMentions: { repliedUser: false } })];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, chatGPT_1.default)(requestMessage)];
            case 2:
                result = _a.sent();
                if (result === '')
                    result = GET_PROBLEMS;
                result = (result.length >= 1950) ? result.substring(0, 1950) + ' ...' : result;
                console.log("ChatGPT: Responded.");
                return [2 /*return*/, interaction.editReply({ content: result, allowedMentions: { repliedUser: false } })];
            case 3:
                error_3 = _a.sent();
                console.log("ChatGPT: Response error.");
                console.log(error_3);
                result = GET_PROBLEMS;
                return [2 /*return*/, interaction.editReply({ content: result, allowedMentions: { repliedUser: false } })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.slashExecute = slashExecute;
