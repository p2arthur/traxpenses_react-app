import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeSearchTerm } from "../store";

function ExpensesSearch() {
  const { searchTerm } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
    console.log(searchTerm);
  };
  return (
    <div>
      <label htmlFor="expenses-search">Search expenses</label>
      <input
        value={searchTerm}
        onChange={handleSearchChange}
        id="expenses-search"
        type="text"
      />
    </div>
  );
}

export default ExpensesSearch;
