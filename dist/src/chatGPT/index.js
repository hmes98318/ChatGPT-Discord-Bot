"use strict";
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
var dotenv_1 = __importDefault(require("dotenv"));
var openai_1 = require("openai");
dotenv_1.default.config();
var configuration = new openai_1.Configuration({ apiKey: String(process.env.OPENAI_API_TOKEN) });
var openai = new openai_1.OpenAIApi(configuration);
/**
 * Default values
 * OPENAI_API_MODEL = 'text-davinci-003'
 * OPENAI_API_MAX_TOKEN = 1000
 * OPENAI_TIMEOUT = 30
 */
var OPENAI_API_MODEL = typeof (process.env.OPENAI_API_MODEL) === 'undefined' ? 'text-davinci-003' : String(process.env.OPENAI_API_MODEL);
var OPENAI_API_MAX_TOKEN = typeof (process.env.OPENAI_API_MAX_TOKEN) === 'undefined' ? 1024 : Number(process.env.OPENAI_API_MAX_TOKEN);
var OPENAI_TIMEOUT = typeof (process.env.OPENAI_TIMEOUT) === 'undefined' ? 30 : Number(process.env.OPENAI_TIMEOUT);
var chatGPT = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, openai.createCompletion({
                    model: OPENAI_API_MODEL,
                    prompt: message,
                    max_tokens: OPENAI_API_MAX_TOKEN
                }, { timeout: OPENAI_TIMEOUT * 1000 })];
            case 1:
                response = _a.sent();
                result = String(response.data.choices[0].text);
                return [2 /*return*/, result];
        }
    });
}); };
exports.default = chatGPT;
