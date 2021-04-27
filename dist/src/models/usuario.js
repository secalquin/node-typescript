"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../database/connection"));
var Usuario = connection_1.default.define("Usuario", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    correo: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    token: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map