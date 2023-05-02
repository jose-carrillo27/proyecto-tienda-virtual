import userModel from "../../../../../models/userModel";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handleLogin(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ message: "ingrese usuario y/o contraseña", estado: false });
    } else {
      const result = await userModel.findAll({
        where: { email: email },
      });

      if (
        result.length === 0 ||
        !(await compare(password, result[0].contraseña))
      ) {
        res.json({
          message: "usuario y/o contraseña incorrectos",
          estado: false,
        });
      } else {
        const id = result[0].id;
        const rool = result[0].id_rool;
        const token = jwt.sign({ id: id, id_rool: rool }, "secret", {
          expiresIn: "3d",
        });

        let serial = serialize("tookenLogin", token, {
          httpOnly: true,
          maxAge: 3600,
          path: "/",
        });

        res.setHeader("set-Cookie", serial);
        res.json({
          message: "login correcto",
          estado: true,
          rool: rool,
          id: id,
        });
      }
    }
  } else {
    if (req.method === "GET") {
      const email = req.cookies.tookenLogin;
      res.json(email);
    }
  }
}
