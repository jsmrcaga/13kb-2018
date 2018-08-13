const Enemy = require('../entities/enemy');

class Skeleton extends Enemy {
	constructor(is=3, it=3, skills={}){
		super('Skeleton', is, it, skills)
	}
}

module.exports = Skeleton;