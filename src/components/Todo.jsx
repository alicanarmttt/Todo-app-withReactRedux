import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import "../css/todo.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteFromList, updateList } from "../redux/slices/todoSlice";

function Todo({ todo }) {
  const { id, content } = todo;
  //update butonu için tıklandığında inputu getiren state.
  const [editable, setEditable] = useState(false);
  //input içinde değişikliği içinde tutacağımız state.
  const [editTodo, setEditTodo] = useState(content);
  const dispatch = useDispatch();
  const updateTodo = () => {
    //todo yeni halini request olarak tut
    const request = {
      id: id,
      content: editTodo,
    };
    //inputla değiştiğimiz todo editTodo state'inden alınıp slice'a gönderilir.
    dispatch(updateList(request));
    setEditable(false);
  };

  const deleteTodo = () => {
    // deleteFromList Redux action'u ile todo'yu silme işlemi gerçekleştirilir
    dispatch(deleteFromList({ id }));
  };
  return (
    <div className="flex-column-todo">
      <div>
        {editable ? (
          <input
            value={editTodo}
            className="input"
            onChange={(e) => setEditTodo(e.target.value)}
            type="text"
          />
        ) : (
          content
        )}
      </div>

      <div className="rewrite">
        <div>
          {editable ? (
            <FaCheck className="todo-icons" onClick={() => updateTodo()} />
          ) : (
            //tıklandığında inputun ortaya çıkması için fonksiyonu çağır.
            <GoPencil onClick={() => setEditable(true)} />
          )}
        </div>
        <div>
          <MdOutlineDelete onClick={() => deleteTodo()} />
        </div>
      </div>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.object.isRequired, // `onCreateTodo` bir fonksiyon olacak ve gereklidir
};

export default Todo;
