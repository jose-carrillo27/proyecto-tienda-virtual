import { Sequelize } from "sequelize";

const db = new Sequelize("next_proyect_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
