import { promisify } from "util";
import jwt from "jsonwebtoken";
import userModel from "../../../../../models/userModel";

export default async function isAutrnticate(req, res) {
  if (!req.cookies.tookenLogin) {
    res.json({ message: "token requerido" });
    return false;
  } else {
    const autenticado = jwt.verify(req.cookies.tookenLogin, "secret");
    if (!autenticado) {
      res.json({ message: "token incorrecto" });
      return false;
    } else {
      const result = await userModel.findAll({
        where: { id: autenticado.id, id_rool: autenticado.id_rool },
      });
      if (result[0].id_rool !== 1) {
        res.json({ message: "admin requerido" });
        return false;
      } else {
        res.json({ message: "usuario autenticado", nombre: result[0].nombre });
        return true;
      }
    }
  }
}
