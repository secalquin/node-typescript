"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = __importDefault(require("./src/models/server"));
//CONFIGURAR dot.env
dotenv_1.default.config();
var server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map