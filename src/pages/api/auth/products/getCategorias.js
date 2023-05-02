import productsModel from "../../../../../models/prodCategoria";

export default async function GetCategoria(req, res) {
  try {
    if (req.method === "GET") {
      const result = await productsModel.findAll();
      res.json({ message: "todo salio bien", data: result });
    } else {
      res.json({ message: "algo salio mal" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
