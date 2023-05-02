import db from "../database/db";
import { DataTypes } from "sequelize";

const prodCategoria = db.define("productos_categorias", {
  nombre: { type: DataTypes.STRING },
});

module.exports = prodCategoria;
