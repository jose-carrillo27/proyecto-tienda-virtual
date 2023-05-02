import comprasModel from "../../../../../models/comprasModel";

export default async function SetCompra(req, res) {
  try {
    if (req.method === "POST") {
      const compras = await comprasModel.create({
        comprador: req.body.comprador,
        articulos: JSON.stringify(req.body.articulos),
        ganancia: req.body.ganancia,
      });

      res.json({ message: "pedido exitoso" });
    } else if (req.method === "GET") {
      const result = await comprasModel.findAll();
      res.json({ message: "todo salio bien", data: result });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
