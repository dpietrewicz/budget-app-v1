import { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import OutcomeItem from "./OutcomeItem";
import styles from "./IncomeOutcomeList.module.css";

const OutcomeList = () => {
    const { outcomes } = useContext(GlobalContex);

    return (
        <ul className={styles.list}>
            {outcomes.map((outcome) => (
                <OutcomeItem key={outcome.id} outcome={outcome} />
            ))}
        </ul>
    );
};

export default OutcomeList;
