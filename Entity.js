const Emitter = require('./Emitter');
class Entity extends Emitter {
	constructor(name) {
		super();
		this.name = name;
		this.__events = {
			'killed': [],
			'no-damage':[]
		};
		
		this.__register();
	}

	__register(){
		if(!global.Game){
			global.__awaiting_entities = global.__awaiting_entities || [];
			return global.__awaiting_entities.push(this);
		}

		global.Game.__registerObject(this);
	}

	update(){
		throw new Error('Please override update() function for Entities');
	}

	draw(canvas, ctx) {
		throw new Error('Please override draw() function for Entities');
	}
}

module.exports = Entity;
