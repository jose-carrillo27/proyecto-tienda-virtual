import { serialize } from "cookie";

export default function SetCarritoCompra(req, res) {
  try {
    function mostrar(param) {
      console.log("----------------------------------------");
      console.log(param);
      console.log("----------------------------------------");
    }

    if (req.method === "POST") {
      let articulo = req.body;

      let cart = req.cookies.cart;
      let result = [];

      if (!cart) {
        result = [articulo];
      } else {
        result = [...JSON.parse(cart), articulo];
      }

      let serial = serialize("cart", JSON.stringify(result), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      res.setHeader("set-cookie", serial);

      res.json({ message: "todo salio bien", data: result });
    } else {
      const cart = req.cookies.cart;
      res.status(200).json(cart);
    }
  } catch (error) {
    res.json({ message: error });
  }
}

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Agregar un artículo al carrito
//     const { id, name, price } = req.body;
//     let cart = req.cookies.cart || [];
//     cart.push({ id, name, price });
//     res.setHeader('Set-Cookie', `cart=${JSON.stringify(cart)}; path=/`);
//     res.status(200).json(cart);
//   } else if (req.method === 'DELETE') {
//     // Eliminar un artículo del carrito
//     const { id } = req.body;
//     let cart = req.cookies.cart || [];
//     cart = cart.filter(item => item.id !== id);
//     res.setHeader('Set-Cookie', `cart=${JSON.stringify(cart)}; path=/`);
//     res.status(200).json(cart);
//   } else if (req.method === 'GET') {
//     // Obtener el contenido del carrito
//     const cart = req.cookies.cart || [];
//     res.status(200).json(cart);
//   }
// }
