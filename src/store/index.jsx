import { configureStore } from "@reduxjs/toolkit";
import {
  expensesReducer,
  addExpense,
  deleteExpense,
  changeSearchTerm,
  deleteAllExpenses,
} from "./slices/expensesSlice";
import {
  formReducer,
  changeExpenseName,
  changeExpenseCost,
  changeExpenseCategory,
} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    form: formReducer,
  },
});

export {
  store,
  changeSearchTerm,
  addExpense,
  deleteExpense,
  deleteAllExpenses,
  changeExpenseName,
  changeExpenseCost,
  changeExpenseCategory,
};
