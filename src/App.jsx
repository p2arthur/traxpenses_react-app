import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesTotal from "./components/ExpensesTotal";

function App() {
  return (
    <div>
      <ExpensesForm />
      <ExpensesList />
      <ExpensesTotal />
    </div>
  );
}

export default App;
