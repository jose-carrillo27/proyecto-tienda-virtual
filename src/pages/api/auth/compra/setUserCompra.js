import { serialize } from "cookie";

export default function SetUserCompra(req, res) {
  try {
    if (req.method === "POST") {
      const user = req.body;

      console.log(req.cookies.user);

      let serial = serialize("user", JSON.stringify(user), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      res.setHeader("set-cookie", serial);
      res.json(user);
    } else {
      const user = req.cookies.user || [];
      res.status(200).json(user);
    }
  } catch (error) {
    res.json({ message: error });
  }
}
