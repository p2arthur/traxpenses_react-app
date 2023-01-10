import { useSelector } from "react-redux/es/exports";

function ExpensesTotal() {
  const totalCost = useSelector(
    ({ expenses: { expensesList, searchTerm } }) => {
      console.log(expensesList);
      return expensesList
        .filter((expense) =>
          expense.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((accumulator, expense) => accumulator + expense.cost, 0);
    }
  );

  return (
    <div className="bg-gray-800 text-white p-3 rounded-bl rounded-br flex justify-end font-bold border-t-4 border-gray-100">
      <h3 className="text-lg"> Total expenses: ${totalCost}</h3>
    </div>
  );
}

export default ExpensesTotal;
