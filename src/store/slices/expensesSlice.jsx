import { createSlice, nanoid } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: { expensesList: [], searchTerm: "" },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addExpense(state, action) {
      state.expensesList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        category: action.payload.category,
        id: nanoid(),
      });
    },
    deleteExpense(state, action) {
      console.log(state.expensesList);
      const updated = state.expensesList.filter(
        (expense) => expense.id !== action.payload
      );
      console.log(updated);
      state.expensesList = updated;
    },
    deleteAllExpenses(state) {
      state.expensesList = [];
    },
  },
});

export const {
  changeSearchTerm,
  addExpense,
  deleteExpense,
  deleteAllExpenses,
} = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
