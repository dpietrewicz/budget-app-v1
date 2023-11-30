import { useContext, useState } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./IncomeOutcomeList.module.css";
import IncomeModal from "./IncomeModal";

const IncomeItem = ({ income }) => {
    const { deleteIncome } = useContext(GlobalContex);

    const [isOpen, setIsOpen] = useState(false);

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
            <IncomeModal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                income={income}
            />
        </>
    );
};

export default IncomeItem;
