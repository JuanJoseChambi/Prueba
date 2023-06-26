import css from "../LogoLeng/css.png";
import html from "../LogoLeng/html.png";
import javascript from "../LogoLeng/javascript.png";
import react from "../LogoLeng/react.png";
import redux from "../LogoLeng/redux.png";
import framer from "../LogoLeng/framework-framer-motion.webp";
import style from "./Front.module.css";

export default function Front() {
  return (
    <div className={style.logs}>
      <div className={style.containers}>
        <img src={css} alt="css" className={style.css} />
        <p>CSS</p>
      </div>
      <div className={style.containers}>
        <img src={html} alt="html" className={style.html} />
        <p>HTML</p>
      </div>
      <div className={style.containers}>
        <img src={javascript} alt="javascript" className={style.js} />
        <p>JAVASCRIPT</p>
      </div>
      <div className={style.containers}>
        <img src={react} alt="react" className={style.react} />
        <p>REACT</p>
      </div>
      <div className={style.containers}>
        <img src={redux} alt="redux" className={style.redux} />
        <p>REDUX</p>
      </div>
      <div className={style.containers}>
        <img src={framer} alt="framer motion" className={style.framer} />
        <p>FRAMER</p>
      </div>
    </div>
  );
}
