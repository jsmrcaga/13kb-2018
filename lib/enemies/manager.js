const Enemy = require('../entities/enemy');

class Manager extends Enemy {
	constructor(is=3, it=3, skills={}){
		super('Manager', is, it, skills);
	}
}

module.exports = Manager;