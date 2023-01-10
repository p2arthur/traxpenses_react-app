function ExpensesForm() {
  const handleCategoryChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Add expenses:</h1>
      <div>
        <label htmlFor="expense-name">Expense name:</label>
        <input id="expense-name" type="text" placeholder="name" />
        <label htmlFor="expense-cost">Expense cost:</label>
        <input id="expense-cost" type="number" />
        <label htmlFor="expense-category">Expense cost:</label>
        <select onChange={handleCategoryChange} id="expense-category">
          <option value="">Food</option>
          <option value="">Business</option>
          <option value="">Investments</option>
          <option value="">Fun</option>
          <option value="">Children</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesForm;
