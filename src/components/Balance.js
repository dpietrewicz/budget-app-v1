import { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./Balance.module.css";

const Balance = () => {
    const { incomes } = useContext(GlobalContex);
    const { outcomes } = useContext(GlobalContex);

    const getIncomes = incomes.map((income) => income.amount);
    const totalIncomes = getIncomes
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const getOutcomes = outcomes.map((outcome) => outcome.amount);
    const totalOutcomes = getOutcomes
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const total = totalIncomes - totalOutcomes;

    return (
        <section className={styles.balance}>
            <div className={styles.balanceWrapper}>
                <h2>
                    {total === 0 ? <span>Bilans wynosi</span> : null}
                    {total > 0 ? <span>Możesz jeszcze wydać</span> : null}
                    {total < 0 ? <span>Bilans jest ujemny</span> : null}
                    <span className={styles.balanceAmount}>
                        {Math.abs(total).toFixed(2)}
                    </span>
                    <span className={styles.balanceCurrency}>PLN</span>
                </h2>
            </div>
        </section>
    );
};

export default Balance;
