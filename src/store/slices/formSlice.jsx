import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { expenseName: "", expenseCost: 0, expenseCategory: "" },
  reducers: {
    //This reducer will expect a dispatched payload containing the name as a payload
    changeExpenseName(state, action) {
      state.expenseName = action.payload;
    },

    //This reducer will expect a dispatched payload containing the cost as a payload
    changeExpenseCost(state, action) {
      state.expenseCost = action.payload;
    },

    //This reducer will expect a dispatched payload containing the category as a payload
    changeExpenseCategory(state, action) {
      state.expenseCategory = action.payload;
    },
  },
});

export const { changeExpenseName, changeExpenseCost, changeExpenseCategory } =
  formSlice.actions;
export const formReducer = formSlice.reducer;
