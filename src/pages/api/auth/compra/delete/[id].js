import comprasModel from "../../../../../../models/comprasModel";

export default async function handleDelete(req, res) {
  try {
    if (req.method === "DELETE") {
      await comprasModel.destroy({
        where: { id: req.query.id },
      });
      res.json({ message: "usuario eliminado correctamente" });
    } else {
      res.json({ message: "algo anda mal" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
