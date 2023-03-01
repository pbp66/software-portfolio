/**
 * schemaType schemaName {
 *  key: value (properties)
 * }
 */

export default class TypeDef {
	constructor(schemaType, schemaName, properties) {
		this.type = schemaType;
		this.name = schemaName;

		// If properties isn't an object, the TypeDef class breaks down
		if (!isObject(properties)) {
			// https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript/8511350#8511350
			throw new ReferenceError(
				`TypeDef properties must be defined as an object with key-value pairs.\nArgument Passed for properties: ${properties.constructor}\nproperties content:${properties}`
			);
		} else {
			this.properties = properties;
		}
	}
}

function isObject(variable) {
	return (
		typeof variable === "object" &&
		!Array.isArray(variable) &&
		variable !== null
	);
}
