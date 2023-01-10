import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeSearchTerm, deleteAllExpenses } from "../store";

function ExpensesSearch() {
  const { searchTerm } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
    console.log(searchTerm);
  };

  const handleDeleteAllExpenses = () => {
    dispatch(deleteAllExpenses());
  };
  return (
    <div className="bg-gray-800 text-white py-4 mt-5 px-3 flex justify-between items-end md:items-center space-x-2 rounded-tr rounded-tl">
      <div className="flex space-y-2 flex-col md:flex-row space-x-3 items-center justify-between">
        <label htmlFor="expenses-search">Search expenses:</label>
        <input
          className="p-1 rounded text-black"
          value={searchTerm}
          onChange={handleSearchChange}
          id="expenses-search"
          type="text"
        />
      </div>
      <button
        onClick={handleDeleteAllExpenses}
        className="bg-red-500 rounded p-1 hover:bg-red-600 transition-all"
      >
        Delete all expenses
      </button>
    </div>
  );
}

export default ExpensesSearch;
