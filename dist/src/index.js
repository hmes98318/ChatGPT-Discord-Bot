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
var fs = __importStar(require("fs"));
var dotenv = __importStar(require("dotenv"));
var console_stamp_1 = __importDefault(require("console-stamp"));
var discord_js_1 = require("discord.js");
dotenv.config();
(0, console_stamp_1.default)(console, { format: ':date(yyyy/mm/dd HH:MM:ss)' });
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildVoiceStates,
    ]
});
client.commands = new discord_js_1.Collection();
client.config = {
    prefix: process.env.PREFIX || '?',
    playing: process.env.PLAYING || "".concat(process.env.PREFIX, "help")
};
var color = {
    white: '\x1B[0m',
    grey: '\x1B[2m',
    green: '\x1B[32m'
};
var loadEvents = function () {
    console.log("-> loading Events ......");
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var events, _i, events_1, file, event_1, error_1;
        return __generator(this, function (_a) {
            var _b;
            switch (_a.label) {
                case 0:
                    events = fs.readdirSync("".concat(__dirname, "/events/"));
                    console.log("+--------------------------------+");
                    _i = 0, events_1 = events;
                    _a.label = 1;
                case 1:
                    if (!(_i < events_1.length)) return [3 /*break*/, 6];
                    file = events_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, (_b = "".concat(__dirname, "/events/").concat(file), Promise.resolve().then(function () { return __importStar(require(_b)); }))];
                case 3:
                    event_1 = _a.sent();
                    client.on(file.split('.')[0], event_1.default.bind(null, client));
                    console.log("| Loaded event ".concat(file.split('.')[0].padEnd(17, ' '), " |"));
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    reject(error_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6:
                    console.log("+--------------------------------+");
                    console.log("".concat(color.grey, "-- loading Events finished --").concat(color.white));
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
};
var loadCommands = function () {
    console.log("-> loading Commands ......");
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var jsFiles, _i, jsFiles_1, file, command, error_2;
        return __generator(this, function (_a) {
            var _b;
            switch (_a.label) {
                case 0:
                    jsFiles = fs.readdirSync("".concat(__dirname, "/commands/"));
                    console.log("+---------------------------+");
                    _i = 0, jsFiles_1 = jsFiles;
                    _a.label = 1;
                case 1:
                    if (!(_i < jsFiles_1.length)) return [3 /*break*/, 6];
                    file = jsFiles_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, (_b = "".concat(__dirname, "/commands/").concat(file), Promise.resolve().then(function () { return __importStar(require(_b)); }))];
                case 3:
                    command = _a.sent();
                    client.commands.set(command.name.toLowerCase(), command);
                    console.log("| Loaded Command ".concat(command.name.toLowerCase().padEnd(10, ' '), " |"));
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    reject(error_2);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6:
                    console.log("+---------------------------+");
                    console.log("".concat(color.grey, "-- loading Commands finished --").concat(color.white));
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
};
Promise.resolve()
    .then(function () { return loadEvents(); })
    .then(function () { return loadCommands(); })
    .then(function () {
    console.log("".concat(color.green, "*** All loaded successfully ***").concat(color.white));
    client.login(process.env.TOKEN);
});
