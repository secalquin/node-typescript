import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, resp: Response) => {
  const usuarios = await Usuario.findAll();
  resp.json({
    msg: "getUsuarios",
    usuarios,
  });
};

export const getUsuario = async (req: Request, resp: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);
  resp.json({
    msg: "getUsuario",
    usuario,
  });
};

export const postUsuario = (req: Request, resp: Response) => {
  const { body } = req;

  resp.json({
    msg: "postUsuario",
    body,
  });
};

export const putUsuario = (req: Request, resp: Response) => {
  const { id } = req.params;
  const { body } = req;

  resp.json({
    msg: "putUsuario",
    body,
    id,
  });
};

export const deleteUsuario = (req: Request, resp: Response) => {
  const { id } = req.params;

  resp.json({
    msg: "deleteUsuario",
    id,
  });
};
