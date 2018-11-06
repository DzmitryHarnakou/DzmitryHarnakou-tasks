class MusicalInstrument {
	constructor(type, name, model, availible) {
		this.type = type;
		this.name = name;
		this.model = model;
		this.availible = availible;
	}

	play() {
		console.log(this.name + " " + this.model + " " + "is playing");
	}
	showType() {
		console.log(this.name + " " + this.model + " " + "is" + this.type);
	}

}

class Guitar extends MusicalInstrument {
	constructor(type, name, model, availible, strings) {
		super(type, name, model, availible);
		this.strings = strings;
	}
	showStrings() {
		console.log(`${this.model} has ${this.strings} strings`);
	}

}

class Drums extends MusicalInstrument {
	constructor(type, name, model, availible, set) {
		super(type, name, model, availible);
		this.set = set;
	}

	showSet() {
		console.log(this.model + ' Consist of ' + this.set);
	}

	play() {
		super.play(); //invoke parent method 
		console.log(`${this.name} ${this.model} plays very loud`);
	}
}

var guitar1 = new Guitar("Ibanez", "RG 7620", 7, true, "Gutar");
guitar1.showStrings();

var drums1 = new Drums("Drums", "SONOR", "507", false, "5 drums + 3 cymbals");
drums1.showSet();
drums1.play();