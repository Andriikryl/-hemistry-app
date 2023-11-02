import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import data from "../../data/PeriodicTableJSON.json";

// const colorMap = {
//   "noble gas": "#FFBC42",
//   "alkaline earth metal": "#EC674E",
//   "diatomic nonmetal": "#D81159",
//   "alkali metal": "#8F2D56",
//   "transition metal": "#58586B",
//   "post-transition metal": "#218380",
//   lanthanide: "#4AABAF",
//   metalloid: "#73D2DE",
// };

export default function PeriodicTable() {
  return (
    <section className={style.periodic}>
      <Container>
        <div className={style.periodic__table}>
          {data.elements.map((element) => (
            <div
              className={style.element}
              key={element.name}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
                // borderColor: colorMap[element.category],
              }}
            >
              <strong>{element.symbol}</strong>
              <small className={style.number}>{element.number}</small>
              <small className={style.name}>{element.name}</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
