import { Router } from "express";
import {
  deleteUsuario,
  getUsuario,
  getUsuarios,
  loginUsuario,
  postUsuario,
  putUsuario,
} from "../controllers/usuario";
import { loginRules } from "../middlewares/UserRequest";

const router = Router();

router.post("/login", [loginRules], loginUsuario);
router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", postUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);

export default router;
