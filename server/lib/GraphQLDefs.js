import TypeDef from "./TypeDef";

export default class GraphQLDefs {
	#types = [];
	#queries = [];
	#mutations = [];
	#inputs = [];
	constructor(typeDefs = []) {
		if (typeDefs.length > 0) {
			this.#sortTypeDefs(typeDefs);
		}
	}

	getTypeDefs() {}

	addTypeDef(typeDef) {}

	removeTypeDef() {}

	#sortTypeDefs(typeDefs) {
		typeDefs.forEach((typeDef) => {
			switch (typeDef.type) {
				case "type":
					this.#types.push(typeDef);
					break;
				case "query":
					this.#queries.push(typeDef);
					break;
				case "mutation":
					this.#mutations.push(typeDef);
					break;
				case "input":
					this.#inputs.push(typeDef);
					break;
				default:
					// Default Case?
					console.log("Default");
			}
		});
	}
}
