const { DateTime } = require("luxon");

function getDate(date) {
	return DateTime.fromJSDate(date).toFormat("MM/dd/yyyy hh:mm a");
}

function getISODate(date) {
	return date;
}

module.exports = { getDate, getISODate };
