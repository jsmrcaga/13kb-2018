const Enemy = require('../entities/enemy');

class Support extends Enemy {
	constructor(is=3, it=3, skills={}){
		super('Support', is, it, skills)
	}
}

module.exports = Support;