import { createSlice } from "@reduxjs/toolkit";

//todolisti al ve initialstate e gönder.
const getTodosFromStorage = () => {
  if (localStorage.getItem("todoList")) {
    return JSON.parse(localStorage.getItem("todoList"));
  }
  return [];
};

const writeTodosToStorage = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
const initialState = {
  todos: getTodosFromStorage(),
  totalTodo: 0,
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.todos = [...state.todos, action.payload];
      writeTodosToStorage(state.todos);
    },
    updateList: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return action.payload; // Güncellenmiş todo burada
      });
      writeTodosToStorage(state.todos);
    },
    deleteFromList: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      writeTodosToStorage(state.todos);
    },
  },
});

export const { addToList, updateList, deleteFromList } = todoSlice.actions;

export default todoSlice.reducer;
