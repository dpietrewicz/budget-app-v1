import "./App.css";
import AddExpenses from "./components/AddExpenses";
import AddIncome from "./components/AddIncome";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";
import IncomeSum from "./components/IncomeSum";
import OutcomeList from "./components/OutcomeList";
import OutcomeSum from "./components/OutcomeSum";
import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Balance />
            <section className="inputs">
                <div>
                    <AddIncome />
                    <IncomeList />
                    <IncomeSum />
                </div>

                <div>
                    <AddExpenses />
                    <OutcomeList />
                    <OutcomeSum />
                </div>
            </section>
        </GlobalProvider>
    );
}

export default App;
