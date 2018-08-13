const Enemy = require('../entities/enemy');

class Technician extends Enemy {
	constructor(is=3, it=3, skills={}){
		super('Technician', is, it, skills)
	}
}

module.exports = Technician;