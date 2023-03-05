export default class Property {
	constructor(propertyString) {
		[this.key, this.value] = propertyString
			.trim()
			.replaceAll(" ", "")
			.split(":");

		if (this.value[this.value.length - 1] === "!") {
			this.required = true;
		} else {
			this.required = false;
		}
	}
}
