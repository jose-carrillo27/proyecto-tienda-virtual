import nextConnect from "next-connect";
import multer from "multer";
import productsModel from "../../../../../models/productsModel";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) =>
      cb(null, `image-${Date.now()}.${file.originalname}`),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("image"));
// const uploadFile = upload.array("image");

apiRoute.post(async (req, res) => {
  try {
    const { files } = req;
    const { nombre, numero_ref, stock, costo, precio_venta, id_category } =
      req.body;

    if (
      !nombre ||
      !numero_ref ||
      !stock ||
      !costo ||
      !precio_venta ||
      !id_category ||
      !files
    ) {
      res.json({ message: "campos requeridos", estado: false });
    } else {
      const result = await productsModel.findAll({
        where: { numero_ref: numero_ref },
      });

      if (result.length !== 0) {
        res.json({ message: "el articulo ya esta registrado", estado: false });
      } else {
        if (files) {
          const result = await productsModel.create({
            nombre: nombre,
            numero_ref: numero_ref,
            stock: stock,
            costo: costo,
            precio_venta: precio_venta,
            id_category: id_category,
            image: files[0].filename,
          });
          res.status(200).json({
            data: req.body,
            files: files,
            message: "producto registrado",
            estado: true,
          });
        } else {
          res.json({ message: "error" });
        }
      }
    }
  } catch (error) {
    res.json({ message: error });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
