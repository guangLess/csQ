function TempClass (name) {
	this.name = name
	this.cup = 'tea'
}

TempClass.prototype.addSpice = function(spice){
	this.cup = this.cup + spice
	console.log(this.name + this.cup)
}

const blackTea = new TempClass('black')
blackTea.addSpice('cinnamon')