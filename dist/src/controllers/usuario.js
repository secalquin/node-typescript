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
        while (_) try {
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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = exports.loginUsuario = void 0;
var express_validator_1 = require("express-validator");
var usuario_1 = __importDefault(require("../models/usuario"));
var loginUsuario = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                express_validator_1.validationResult(req).throw();
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, usuario_1.default.findOne({
                        where: { correo: email, contrasena: password },
                    })];
            case 1:
                user = _b.sent();
                if (!user) {
                    resp.status(404).json({ msg: "User not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                resp.status(400).json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.loginUsuario = loginUsuario;
var getUsuarios = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usuario_1.default.findAll()];
            case 1:
                usuarios = _a.sent();
                resp.json({
                    msg: "getUsuarios",
                    usuarios: usuarios,
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getUsuarios = getUsuarios;
var getUsuario = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, usuario_1.default.findByPk(id)];
            case 1:
                usuario = _a.sent();
                resp.json({
                    msg: "getUsuario",
                    usuario: usuario,
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getUsuario = getUsuario;
var postUsuario = function (req, resp) {
    var body = req.body;
    resp.json({
        msg: "postUsuario",
        body: body,
    });
};
exports.postUsuario = postUsuario;
var putUsuario = function (req, resp) {
    var id = req.params.id;
    var body = req.body;
    resp.json({
        msg: "putUsuario",
        body: body,
        id: id,
    });
};
exports.putUsuario = putUsuario;
var deleteUsuario = function (req, resp) {
    var id = req.params.id;
    resp.json({
        msg: "deleteUsuario",
        id: id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map