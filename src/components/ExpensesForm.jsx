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
    <div className="p-10 rounded space-y-5 text-center md:text-start bg-gray-800 text-white">
      <h1 className="text-2xl">Add expenses:</h1>
      <div>
        <form
          className="flex flex-col space-y-5 md:flex-row justify-around items-center md:space-x-3 md:space-y-0 md:items-end"
          onSubmit={handleExpenseSubmit}
          action=""
        >
          <div className="w-full space-y-2">
            <label htmlFor="expense-name">Expense name:</label>
            <input
              className="rounded p-2 w-full bg-white"
              onChange={handleNameChange}
              id="expense-name"
              type="text"
              placeholder="Add name"
              value={expenseName}
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="expense-cost">Cost:</label>
            <input
              className="rounded p-2 w-full"
              value={expenseCost}
              onChange={handleCostChange}
              id="expense-cost"
              type="number"
              placeholder="Add cost"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="expense-category">Category:</label>
            <select
              className="rounded p-2 w-full"
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
          </div>
          <button className=" w-full md:w-24 border px-2 py-2 border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpensesForm;
