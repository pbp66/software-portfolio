const { v4: uuidv4 } = require("uuid");

function getUUID() {
	return uuidv4();
}

module.exports = { getUUID };
