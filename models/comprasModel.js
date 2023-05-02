import db from "../database/db";
import { DataTypes } from "sequelize";

const comprasModel = db.define("compras", {
  comprador: { type: DataTypes.STRING },
  articulos: { type: DataTypes.STRING },
  ganancia: { type: DataTypes.NUMBER },
});

module.exports = comprasModel;
