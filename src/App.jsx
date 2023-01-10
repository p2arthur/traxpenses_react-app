import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpensesSearch from "./components/ExpensesSearch";

function App() {
  return (
    <div>
      <ExpensesForm />
      <ExpensesSearch />
      <ExpensesList />
      <ExpensesTotal />
    </div>
  );
}

export default App;
