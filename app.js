require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveData");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const taskDB = readDB();

  if (taskDB) {
    // Establecer tareas
    tasks.loadTasksFromArr(taskDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Ingrese descripción de la tarea:");
        tasks.createTask(desc);
        break;
      case "2":
        tasks.showComplete();
        break;
      case "3":
        tasks.showPendingCompleted(true);
        break;
      case "4":
        tasks.showPendingCompleted(false);
        break;
    }

    saveDB(tasks.list);

    await pause();
  } while (opt !== "0");
};

main();
