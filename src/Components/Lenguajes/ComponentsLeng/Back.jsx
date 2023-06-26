import nodejs from "../LogoLeng/nodejs.png";
import express from "../LogoLeng/framework express.png";
import nodemon from "../LogoLeng/nodemon.png";
import sql from "../LogoLeng/sql.png";
import style from "./Back.module.css";

export default function Back() {
  return (
    <div className={style.logs}>
      <div className={style.containers}>
        <img src={nodejs} alt="node" className={style.nodejs} />
        <p>NODE JS</p>
      </div>
      <div className={style.containers}>
        <img src={sql} alt="sql" className={style.sql} />
        <p>SQL</p>
      </div>
      <div className={style.containers}>
        <img src={express} alt="express" className={style.express} />
        <p>EXPRESS</p>
      </div>
      <div className={style.containers}>
        <img src={nodemon} alt="nodemon" className={style.nodemon} />
        <p>NODEMON</p>
      </div>
    </div>
  );
}
