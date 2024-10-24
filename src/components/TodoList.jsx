import "../css/todoList.css";
import Todo from "../components/Todo";
import "../css/todoList.css";

import { useSelector } from "react-redux";
function TodoList() {
  //todos state ini selector ile aldık ve her bir todoyu döndürmüş olduk.
  const { todos } = useSelector((store) => store.todoList);
  if (todos.length === 0) {
    return null; // Boş ise hiçbir şey render etmiyor.
  }
  return (
    <div className="cerceve">
      {todos &&
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo}></Todo>;
        })}
    </div>
  );
}

export default TodoList;
