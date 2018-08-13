const Enemy = require('../entities/enemy');

class Rat extends Enemy {
	constructor(is=3, it=3, skills={}){
		super('Rat', is, it, skills)
	}
}

module.exports = Rat;