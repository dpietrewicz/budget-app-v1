import React, { useState } from "react";
import styles from "./IncomeOutcomeList.module.css";

const IncomeModal = ({ open, children, onClose, handleSubmit }) => {
    if (!open) return null;
    return (
        <>
            <div className={styles.overlayStyles} />
            <div className={styles.modalStyles}>
                {children}
                <button onClick={handleSubmit} className={styles.btnDefault}>
                    Zapisz
                </button>
                <button onClick={onClose} className={styles.btnDefault}>
                    Anuluj
                </button>
            </div>
        </>
    );
};

export default IncomeModal;
