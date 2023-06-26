import Back from "./ComponentsLeng/Back";
import Front from "./ComponentsLeng/Front";
import style from "./Lenguajes.module.css";

export default function Lenguajes() {

  return (
    <div>
      <div className={style.containerTitle}>
        <h1 className={style.h1}>LENGUAJES</h1>
        <p className={style.p}>
          Tecnologias aprendidas en Botcamps como SoyHenry
          <br />
          Tecnologias que aplican en cuanto a Front End y Back End.
        </p>
      </div>
      <div className={style.containerLenguajes}>
        <div className={style.tecno}>
          <h2 className={style.h2}>Front End</h2>
          <div className={style.leng}>
            <Front/>
          </div>
        </div>
        <div className={style.tecno}>
          <h2 className={style.h2}>Back End</h2>
          <div className={style.leng}>
            <Back/>
          </div>
        </div>

      </div>
    </div>
  );
}
