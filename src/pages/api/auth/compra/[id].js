import { serialize } from "cookie";

export default function EliminarArticulo(req, res) {
  try {
    if (req.method === "DELETE") {
      const { id } = req.query;
      let cart = req.cookies.cart || [];

      cart = JSON.parse(cart).filter((item) => item.id != id);
      console.log(cart);
      let serial = serialize("cart", JSON.stringify(cart), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      res.setHeader("Set-Cookie", serial);
      res.status(200).json(cart);
    }
  } catch (error) {
    res.json({ message: error });
  }
}
