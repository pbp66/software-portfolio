const Property = require("./Property.js");

class Mutation {
	constructor(mutationString) {
		const components = mutationString.match(/[a-zA-Z]+!?/g);
		this.name = components[0];
		this.returnType = components[components.length - 1];
		this.inputs = [];
		for (let i = 1; i < components.length - 1; i += 2) {
			this.inputs.push(
				new Property([components[i], components[i + 1]].join(":"))
			);
		}
	}
}

module.exports = Mutation;
