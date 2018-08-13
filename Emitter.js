class Emitter {
	constructor(){}

	on(event, callback){
		this.__events[event] = this.__events[event] || [];
		this.__events[event].push(callback);
	}

	emit(event, data){
		if(!this.__events[event]){
			throw new Error(`Event ${event} not registered`);
		}
		for(let ev of this.__events[event]){
			ev(data);
		}
	}
}

module.exports = Emitter;
