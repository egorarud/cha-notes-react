import React, { PropsWithChildren, useEffect } from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/img/close.svg";

interface ModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ open, title, onClose, children }) => {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.close} aria-label="Закрыть" onClick={onClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;


