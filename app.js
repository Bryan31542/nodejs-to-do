require("colors");
const { showMenu, pause } = require("./helpers/messages");

console.clear();

const main = async () => {
  console.log("Hola mundo".green);

  let opt = "";

  do {
    opt = await showMenu();
    console.log(`\nHas seleccionado la opción: ${opt.green}\n`);

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
