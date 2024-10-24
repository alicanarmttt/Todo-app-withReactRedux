import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";
import "../css/home.css";
function Home() {
  return (
    <div className="flex-row">
      <TodoCreate></TodoCreate>

      <TodoList></TodoList>
    </div>
  );
}

export default Home;
