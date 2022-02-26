require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  console.log("Hola mundo".green);

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
        console.log(tasks._list);
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();
