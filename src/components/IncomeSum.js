import React, { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";

const IncomeSum = () => {
    const { incomes } = useContext(GlobalContex);

    const getIncomes = incomes.map((income) => income.amount);
    const totalIncomes = getIncomes
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return <div>Suma przychodów: {totalIncomes}</div>;
};

export default IncomeSum;
