const Emitter = require('./Emitter');
class Game extends Emitter {
	constructor(container, opts){
		// create cavnas...
		super();
		this.__events = {
			'before-update': [],
			'after-update': [],
			'before-draw': [],
			'after-draw': []
		};
		this.__objects = [];
		global.Game = this;

		this.__registerAwaiting();
	}

	start(){
		this.__paused = false;
		this.__loop();
	}

	pause(){
		this.__paused = true;
	}

	__loop(){
		if(this.__paused){
			return window.requestAnimationFrame(this.__loop);
		}

		this.preUpdate();
		this.update();
		this.postUpdate();

		this.preDraw();
		this.draw();
		this.postDraw();

		return window.requestAnimationFrame(this.__loop);
	}

	__registerObject(entity){
		this.__objects.push(entity);
	}

	__registerAwaiting(){
		if(!global.__awaiting_entities){ return; }
		for(let e of global.__awaiting_entities){
			this.__registerObject(e);
		}
	}

	/*************/
	/** UPDATE ***/
	/*************/
	preUpdate(){
		this.emit('before-update');
	}

	update(){
		for(let obj of this.__objects){
			obj.update();
		}
	}

	postUpdate(){
		this.emit('after-update');
	}

	/*************/
	/**** DRAW ***/
	/*************/
	preDraw(){
		this.emit('before-draw');
	}

	draw(){
		
	}

	postDraw(){
		this.emit('after-draw');
	}

	end(){
		throw new Error('This method should be overriden');
	}
}


module.exports = Game;