import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteExpense } from "../store";

function ExpensesList() {
  const { expenses } = useSelector(
    ({ expenses: { expensesList, searchTerm } }, form) => {
      const filteredExpenses = expensesList.filter((expense) =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return { expenses: filteredExpenses };
    }
  );

  const dispatch = useDispatch();

  const handleDeleteExpense = (expense) => {
    dispatch(deleteExpense(expense));
  };

  const renderedExpenses = expenses.map((expense) => (
    <div key={expense.id}>
      <p>{expense.name}</p>
      <p>{expense.cost}</p>
      <p>{expense.category}</p>
      <button onClick={() => handleDeleteExpense(expense.id)}>
        delete expense
      </button>
    </div>
  ));

  return <div>{renderedExpenses}</div>;
}

export default ExpensesList;
