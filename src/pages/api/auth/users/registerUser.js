import UserModel from "../../../../../models/userModel";
import bcryptjs from "bcryptjs";

export default async function RegisterUser(req, res) {
  try {
    if (req.method === "POST") {
      const { nombre, apellido, CC, email, contraseña, id_rool } = req.body;

      if (!nombre || !apellido || !CC || !email || !contraseña) {
        res.json({ message: "campos requeridos", estado: false });
      } else {
        const result = await UserModel.findAll({
          where: { email: email },
        });
        if (result.length !== 0) {
          res.json({ message: "el usuario ya esta registrado", estado: false });
        }
        const result2 = await UserModel.findAll({
          where: { CC: CC },
        });
        if (result2.length !== 0) {
          res.json({ message: "la CC ya esta registrada", estado: false });
        } else {
          let passHash = await bcryptjs.hash(contraseña, 8);
          const user = await UserModel.create({
            id_rool: id_rool,
            nombre: nombre,
            apellido: apellido,
            CC: CC,
            email: email,
            contraseña: passHash,
          });
          res.json({ message: "usuario creado correctamente", estado: true });
        }
      }

      let hashContrasena = await bcryptjs.hash(contraseña, 8);
      const user = await UserModel.create({
        nombre: nombre,
        apellido: apellido,
        CC: CC,
        email: email,
        contraseña: hashContrasena,
        id_rool: id_rool,
      });
      res.json({ message: "usuario creado correctamente" });
    } else {
      res.json({ message: "mal" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
