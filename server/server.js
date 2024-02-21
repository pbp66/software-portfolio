import express from "express";
import path from "node:path";
import mime from "mime";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import db from "./config/connection.js";
import typeDefs from "./graphql/graphql.js";
import { resolvers } from "./controllers/index.js";
import { authMiddleware } from "./utils/auth.js";

//TODO: Remove and Improve the below lines of code
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// To use with ES6, changed path.join to using URL objects:
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
console.log("\nNode Environment: ", process.env.NODE_ENV, "\n");
if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(new URL("../client/build", import.meta.url).pathname)
	);
}
app.get("/", (req, res) => {
	// res.sendFile("index.html", {
	// 	root: path.resolve(__dirname, "../client/build/"),
	// });
	//res.setHeader("Content-Type", mime.getType("js"));
	res.sendFile(
		new URL("../client/build/index.html", import.meta.url).pathname
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
