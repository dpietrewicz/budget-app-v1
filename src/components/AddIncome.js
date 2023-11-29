import React, { useState, useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./AddIncomeExpense.module.css";

const AddIncome = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const { addIncome } = useContext(GlobalContex);

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!text.trim()) {
            setError("Wprowadź nazwę przychodu");
            return;
        }

        const parsedAmount = Number(parseFloat(amount).toFixed(2));
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            setError("Kwota powinna być większa od 0");
            return;
        }

        const newIncome = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: parsedAmount,
        };

        addIncome(newIncome);
        setText("");
        setAmount("");
    };

    return (
        <>
            <div className={styles.containerSub}>
                <h1 className={styles.inputLabel}>Przychody</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <input
                            className={styles.description}
                            type="text"
                            value={text}
                            name="incomeTitle"
                            placeholder="Nazwa przychodu"
                            onChange={(e) => setText(e.target.value)}
                        />
                        <input
                            className={styles.amount}
                            type="number"
                            value={amount}
                            name="incomeAmount"
                            placeholder="Kwota"
                            step="0.01"
                            onChange={(e) => setAmount(e.target.value)}
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
        </>
    );
};

export default AddIncome;
