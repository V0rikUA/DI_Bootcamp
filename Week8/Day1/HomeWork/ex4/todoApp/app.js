import TodoList from "./todo.js";

const tasks = ["Code!", "Sleep!", "Shift"];

const todoList = new TodoList();

tasks.map((task) => todoList.addTask(task));

console.log(todoList.getAllTask());

todoList.markTaskAsCompleted(tasks[1]);

console.log(todoList.getAllTask());
