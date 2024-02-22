const express = require("express");
const path = require("path");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const url = require("url");

const db = require("./config/connection.js");
const typeDefs = require("./graphql/graphql.js");
const { resolvers } = require("./controllers/index.js");
const { authMiddleware } = require("./utils/auth.js");
const routes = require("./routes/routes.js");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// const dirname = process.env.DIRECTORY || __dirname;
// console.log(dirname);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

// if we're in production, serve client/build as static assets
// To use with ES6, changed path.join to using URL objects:
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
console.log("\nNode Environment: ", process.env.NODE_ENV, "\n");
if (process.env.NODE_ENV === "production") {
	app.use(
		"/",
		express.static(
			url.pathToFileURL(path.resolve("../client/build/")).toString()
		)
	);
	// app.use(
	// 	express.static(
	// 		new URL(
	// 			require("url").pathToFileURL(process.env.BUILD_PATH).toString()
	// 		).pathname
	// 	)
	// );
}

app.get(process.env.URI_PATH || "/", (req, res) => {
	const options = { root: process.env.ROOT_DIR };
	//res.sendFile(new URL("../client/build/index.html", dirname).pathname);
	res.sendFile(
		//new URL(require("url").pathToFileURL(process.env.HOME_PAGE).toString())
		url
			.pathToFileURL(path.resolve("../client/build/index.html"))
			.toString(),
		options
	);
});

const startApolloServer = () => {
	db.once("open", async () => {
		await server.start();
		app.use(
			"/graphql",
			expressMiddleware(server, {
				context: authMiddleware, // Runs all graphql req's through authMiddleware
			})
		);

		app.listen(PORT, () => {
			console.log(
				`🌍 API server running Now Listening on http://localhost:${PORT}`
			);
			console.log(`Use GraphQL at http://localhost:${PORT}${"/graphql"}`);
		});
	});
};

startApolloServer();
