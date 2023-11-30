import { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import IncomeItem from "./IncomeItem";
import styles from "./IncomeOutcomeList.module.css";

const IncomeList = () => {
    const { incomes } = useContext(GlobalContex);

    return (
        <ul className={styles.list}>
            {incomes.map((income) => (
                <IncomeItem key={income.id} income={income} />
            ))}
        </ul>
    );
};

export default IncomeList;
