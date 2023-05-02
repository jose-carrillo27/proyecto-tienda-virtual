import db from "../database/db";
import { DataTypes } from "sequelize";

const productsModel = db.define("products", {
  id_category: { type: DataTypes.NUMBER },
  nombre: { type: DataTypes.STRING },
  numero_ref: { type: DataTypes.STRING },
  stock: { type: DataTypes.NUMBER },
  image: { type: DataTypes.STRING },
  costo: { type: DataTypes.DOUBLE },
  precio_venta: { type: DataTypes.DOUBLE },
});

module.exports = productsModel;
