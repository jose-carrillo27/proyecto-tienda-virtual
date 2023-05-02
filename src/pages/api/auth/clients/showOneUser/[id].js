import userModel from "../../../../../../models/userModel";

export default async function ShowOneUser(req, res) {
  try {
    if (req.method === "GET") {
      const result = await userModel.findAll({
        where: { id: req.query.id },
      });
      res.json({ message: "todo salio bien", data: result });
    } else {
      res.json({ message: "algo salio mal" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
