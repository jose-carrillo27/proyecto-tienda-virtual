import userModel from "../../../../../models/userModel";
import bcryptjs from "bcryptjs";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { nombre, apellido, CC, email, contraseña } = req.body;

      if (!nombre || !apellido || !CC || !email || !contraseña) {
        res.json({ message: "campos requeridos", estado: false });
      } else {
        const result = await userModel.findAll({
          where: { email: email },
        });
        if (result.length !== 0) {
          res.json({ message: "el usuario ya esta registrado", estado: false });
        }
        const result2 = await userModel.findAll({
          where: { CC: CC },
        });
        if (result2.length !== 0) {
          res.json({ message: "la CC ya esta registrada", estado: false });
        } else {
          let passHash = await bcryptjs.hash(contraseña, 8);
          const user = await userModel.create({
            id_rool: 2,
            nombre: nombre,
            apellido: apellido,
            CC: CC,
            email: email,
            contraseña: passHash,
          });
          res.json({ message: "usuario creado correctamente", estado: true });
        }
      }
    } else {
      res.json({ message: "algo salio mal" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}
