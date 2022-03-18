import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import { ContextProvider } from "./Context/GlobalState";

function App() {
  return (
    <ContextProvider>
      <Header />

      <main className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </main>
    </ContextProvider>
  );
}

export default App;
