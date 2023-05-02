import productsModel from "../../../../../../models/productsModel";

export default async function GetCategory(req, res) {
  try {
    if (req.method === "GET" && req.query.id != 0) {
      const result = await productsModel.findAll({
        where: { id_category: req.query.id },
      });
      res.json({ message: "todo salio bien", data: result });
    } else {
      const result = await productsModel.findAll();
      res.json({ message: "todo salio bien", data: result });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
