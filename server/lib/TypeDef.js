/**
 * schemaType schemaName {
 *  key: value (properties)
 * }
 */

/**
 * Special Keywords:
 * type, input, enum, scalar, union, interface
 * Query, Mutation
 *
 */

const Property = require("./Property.js");
const Query = require("./Query.js");
const Mutation = require("./Mutation.js");

class TypeDef {
	#stringLiteral;
	constructor(typeDef) {
		// Assigned in this.#extractSchema method
		this.schemaType, this.schemaName, this.properties;
		this.#stringLiteral = typeDef;
		this.#extractSchema(typeDef);
	}

	#extractSchema(typeDefString) {
		this.properties = [];
		this.queries = [];
		this.mutations = [];
		// Separating the typeDef into indiviual groups by splitting at the left brace.
		// Index 0 will always contain the type of schema (type, input, etc) and its name
		const splitSchema = typeDefString.trim().split("{");
		[this.schemaType, this.schemaName] = splitSchema[0].trim().split(" ");
		// Transform the properties of each schema into individuals strings by separating at each new line character
		const properties = splitSchema[1]
			.replaceAll("}", "")
			.replaceAll("\t", "")
			.trim()
			.split("\n");

		for (let i = 0; i < properties.length; i++) {
			if (this.schemaName === "Query") {
				this.queries.push(new Query(properties[i]));
			} else if (this.schemaName === "Mutation") {
				this.mutations.push(new Mutation(properties[i]));
			} else {
				this.properties.push(new Property(properties[i]));
			}
		}

		if (this.properties.length === 0) {
			this.properties = null;
		}
		if (this.queries.length === 0) {
			this.queries = null;
		}
		if (this.mutations.length === 0) {
			this.mutations = null;
		}
	}
}

module.exports = TypeDef;
