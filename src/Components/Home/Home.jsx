import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import { motion } from "framer-motion"; 



export default function Home() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.information}>
         <motion.h1 className={style.h1_presentation} 
         transition={{duration: 0.25}}
         animate={{
            y:40,
            color: "white"
         }}>
          Hola!, Soy Jose.<br/>Soy desarrollador  Web y contructor de interfaces de
          usuario
        </motion.h1>
        <motion.p className={style.p_presentation}
        initial={{
            x:-650
        }}
        transition={{duration:.5}}
        animate={{
            x:1,

        }}>
          Soy un desarrolador un desarrollador autonomo, de hace un año, con
          programas o Bootcams completos como Soy Henry en Full Stack y Pyton,
          Aprendiendo{" "}
          <NavLink to={"/Lenguajes"} className={style.link}>
            <p className={style.link}>Lenguajes</p>
          </NavLink>{" "}
          los cuales se ven reflejados en mis{" "}
          <NavLink to={"/Proyects"} className={style.link}>
            <p className={style.link}>Proyectos</p>
          </NavLink>{" "}
          como desarrolador Front End y Back End.
        </motion.p>
        </div>
        <div className={style.animation}>
            <h1 >*animacion*</h1>
        </div>
      </div>
    </div>
  );
}
