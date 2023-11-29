import React, { useContext, useState } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./IncomeOutcomeList.module.css";
import IncomeModal from "./IncomeModal";

const IncomeItem = ({ income }) => {
    const { deleteIncome } = useContext(GlobalContex);

    const [isOpen, setIsOpen] = useState(false);
    // const [text, setText] = useState(income.text);

    return (
        <>
            <li className={styles.listItem}>
                {income.amount}
                <span className={styles.currency}>PLN</span>
                {income.text}
                <span className={styles.btnWrapper}>
                    <button
                        className={styles.btnDefault}
                        onClick={() => deleteIncome(income.id)}
                    >
                        Usuń
                    </button>
                    <button
                        className={styles.btnDefault}
                        onClick={() => setIsOpen(true)}
                    >
                        Edytuj
                    </button>
                </span>
            </li>
            <IncomeModal open={isOpen} onClose={() => setIsOpen(false)}>
                <form>
                    <label htmlFor="editFormName">Nazwa</label>
                    <input
                        value={income.text}
                        type="text"
                        className={styles.modalLabel}
                        id="editFormName"
                        required
                        // onChange={(e) => setText(e.target.value)}
                    />
                    <label htmlFor="editFormAmount">Kwota</label>
                    <input
                        value={income.amount}
                        type="number"
                        id="editFormAmount"
                        className={styles.modalLabel}
                        required
                    />
                </form>
            </IncomeModal>
        </>
    );
};

export default IncomeItem;
