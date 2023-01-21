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
var os = __importStar(require("os"));
var child_process_1 = require("child_process");
var Discord = __importStar(require("discord.js"));
var package_json_1 = __importDefault(require("../../package.json"));
var color = { white: '\x1B[0m', cyan: '\x1B[36m' };
exports.default = (function (client) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, release;
    var _b;
    var _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = client;
                _b = {
                    uptime: String(new Date())
                };
                return [4 /*yield*/, OSversion()];
            case 1:
                _a.status = (_b.os_version = _f.sent(),
                    _b.node_version = process.version,
                    _b.discord_version = "v".concat(Discord.version),
                    _b.bot_name = "".concat(package_json_1.default.name),
                    _b.bot_version = "v".concat(package_json_1.default.version),
                    _b.cpu = "".concat(os.cpus()[0].model),
                    _b);
                release = {
                    bot: "".concat(client.status.bot_name, ": ").concat(color.cyan).concat(client.status.bot_version).concat(color.white),
                    nodejs: "Node.js: ".concat(color.cyan).concat(client.status.node_version).concat(color.white),
                    djs: "Discord.js: ".concat(color.cyan).concat(client.status.discord_version).concat(color.white)
                };
                console.log("+-----------------------+");
                console.log("| ".concat(release.bot.padEnd(30, ' '), " |"));
                console.log("| ".concat(release.nodejs.padEnd(30, ' '), " |"));
                console.log("| ".concat(release.djs.padEnd(30, ' '), " |"));
                console.log("+-----------------------+");
                (_c = client.application) === null || _c === void 0 ? void 0 : _c.commands.set(client.commands.map(function (cmd) {
                    return {
                        name: cmd.name,
                        description: cmd.description,
                        options: cmd.options
                    };
                }));
                (_d = client.user) === null || _d === void 0 ? void 0 : _d.setActivity(client.config.playing);
                console.log(">>> Logged in as ".concat((_e = client.user) === null || _e === void 0 ? void 0 : _e.username));
                return [2 /*return*/];
        }
    });
}); });
var OSversion = function () {
    var platform = process.platform;
    if (platform === "win32") {
        return os.type();
    }
    else if (platform === "linux") {
        return new Promise(function (resolve, reject) {
            (0, child_process_1.exec)('cat /etc/*release | grep -E ^PRETTY_NAME', function (error, stdout, stderr) {
                if (error !== null)
                    reject(error);
                var os_version = stdout.split('"')[1];
                resolve(os_version);
            });
        });
    }
    else {
        return process.platform;
    }
};
