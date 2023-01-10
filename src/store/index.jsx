import { configureStore } from "@reduxjs/toolkit";
import {
  expensesReducer,
  addExpense,
  deleteExpense,
  changeSearchTerm,
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
  changeExpenseName,
  changeExpenseCost,
  changeExpenseCategory,
};
