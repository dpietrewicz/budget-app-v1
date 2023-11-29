export default (state, action) => {
    switch (action.type) {
        case "ADD_INCOME":
            return {
                ...state,
                incomes: [action.payload, ...state.incomes],
            };

        case "DELETE_INCOME":
            return {
                ...state,
                incomes: state.incomes.filter(
                    (income) => income.id !== action.payload
                ),
            };

        case "EDIT_INCOME": {
            const newList = state.incomes.map((income) => {
                if (income.id === action.payload.id) {
                    return action.payload;
                }
                return income;
            });
            return { ...state, incomes: newList };
        }

        case "DELETE_OUTCOME":
            return {
                ...state,
                outcomes: state.outcomes.filter(
                    (outcome) => outcome.id !== action.payload
                ),
            };

        case "ADD_OUTCOME":
            return {
                ...state,
                outcomes: [action.payload, ...state.outcomes],
            };

        case "EDIT_OUTCOME": {
            const newList = state.outcomes.map((outcome) => {
                if (outcome.id === action.payload.id) {
                    return action.payload;
                }
                return outcome;
            });
            return { ...state, outcomes: newList };
        }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
