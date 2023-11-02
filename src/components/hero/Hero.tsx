import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <h1 className={style.hero__title}>Periodic table</h1>
        </div>
      </Container>
    </section>
  );
}
