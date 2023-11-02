"use client";
import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import styles from "./style.module.css";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  handleDismiss: () => void;
}

export function Modal({ title, handleDismiss, children }: ModalProps) {
  React.useEffect(() => {
    function handleKeyDown(event: { code: string }) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Close />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>
            <div>{children}</div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
