const Character = require('./character');

class Player extends Character {
	constructor(args){
		super(...args);
		this.on('die', function(){
			global.Game.end();
		});
	}
};

module.exports = Player;