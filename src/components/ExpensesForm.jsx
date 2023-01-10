import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  changeExpenseName,
  changeExpenseCost,
  changeExpenseCategory,
} from "../store";

function ExpensesForm() {
  const {
    form: { expenseName, expenseCost, expenseCategory },
    expenses: { expensesList },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleExpenseSubmit = (event) => {
    event.preventDefault();
    console.log(expenseName);
    dispatch(
      addExpense({
        name: expenseName,
        cost: expenseCost,
        category: expenseCategory,
      })
    );

    console.log(expensesList);
  };

  const handleNameChange = (event) => {
    dispatch(changeExpenseName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeExpenseCost(+event.target.value));
  };

  const handleCategoryChange = (event) => {
    dispatch(changeExpenseCategory(event.target.value));
  };

  return (
    <div>
      <h1>Add expenses:</h1>
      <div>
        <form onSubmit={handleExpenseSubmit} action="">
          <label htmlFor="expense-name">Expense name:</label>
          <input
            onChange={handleNameChange}
            id="expense-name"
            type="text"
            placeholder="Add name"
            value={expenseName}
          />
          <label htmlFor="expense-cost">Cost:</label>
          <input
            value={expenseCost}
            onChange={handleCostChange}
            id="expense-cost"
            type="number"
            placeholder="Add cost"
          />
          <label htmlFor="expense-category">Category:</label>
          <select
            value={expenseCategory}
            placeholder="category"
            onChange={handleCategoryChange}
            id="expense-category"
          >
            <option value="none">None</option>
            <option value="Food">Food</option>
            <option value="Business">Business</option>
            <option value="Investments">Investments</option>
            <option value="Fun">Fun</option>
            <option value="Children">Children</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ExpensesForm;
