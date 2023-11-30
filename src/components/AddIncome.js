import { useState, useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./AddIncomeExpense.module.css";

const AddIncome = () => {
    const { addIncome } = useContext(GlobalContex);

    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");

        const incomeName = e.currentTarget.elements.incomeTitle.value;
        const incomeAmount = e.currentTarget.elements.incomeAmount.value;

        if (!incomeName.trim()) {
            setError("Wprowadź nazwę przychodu");
            return;
        }

        const parsedAmount = Number(parseFloat(incomeAmount).toFixed(2));
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            setError("Kwota powinna być większa od 0");
            return;
        }

        const newIncome = {
            id: Math.floor(Math.random() * 100000000),
            text: incomeName,
            amount: parsedAmount,
        };

        const clearInputs = () => {
            e.target.reset();
        };

        addIncome(newIncome);
        clearInputs();
    };

    return (
        <div className={styles.containerSub}>
            <h1 className={styles.inputLabel}>Przychody</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        className={styles.description}
                        type="text"
                        name="incomeTitle"
                        placeholder="Nazwa przychodu"
                    />
                    <input
                        className={styles.amount}
                        type="number"
                        name="incomeAmount"
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

export default AddIncome;
