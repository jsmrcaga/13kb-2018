const Game = require('./Game');
const game = new Game('Trololol');

const entities = require('./lib/entities')(game);
game.start();
