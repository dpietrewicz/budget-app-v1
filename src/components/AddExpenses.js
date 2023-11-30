import { useState, useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./AddIncomeExpense.module.css";

const AddExpenses = () => {
    const { addOutcome } = useContext(GlobalContex);

    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");

        const expenseName = e.currentTarget.elements.outcomeTitle.value;
        const expenseAmount = e.currentTarget.elements.outcomeAmount.value;

        if (!expenseName.trim()) {
            setError("Wprowadź nazwę wydatku");
            return;
        }

        const parsedAmount = Number(parseFloat(expenseAmount).toFixed(2));
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            setError("Kwota powinna być większa od 0");
            return;
        }

        const newOutcome = {
            id: Math.floor(Math.random() * 100000000),
            text: expenseName,
            amount: parsedAmount,
        };

        const clearInputs = () => {
            e.target.reset();
        };

        addOutcome(newOutcome);
        clearInputs();
    };

    return (
        <div className={styles.containerSub}>
            <h1 className={styles.inputLabel}>Wydatki</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        className={styles.description}
                        type="text"
                        name="outcomeTitle"
                        placeholder="Nazwa wydatku"
                    />
                    <input
                        className={styles.amount}
                        type="number"
                        name="outcomeAmount"
                        placeholder="Kwota"
                        step="0.01"
                    />

                    <button
                        className={styles.addBtn}
                        type="submit"
                        id="btn-income"
                    >
                        Dodaj
                    </button>
                </form>
                <p className={styles.addAlert}>{error}</p>
            </div>
        </div>
    );
};

export default AddExpenses;
