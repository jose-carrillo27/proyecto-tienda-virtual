import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/futer_";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mundo Electronico</title>
      </Head>
      <div>
        <NavBar />

        <div className={styles.home_backgrund}>
          <div className={styles.home_presentacion}>
            <p className={`${styles.home_backgrund_p} ${styles.p_full}`}>
              SOMOS DEL TAMAÑO
              <br />
              <b>DE SUS NESECIDADES</b>
              <br />
            </p>
            <p className={`${styles.home_backgrund_p} ${styles.p_mini}`}>
              mas de 2000 productos
              <br />a su disposicion
            </p>
          </div>
        </div>

        <div className={styles.home_beneficios}>
          <h2>beneficios de trabajar con nosotros</h2>
          <div className={`row ${styles.home__beneficios_icon}`}>
            <div className={`${styles.contenedor_icon} col-12 col-md-6`}>
              <div className={styles.icon}>
                <i className="fa-solid fa-truck"></i>
              </div>
              <p>
                <b>Envio express</b>
                <br />
                Entrega en menos de 48 HR
              </p>
            </div>
            <div className={`${styles.contenedor_icon} col-12 col-md-6`}>
              <div className={styles.icon}>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              </div>
              <p>
                <b>Descuento</b>
                <br />
                Por volumen de compra
              </p>
            </div>
            <div className={`${styles.contenedor_icon} col-12 col-md-6`}>
              <div className={styles.icon}>
                <i className="fa-sharp fa-solid fa-check"></i>
              </div>
              <p>
                <b>Calidad</b>
                <br />
                La mas alta calidad de mercado
              </p>
            </div>
            <div className={`${styles.contenedor_icon} col-12 col-md-6`}>
              <div className={styles.icon}>
                <i className="fa-sharp fa-solid fa-gears"></i>
              </div>
              <p>
                <b>Funcionalidad</b>
                <br />
                En tiempos de operacion
              </p>
            </div>
          </div>
          <div>
            <button className={styles.button}>mas informacion</button>
          </div>
        </div>

        <div className={styles.home_ubicacion}>
          <h2 className={styles.h2}>Ubicacion</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.186104962135!2d-72.9166911!3d11.538503799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b62bc0a4861d7%3A0x6f68ecdcfbd9bf6d!2sCl.%2015%20%26%20Cra.%2015%2C%20Riohacha%2C%20La%20Guajira!5e0!3m2!1ses-419!2sco!4v1683061117844!5m2!1ses-419!2sco"
            width="90%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  );
}
