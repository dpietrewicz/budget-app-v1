export default (state, action) => {
    switch (action.type) {
        case "DELETE_INCOME":
            return {
                ...state,
                incomes: state.incomes.filter(
                    (income) => income.id !== action.payload
                ),
            };
        case "ADD_INCOME":
            return {
                ...state,
                incomes: [action.payload, ...state.incomes],
            };

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
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
