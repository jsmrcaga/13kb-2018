function factory(game){
	let entities = {
		enemies: {},
		objects: {}
	};

	entities.enemies.Rat = require('./enemies/rat.js');
};

module.exports = factory;