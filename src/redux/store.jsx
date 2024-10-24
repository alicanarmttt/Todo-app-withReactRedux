import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../redux/slices/todoSlice";
export const store = configureStore({
  reducer: { todoList: todoListReducer },
});
