import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
    incomes: [
        { id: 1, text: "Salary", amount: 1000 },
        { id: 2, text: "Stuff", amount: 200 },
        { id: 3, text: "Book", amount: 50 },
    ],
    outcomes: [
        { id: 1, text: "Camera", amount: 20 },
        { id: 2, text: "Flowers", amount: 30 },
        { id: 3, text: "Coffe", amount: 70 },
    ],
};

// Create context
export const GlobalContex = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteIncome(id) {
        dispatch({
            type: "DELETE_INCOME",
            payload: id,
        });
    }

    function addIncome(income) {
        dispatch({
            type: "ADD_INCOME",
            payload: income,
        });
    }

    function deleteOutcome(id) {
        dispatch({
            type: "DELETE_OUTCOME",
            payload: id,
        });
    }

    function addOutcome(outcome) {
        dispatch({
            type: "ADD_OUTCOME",
            payload: outcome,
        });
    }

    return (
        <GlobalContex.Provider
            value={{
                incomes: state.incomes,
                outcomes: state.outcomes,
                deleteIncome,
                addIncome,
                deleteOutcome,
                addOutcome,
            }}
        >
            {children}
        </GlobalContex.Provider>
    );
};
