import { useContext, useState } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./IncomeOutcomeList.module.css";
import OutcomeModal from "./OutcomeModal";

const OutcomeItem = ({ outcome }) => {
    const { deleteOutcome } = useContext(GlobalContex);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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
                    <button
                        className={styles.btnDefault}
                        onClick={() => setIsOpen(true)}
                    >
                        Edytuj
                    </button>
                </span>
            </li>
            <OutcomeModal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                outcome={outcome}
            />
        </>
    );
};

export default OutcomeItem;
