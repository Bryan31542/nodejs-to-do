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
        name: `${"1.".green} Crear una nueva tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Mostrar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Mostrar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Mostrar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tareas`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tareas`,
      },
      { value: "0", name: `${"0.".green} Salir` },
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

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) return "Por favor ingrese un valor";
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
