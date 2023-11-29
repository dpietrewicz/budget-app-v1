import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
    incomes: [],
    outcomes: [],
};

// Create context
export const GlobalContex = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function addIncome(income) {
        dispatch({
            type: "ADD_INCOME",
            payload: income,
        });
    }

    function deleteIncome(id) {
        dispatch({
            type: "DELETE_INCOME",
            payload: id,
        });
    }

    function editIncome(income) {
        dispatch({
            type: "EDIT_INCOME",
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

    function editOutcome(outcome) {
        dispatch({
            type: "EDIT_OUTCOME",
            payload: outcome,
        });
    }

    return (
        <GlobalContex.Provider
            value={{
                incomes: state.incomes,
                outcomes: state.outcomes,
                addIncome,
                deleteIncome,
                editIncome,
                addOutcome,
                deleteOutcome,
                editOutcome,
            }}
        >
            {children}
        </GlobalContex.Provider>
    );
};
