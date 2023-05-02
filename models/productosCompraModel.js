import db from "../database/db";
import { DataTypes } from "sequelize";

const productosCompraModel = db.define("productos_compra", {
  id_category: { type: DataTypes.NUMBER },
  cantidad: { type: DataTypes.NUMBER },
  nombre: { type: DataTypes.STRING },
  numero_ref: { type: DataTypes.STRING },
});

module.exports = productosCompraModel;
