import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Register.module.css";
import Snackbars from "@/components/alert";
import { useRouter } from "next/router";
import Head from "next/head";

const URL = "/api/auth/clients/register";

export default function Register() {
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState(false);
  const [values, setValues] = useState({
    nombre: undefined,
    apellido: undefined,
    CC: undefined,
    email: undefined,
    contraseña: undefined,
  });

  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    const res = await axios.post(URL, values);

    const { estado, message } = res.data;

    if (!estado) {
      setMensaje(message);
      setOpen(true);
    } else {
      setEstado(true);
      setMensaje(message);
      setOpen(true);
      router.push("/login");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Registrar</title>
      </Head>
      <Snackbars
        handleClick={handleRegistro}
        handleClose={(event, reason) => handleClose(event, reason)}
        open={open}
        mensaje={mensaje}
        estado={estado}
      />
      <div className={styles.register}>
        <div className="container">
          <div className="col-lg-12 shadow-lg p-3 mb-5">
            <div className="card border-primary">
              <div className="card-header bg-primary text-white">
                Registrarse
              </div>
              <div className="card-body text-primary">
                <form
                  action="/register"
                  method="POST"
                  onSubmit={handleRegistro}
                >
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Apellido completo
                    </label>
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      CC
                    </label>
                    <input
                      id="CC"
                      name="CC"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="user" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      id="contraseña"
                      name="contraseña"
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="card-footer bg-transparent border-primary">
                    <Link
                      href="/login"
                      type="button"
                      className={`btn btn-secondary ${styles.btn_register}`}
                    >
                      Cancelar
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
