const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	username: {
		type: String,

	},
	password: {
		type: String,

	},
	email : {
		type: String,
	},
	googleID: String
});

const User = model("User", userSchema);

module.exports = User;