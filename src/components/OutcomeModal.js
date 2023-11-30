import { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
import styles from "./IncomeOutcomeList.module.css";

const OutcomeModal = ({ open, onClose, outcome }) => {
    const { editOutcome } = useContext(GlobalContex);

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = event.currentTarget.elements.editFormName.value;
        const amount = Number(
            event.currentTarget.elements.editFormAmount.value
        );
        const updatedOutcome = { id: outcome.id, text, amount };

        editOutcome(updatedOutcome);
        onClose();
    };

    if (!open) return null;
    return (
        <div className={styles.overlayStyles}>
            <div className={styles.modalStyles}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="editFormName">Nazwa</label>
                    <input
                        defaultValue={outcome.text}
                        type="text"
                        className={styles.modalInputStyles}
                        id="editFormName"
                        name="editFormName"
                        required
                    />
                    <label htmlFor="editFormAmount">Kwota</label>
                    <input
                        defaultValue={outcome.amount}
                        type="number"
                        id="editFormAmount"
                        name="editFormAmount"
                        className={styles.modalInputStyles}
                        required
                        min="0.01"
                        step="0.01"
                    />

                    <button className={styles.btnDefault} type="submit">
                        Zapisz
                    </button>
                    <button
                        onClick={onClose}
                        className={styles.btnDefault}
                        type="button"
                    >
                        Anuluj
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OutcomeModal;
