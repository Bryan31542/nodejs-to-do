const { read } = require("fs");

require("colors");

const showMenu = () => {
  console.clear();
  console.log("====================================".green);
  console.log("\tSeleccion una opción");
  console.log("====================================\n".green);

  console.log(`${"1.".green} Crear una nueva tarea`);
  console.log(`${"2.".green} Mostrar tareas`);
  console.log(`${"3.".green} Mostrar tareas completadas`);
  console.log(`${"4.".green} Mostrar tareas pendientes`);
  console.log(`${"5.".green} Completar tareas`);
  console.log(`${"6.".green} Borrar tareas`);
  console.log(`${"0.".green} Salir\n`);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Seleccione una opción: ", (opt) => {
    readline.close();
  });
};

const pause = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Presione ${"ENTER".green} para continuar`, (opt) => {
    readline.close();
  });
};

module.exports = {
  showMenu,
  pause,
};
