import productsModel from "../../../../../models/productsModel";

export default async function Products(req, res) {
  try {
    if (req.method === "GET") {
      const result = await productsModel.findAll();
      res.json({ message: "todo salio bien", data: result });
    } else {
      res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
