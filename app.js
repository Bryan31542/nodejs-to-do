require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB } = require("./helpers/saveData");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Ingrese descripción de la tarea:");
        tasks.createTask(desc);
        break;
      case "2":
        console.log(tasks.list);
        break;
    }

    saveDB(tasks.list);

    await pause();
  } while (opt !== "0");
};

main();
