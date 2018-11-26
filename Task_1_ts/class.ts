class MusicalInstrument {
	type:string;
	name:string;
	model:string;
	availible:boolean;
	constructor(type:string, name:string, model:string, availible:boolean) {
		this.type = type;
		this.name = name;
		this.model = model;
		this.availible = availible;
	}

	play(): void {
		console.log(this.name + " " + this.model + " " + "is playing");
	}
	showType(): void {
		console.log(this.name + " " + this.model + " " + "is" + this.type);
	}

}

class Guitar extends MusicalInstrument {
	strings:number;
	constructor(type:string, name:string, model:string, availible:boolean, strings:number) {
		super(type, name, model, availible);
		this.strings = strings;
	}
	showStrings(): void {
		console.log(`${this.model} has ${this.strings} strings`);
	}

}

class Drums extends MusicalInstrument {
	set:string;
	constructor(type:string, name:string, model:string, availible:boolean, set:string) {
		super(type, name, model, availible);
		this.set = set;
	}

	showSet(): void {
		console.log(this.model + ' Consist of ' + this.set);
	}

	play(): void {
		super.play();
		console.log(`${this.name} ${this.model} plays very loud`);
	}
}

var guitar1 = new Guitar("Ibanez", "RG 7620", "Gutar", true, 7);
guitar1.showStrings();

var drums1 = new Drums("Drums", "SONOR", "507", false, "5 drums + 3 cymbals");
drums1.showSet();
drums1.play();