import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpensesSearch from "./components/ExpensesSearch";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-white bg-black flex justify-center items-center h-20">
        Traxpenses
      </h1>
      <div className="m-10">
        <ExpensesForm />
        <ExpensesSearch />
        <ExpensesList />
        <ExpensesTotal />
      </div>
    </div>
  );
}

export default App;
