"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import data from "../../data/PeriodicTableJSON.json";
import { AnimatePresence, motion } from "framer-motion";

interface Element {
  name: string;
  appearance: string;
  atomic_mass: number;
  category: string;
  discovered_by: string;
  boil: number;
  melt: number;
  molar_heat: number;
  period: number;
  number: number;
  phase: string;
}

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [highlightGasElements, setHighlightGasElements] = useState(false);
  const [highlightSolidElements, setHighlightSolidElements] = useState(false);
  const [highlightLiquidElements, setHighlightLiquidElements] = useState(false);
  const handleHighlightGasElements = () => {
    setHighlightGasElements(!highlightGasElements);
  };
  const handleHighlightSolidElements = () => {
    setHighlightSolidElements(!highlightSolidElements);
  };
  const handleHighlightLiquidElements = () => {
    setHighlightLiquidElements(!highlightLiquidElements);
  };

  const handleElementClick = (element: any) => {
    setSelectedElement(element);
  };

  return (
    <section className={style.periodic}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.description__block}>
            <AnimatePresence>
              {selectedElement && (
                <motion.div
                  key={selectedElement.name}
                  className={style.description__wrapper}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: { duration: 1.6 },
                    ease: "easeInOut",
                  }}
                >
                  <h2>{selectedElement.name}</h2>
                  <p>Appearance: {selectedElement.appearance}</p>
                  <p>Atomic Mass: {selectedElement.atomic_mass}</p>
                  <p>Сategory: {selectedElement.category}</p>
                  <p>Discoverd by: {selectedElement.discovered_by}</p>
                  <p>Boiling temperature: {selectedElement.boil}</p>
                  <p>Molar heat capacity: {selectedElement.molar_heat}</p>
                  <p>Number: {selectedElement.number}</p>
                  <p>Period: {selectedElement.period}</p>
                  <p>
                    The phase in which a chemical element exists under standard
                    conditions: {selectedElement.phase}
                  </p>
                  <p>Melting temperature: {selectedElement.melt}</p>
                  <p>Melting temperature: {selectedElement.melt}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className={style.search__box}>
            <h3 className={style.search__title}>Looking for something ?</h3>
            <ul role="list" className={style.search__list}>
              <li>
                <button
                  className={style.search__btn}
                  onClick={handleHighlightGasElements}
                >
                  Gas Elements
                </button>
              </li>
              <li>
                <button
                  className={style.search__btn}
                  onClick={handleHighlightSolidElements}
                >
                  Solid Elements
                </button>
              </li>
              <li>
                <button
                  className={style.search__btn}
                  onClick={handleHighlightLiquidElements}
                >
                  Liquid Elements
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.periodic__table}>
          {/* "phase": "Solid",  */}
          {data.elements.map((element) => (
            <button
              className={`${style.element} ${
                highlightGasElements && element.phase === "Gas"
                  ? style.highlightGasElement
                  : ""
              }
              ${
                highlightSolidElements && element.phase === "Solid"
                  ? style.highlightSolidElement
                  : ""
              }
              ${
                highlightLiquidElements && element.phase === "Liquid"
                  ? style.highlightLiquidElement
                  : ""
              }
              `}
              key={element.name}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
              }}
              onClick={() => handleElementClick(element)}
            >
              <strong>{element.symbol}</strong>
              <small className={style.number}>{element.number}</small>
              <small className={style.name}>{element.name}</small>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
