import { useState } from "react";
import "../css/todoCreate.css";
import { addToList } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

function TodoCreate() {
  const [todoText, setTodoText] = useState(""); //inputtan gelen metni tutmak için state.
  const dispatch = useDispatch();
  const createTodo = () => {
    if (!todoText) return;
    const newTodo = {
      id: Math.floor(Math.random() * 9999),
      content: todoText,
    };
    dispatch(addToList(newTodo));
    setTodoText("");
  };
  return (
    <div className="flex-column-create">
      <input
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        className="input"
        type="text"
        placeholder="Hatırlamak istedikleriniz girin."
      />
      <button onClick={createTodo} className="btn">
        Ekle
      </button>
    </div>
  );
}

export default TodoCreate;
