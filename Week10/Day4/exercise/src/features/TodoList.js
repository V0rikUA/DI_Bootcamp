import { connect, useDispatch } from "react-redux";
import { addTask, removeTask, toggleTask } from "./TodoActions";
import { useState } from "react";

const TodoList = (props) => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const { myTodo, addTask, toggleTask, removeTask } = props;
  return (
    <>
      <h2>Todo list</h2>
      <div>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addTask(input)}>Add task</button>
      </div>
      <div>
        <ul>
          {myTodo.map((task) => {
            return (
              <li key={task.id}>
                <label
                  style={{
                    textDecoration: task.completed ? "line-through" : "",
                  }}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </label>
                {"  "}
                <button onClick={() => removeTask(task.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myTodo: state.todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (input) => dispatch(addTask(input)),
    toggleTask: (id) => dispatch(toggleTask(id)),
    removeTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
