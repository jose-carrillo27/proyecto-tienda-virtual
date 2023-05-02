import { serialize } from "cookie";

export default async function handledeleteCookie(req, res) {
  if (!req.cookies.user) {
    res.json({ message: "login incorrecto" });
  } else {
    let serial = serialize("user", null, {
      httpOnly: true,
      maxAge: 0,
      path: "/",
    });
    res.setHeader("set-Cookie", serial);
    res.json({ message: "cookie eliminada" });
  }
}
