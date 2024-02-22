require("dotenv").config();
const jwt = require("jsonwebtoken");

// TODO: Refactor as my own work and for improved performance/functionality!

// set token secret and expiration date
const secret = process.env.SERVER_SECRET;
const expiration = "2h";

function signToken({ username, email, _id }) {
	const payload = { username, email, _id };
	return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

// function for our authenticated routes
function authMiddleware({ req, res }) {
	// allows token to be sent via body, query, or header
	let token = req.body.token || req.query.token || req.headers.authorization;
	// ["Bearer", "<tokenvalue>"]
	if (req.headers.authorization) {
		token = token.split(" ").pop().trim();
	}

	if (!token) {
		return req; // Return request unmodified
	}

	// verify token and get user data out of it
	try {
		const { data } = jwt.verify(token, secret, { maxAge: expiration });
		req.user = data; // Added to context of each resolver
		return req;
	} catch (err) {
		console.error("Invalid token", err);
	}
}

module.exports = { signToken, authMiddleware };
