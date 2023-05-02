import UserModel from "../../../../../models/userModel";
const { Op } = require("sequelize");

export default async function Show(req, res) {
  try {
    const result = await UserModel.findAll({
      where: { id_rool: { [Op.ne]: 2 } },
    });
    res.json({ message: "todo salio bien", registros: result });
  } catch (error) {
    res.json({ message: error });
  }
}
