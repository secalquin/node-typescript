import { DataTypes } from "sequelize";
import db from "../database/connection";

const Usuario = db.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
  },
  correo: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  usuario: {
    type: DataTypes.STRING(50),
  },
  contrasena: {
    type: DataTypes.STRING(50),
  },
  token: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});

export default Usuario;
