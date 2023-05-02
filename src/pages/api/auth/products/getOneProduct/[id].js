import productsModel from "../../../../../../models/productsModel";

export default async function GetProduct(req, res) {
  try {
    if (req.method === "GET") {
      const result = await productsModel.findAll({
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
