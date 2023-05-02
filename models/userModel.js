import db from "../database/db";

import { DataTypes } from "sequelize";

const userModel = db.define("users", {
  nombre: { type: DataTypes.STRING },
  id_rool: { type: DataTypes.NUMBER },
  apellido: { type: DataTypes.STRING },
  CC: { type: DataTypes.NUMBER },
  email: { type: DataTypes.STRING },
  celular: { type: DataTypes.NUMBER },
  departamento: { type: DataTypes.STRING },
  ciudad: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
  contraseña: { type: DataTypes.STRING },
});

module.exports = userModel;
