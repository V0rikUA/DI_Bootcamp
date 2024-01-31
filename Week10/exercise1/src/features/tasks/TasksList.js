import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  EDIT_TASK,
} from "./tasksReducer";
import "./tasks.css";

const TaskList = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const addInputRef = useRef();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const filterTasks = tasks.filter((task) => {
    if (filter == "all") return task;
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
  });

  console.log(tasks);
  return (
    <>
      <div>
        <h1>Tasks List</h1>
      </div>{" "}
      <div>
        <button
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
        >
          Active
        </button>
      </div>
      <div>
        <input type="text" placeholder="Add a new task" ref={addInputRef} />{" "}
        <button
          onClick={() => {
            dispatch({ type: ADD_TASK, text: addInputRef.current?.value });
            addInputRef.current.value = "";
          }}
        >
          Add task
        </button>
      </div>
      {filterTasks.map((task) => {
        return (
          <div key={task.id} className={task.completed ? "completed" : ""}>
            <span
              onClick={() => {
                dispatch({ type: COMPLETE_TASK, id: task.id });
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => {
                dispatch({ type: REMOVE_TASK, id: task.id });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
