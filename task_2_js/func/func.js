function MusicalInstrument (type, name, model, availible ){
	this.type = type;
	this.name = name;
	this.model = model;
	this.availible = availible;
	this.play = function () {
		console.log (name+" "+model+" "+"is playing");
	}
	this.showType = function () {
		console.log (name+" "+model+" "+"is"+this.type);
	}
}

function Guitar(name, model, strings,availible,type) {
	this.strings = strings;
	MusicalInstrument.call (this, type, name, model, availible);
	this.showStrings = function() {
		console.log (`${this.model} has ${this.strings} strings`)
	}
}

function Drums(type, name, model, availible, set ) {
	MusicalInstrument.call (this, type, name, model, availible);
	this.set = set;
	this.showSet = function() {
		console.log (this.model+' Consist of '+this.set);
	}
	
	// Override
	this.play = function () {
	
		console.log (`${this.name} ${this.model} plays very loud`);
	}
}

var guitar1 = new Guitar ("Ibanez","RG 7620", 7, true, "Gutar");
guitar1.showStrings();

var drums1 = new Drums ("Drums", "SONOR", "507", false, "5 drums + 3 cymbals");
drums1.showSet();
drums1.play();
