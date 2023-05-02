import UserModel from "../../../../../models/userModel";

export default async function Show(req, res) {
  try {
    const result = await UserModel.findAll({
      where: { id_rool: 2 },
    });
    res.json({ message: "todo salio bien", registros: result });
  } catch (error) {
    res.json({ message: error });
  }
}
