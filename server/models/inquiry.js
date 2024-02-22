const mongoose = require("mongoose");
const { DateTime } = require("luxon");
const {
	getUUID,
	getDate,
	emailRegex,
	phoneNumberRegex,
} = require("../utils/index.js");

const Schema = mongoose.Schema;
const inquirySchema = new Schema(
	{
		uuid: {
			type: String,
			required: true,
			unique: true,
			default: () => {
				return getUUID();
			},
		},
		first_name: {
			type: String,
			required: true,
			match: [/[a-zA-Z]{2,}/, "Must enter a valid first name"],
		},
		last_name: {
			type: String,
			required: true,
			match: [/[a-zA-Z]{2,}/, "Must enter a valid last name"],
		},
		email: {
			type: String,
			required: true,
			unique: true,
			// Doesn't match ALL emails, but 99% of "normal" emails
			match: [emailRegex, "Must enter a valid email address"],
		},
		phone: {
			type: String,
			required: true,
			match: [phoneNumberRegex, "Must enter a valid phone number"],
		},
		organization: {
			type: String,
			match: [/[a-zA-Z0-9,.-]+/, "Must enter a valid organization name"],
		},
		createdAt: {
			type: String,
			default: () => {
				return DateTime.now().toISO();
			},
			get: getDate,
		},
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

inquirySchema.virtual("fullName").get(function () {
	return this.first_name + " " + this.last_name;
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);
exports.default = Inquiry;
