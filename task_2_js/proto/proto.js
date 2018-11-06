function MusicalInstrument(type, name, model, availible) {
	this.type = type;
	this.name = name;
	this.model = model;
	this.availible = availible;
}

MusicalInstrument.prototype.play = function () {
	console.log(name + " " + model + " " + "is playing");
}
MusicalInstrument.prototype.showType = function () {
	console.log(name + " " + model + " " + "is" + this.type);
}

function Guitar(name, model, strings, availible, type) {
	this.strings = strings;
	MusicalInstrument.prototype.constructor(type, name, model, availible);
}

Guitar.prototype = Object.create(MusicalInstrument.prototype);

Guitar.prototype.showStrings = function () {
	console.log(`${this.model} has ${this.strings} strings`);
}

function Drums(type, name, model, availible, set) {
	MusicalInstrument.prototype.constructor(type, name, model, availible);
	this.set = set;
}

Drums.prototype = Object.create(MusicalInstrument.prototype);

Drums.prototype.showSet = function () {
	console.log(this.model + ' Consist of ' + this.set);
}

// Override
Drums.prototype.play = function () {

	console.log(`${this.name} ${this.model} plays very loud`);
}

var guitar1 = new Guitar("Ibanez", "RG 7620", 7, true, "Gutar");
guitar1.showStrings();

var drums1 = new Drums("Drums", "SONOR", "507", false, "5 drums + 3 cymbals");
drums1.showSet();
drums1.play();