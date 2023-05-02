import { serialize } from "cookie";

export default async function handleDeleteCookie(req, res) {
  if (!req.cookies.cart) {
    res.json({ message: "login incorrecto" });
  } else {
    let serial = serialize("cart", null, {
      httpOnly: true,
      maxAge: 0,
      path: "/",
    });

    res.setHeader("set-Cookie", serial);
    res.json({ message: "logout correcto" });
  }
}
