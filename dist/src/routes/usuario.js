"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_1 = require("../controllers/usuario");
var router = express_1.Router();
router.get("/", usuario_1.getUsuarios);
router.get("/:id", usuario_1.getUsuario);
router.post("/", usuario_1.postUsuario);
router.put("/:id", usuario_1.putUsuario);
router.delete("/:id", usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map