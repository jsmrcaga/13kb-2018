const Entity = require('../../Entity.js');

class Character extends Entity {
	constructor(name, initialStrength, initialToughness, skills){
		this.name = name;
		this.initialToughness = initialToughness;
		this.initialStrength = initialStrength;

		this.strength = this.initialStrength;
		this.toughness = this.initialToughness;

		this.skills = skills || {};
	}

	attack(character){
		// calculate damage
		let dead = character.defends() ? null : character.hurt(damage);
		if(dead === null){
			this.emit('no-damage', character);
		}

		if(dead){
			this.emit('killed', character);
		}

		return dead;
	}

	hurt(dmg){
		this.toughness -= dmg;
		if(this.toughness < 0){
			return this.die();
		}

		return false;
	}

	die(){
		this.__unregister();
		return true;
	}

	defends(){
		// calculate probs
		return false;
	}

}

module.exports = Character;
