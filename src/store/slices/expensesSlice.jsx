import { createSlice, nanoid } from "@reduxjs/toolkit/dist/createSlice";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: { expensesList: [], searchTerm: "" },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addExpense(state, action) {
      state.expensesList.push({
        name: action.payload.expenseName,
        cost: action.payload.expenseCost,
        category: action.payload.expenseCategory,
        id: nanoid(),
      });
    },
    deleteExpense(state, action) {
      state.expensesList.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addExpense, deleteExpense } =
  expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
