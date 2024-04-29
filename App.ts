import { fight } from "./Fight";
import { Player } from "./Player";

// create player object
const johnDoe = new Player("John D. Doe", 2000, true);
const goku = new Player("Son Goku", 1800, true);
const vegita = new Player("Vegita", 1800, true);
const cell = new Player("Cell", 1900, false);
const freezer = new Player("Freezer", 1000, false);
const yamcha = new Player("Yamcha", 10, true);

// let them fight
fight(johnDoe, goku);
fight(goku, vegita);
fight(vegita, cell);
fight(freezer, cell);
fight(goku, yamcha);
fight(yamcha, vegita);