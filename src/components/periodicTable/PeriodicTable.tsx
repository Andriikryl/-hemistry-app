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

  const handleElementClick = (element: any) => {
    setSelectedElement(element);
  };

  return (
    <section className={style.periodic}>
      <Container>
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
        <div className={style.periodic__table}>
          {data.elements.map((element) => (
            <button
              className={style.element}
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
