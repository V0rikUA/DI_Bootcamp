import { connect } from "react-redux";
import { addTask, removeTask, toggleTask } from "./TodoActions";
import { useState } from "react";

const TodoList = (props) => {
  const [input, setInput] = useState();
  const [day, setDay] = useState("Sun");
  const [sortByDay, setSortByDay] = useState("all");
  const { myTodo, addTask, toggleTask, removeTask } = props;

  const renderTasks = (task) => {
    return (
      <li key={task.id}>
        <label
          style={{
            textDecoration: task.completed ? "line-through" : "",
          }}
          onClick={() => toggleTask(task.id)}
        >
          {task.text} by {task.day}
        </label>
        {"  "}
        <button onClick={() => removeTask(task.id)}>Delete</button>
      </li>
    );
  };

  const filter = myTodo.filter((task) => {
    return sortByDay === "all" ? true : task.day === sortByDay;
  });

  return (
    <>
      <h2>Todo list</h2>
      <div>
        <input onChange={(e) => setInput(e.target.value)} />{" "}
        <select defaultValue={"Sun"} onChange={(e) => setDay(e.target.value)}>
          <option value={"Sun"}>Sunday</option>
          <option value={"Mon"}>Monday</option>
          <option value={"Tue"}>Tuesday</option>
          <option value={"Wed"}>Wednesday</option>
          <option value={"Thu"}>Thursday</option>
          <option value={"Fri"}>Friday</option>
          <option value={"Sat"}>Saturday</option>
        </select>{" "}
        <button onClick={() => addTask(input, day)}>Add task</button>
      </div>
      <div>
        <label>Sort: </label>
        <select
          onChange={(e) => {
            setSortByDay(e.target.value);
          }}
        >
          <option value={"all"}>All</option>
          <option value={"Sun"}>Sunday</option>
          <option value={"Mon"}>Monday</option>
          <option value={"Tue"}>Tuesday</option>
          <option value={"Wed"}>Wednesday</option>
          <option value={"Thu"}>Thursday</option>
          <option value={"Fri"}>Friday</option>
          <option value={"Sat"}>Saturday</option>
        </select>{" "}
        <ul>
          {filter.map((task) => {
            return renderTasks(task);
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
    addTask: (input, day) => dispatch(addTask(input, day)),
    toggleTask: (id) => dispatch(toggleTask(id)),
    removeTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
