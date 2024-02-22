class Property {
	constructor(propertyString) {
		[this.key, this.value] = propertyString
			.trim()
			.replaceAll(" ", "")
			.split(":");

		if (this.value[this.value.length - 1] === "!") {
			this.required = true;
			this.value = this.value.replaceAll("!", "");
		} else {
			this.required = false;
		}
	}
}

module.exports = Property;
