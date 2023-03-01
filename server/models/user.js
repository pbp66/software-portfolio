import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { DateTime } from "luxon";
import { getUUID, getDate, emailRegex } from "../utils";
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		uuid: {
			type: String,
			required: true,
			unique: true,
			default: () => {
				return getUUID();
			},
		},
		username: {
			type: String,
			required: true,
			match: [/[a-zA-Z\d]{4,}/, "Must enter a valid username"],
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
		password: {
			type: String,
			required: true,
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

userSchema.virtual("fullName").get(function () {
	return this.first_name + " " + this.last_name;
});

// hash (encrypt) user password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 12;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

userSchema.pre("findOneAndUpdate", function (next) {
	this.set({ updatedAt: DateTime.now().toISO() });
	this.update({}, { $inc: { __v: 1 } });
	next();
});

userSchema.pre("updateOne", function (next) {
	this.set({ updatedAt: DateTime.now().toISO() });
	this.update({}, { $inc: { __v: 1 } });
	next();
});

const User = mongoose.model("User", userSchema);
export default User;
