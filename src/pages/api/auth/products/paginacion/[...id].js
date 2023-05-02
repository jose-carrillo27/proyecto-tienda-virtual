import productsModel from "../../../../../../models/productsModel";

export default async function getProducts(req, res) {
  try {
    if (req.method === "GET") {
      const id = req.query.id;

      const result = await productsModel.findAll({
        offset: parseInt(id[0]) * 12 - 12,
        limit: 12,
      });
      res.json({ message: "peticion exitosa", data: result });
    } else {
      res.status(404).json({ message: "algo salio mal" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
