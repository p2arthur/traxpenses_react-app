import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteExpense } from "../store";

function ExpensesList() {
  const { expenses, name } = useSelector(
    ({ expenses: { expensesList, searchTerm }, form }) => {
      const filteredExpenses = expensesList.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return { expenses: filteredExpenses, name: form.expenseName };
    }
  );

  const dispatch = useDispatch();

  const handleDeleteExpense = (expense) => {
    dispatch(deleteExpense(expense));
  };

  const renderedExpenses = expenses.map((expense, index) => {
    console.log(name);
    const isBold =
      name && expense.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div
        key={expense.id}
        className={`flex  items-center justify-between p-3 px-7 ${
          isBold && "font-bold"
        } ${index % 2 == 0 ? "bg-gray-300" : "bg-gray-100"}`}
      >
        <p>{expense.name}</p>
        <p>R$ {expense.cost}</p>
        <p>{expense.category}</p>
        <button
          onClick={() => handleDeleteExpense(expense.id)}
          className="border border-red-400 rounded text-red-400 p-1 hover:bg-red-400 hover:text-white transition-all"
        >
          delete expense
        </button>
      </div>
    );
  });

  return <div>{renderedExpenses}</div>;
}

export default ExpensesList;
