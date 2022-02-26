const Task = require("../models/task");

class Tasks {
  _list = {};

  get list() {
    const list = [];

    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArr(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  showComplete() {
    console.log("");
    this.list.forEach((task, index) => {
      const i = `${index + 1}`.green;
      const { description, completed } = task;
      const status = completed ? "Completada".green : "Pendiente".red;

      console.log(`${i}. ${description} :: ${status}`);
    });
  }
}

module.exports = Tasks;
