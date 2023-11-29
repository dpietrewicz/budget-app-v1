import React, { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";

const OutcomeSum = () => {
    const { outcomes } = useContext(GlobalContex);

    const getOutcomes = outcomes.map((outcome) => outcome.amount);
    const totalOutcomes = getOutcomes
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return <div>Suma wydatków: {totalOutcomes}</div>;
};

export default OutcomeSum;
