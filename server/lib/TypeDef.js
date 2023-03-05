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

import Property from "./Property.js";

export default class TypeDef {
	#stringLiteral;
	constructor(typeDef) {
		// Assigned in this.#extractSchema method
		this.schemaType, this.schemaName, this.properties;
		this.#stringLiteral = typeDef;
		this.#extractSchema(typeDef);
	}

	#extractSchema(typeDefString) {
		this.properties = [];
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

		if (this.schemaName === "Query" || this.schemaName === "Mutation") {
			// TODO: Implement
			this.properties = properties;
		} else {
			for (let i = 0; i < properties.length; i++) {
				this.properties.push(new Property(properties[i]));
			}
		}
	}
}
