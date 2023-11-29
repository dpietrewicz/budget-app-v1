import React, { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./IncomeOutcomeList.module.css";

const OutcomeItem = ({ outcome }) => {
    const { deleteOutcome } = useContext(GlobalContex);

    return (
        <li className={styles.listItem}>
            {outcome.amount}
            <span className={styles.currency}>PLN</span>
            {outcome.text}
            <span className={styles.btnWrapper}>
                <button
                    className={styles.btnDefault}
                    onClick={() => deleteOutcome(outcome.id)}
                >
                    Usuń
                </button>
            </span>
        </li>
    );
};

export default OutcomeItem;
