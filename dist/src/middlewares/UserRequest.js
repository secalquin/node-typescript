"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRules = void 0;
var express_validator_1 = require("express-validator");
exports.loginRules = express_validator_1.oneOf([
    express_validator_1.check("email").exists().withMessage("Title is required"),
    express_validator_1.check("password").exists().withMessage("Category is required"),
]);
//# sourceMappingURL=UserRequest.js.map