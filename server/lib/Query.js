import Property from "./Property.js";

export default class Query {
	constructor(queryString) {
		const components = queryString.match(/[a-zA-Z]+!?/g);
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
