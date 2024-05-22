export default class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTask = (taskName) => {
    this.tasks.push({ taskName, completed: false });
  };

  markTaskAsCompleted = (task) => {
    if (this.tasks.length === 0)
      throw new Error("There are to tasks in a list!");

    this.tasks.map((taskItem) => {
      if (task === taskItem.taskName) taskItem.completed = true;
    });
  };

  getAllTask = () => {
    return this.tasks;
  };
}
