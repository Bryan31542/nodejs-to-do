const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Crear una nueva tarea",
      },
      {
        value: "2",
        name: "2. Mostrar tareas",
      },
      {
        value: "3",
        name: "3. Mostrar tareas completadas",
      },
      {
        value: "4",
        name: "4. Mostrar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tareas",
      },
      {
        value: "6",
        name: "6. Borrar tareas",
      },
      { value: "0", name: "0. Salir" },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("====================================".green);
  console.log("\tSeleccion una opción");
  console.log("====================================\n".green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  pause,
};
