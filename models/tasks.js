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

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
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

  showPendingCompleted(checked = true) {
    console.log("");
    let counter = 0;
    this.list.forEach((task) => {
      const { description, completed } = task;
      const status = completed ? "Completada".green : "Pendiente".red;

      if (checked) {
        // Mostrar completadas
        if (completed) {
          counter++;
          console.log(
            `${counter + ".".green} ${description} :: ${completed.green}`
          );
        }
      } else {
        if (!completed) {
          counter++;
          console.log(`${counter + ".".green} ${description} :: ${status}`);
        }
      }
    });
  }

  toggleCompleted(ids = []) {
    // Marcando tareaas completadas, incluyendo fecha
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completed) {
        task.completed = new Date().toISOString();
      }
    });

    // Limpiando los que no esten marcados
    this.list.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completed = null;
      }
    });
  }
}

module.exports = Tasks;
