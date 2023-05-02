import { serialize } from "cookie";

export default async function handleLogout(req, res) {
  if (!req.cookies.tookenLogin) {
    res.json({ message: "login incorrecto" });
  } else {
    let serial = serialize("tookenLogin", null, {
      httpOnly: true,
      maxAge: 0,
      path: "/",
    });
    res.setHeader("set-Cookie", serial);
    res.json({ message: "logout correcto" });
  }
}
