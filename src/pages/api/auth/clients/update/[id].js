import UserModel from "../../../../../../models/userModel";

export default async function Update(req, res) {
  try {
    if (req.method == "PUT") {
      const result = await UserModel.update(req.body, {
        where: { id: req.query.id },
      });
      res.json({ message: "registro actualizado" });
    }
    res.json({ message: "algo salio mal" });
  } catch (error) {
    res.json({ message: error });
  }
}
