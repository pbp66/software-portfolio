const TypeDef = require("./TypeDef.js");
class GraphQLSchema {
	#objectTypes = [];
	#queries = [];
	#mutations = [];
	#inputs = [];
	#scalars = [];
	#interfaces = [];
	#unions = [];
	#typeDefRegex = /[a-z]{4,5}\s[a-zA-z]+\s\{[a-zA-Z),(_!:\s]+\}/g;
	constructor(gqlString) {
		this.schemas = [];
		const typeDefs = gqlString.match(this.#typeDefRegex);
		typeDefs.forEach((typeDef) => this.schemas.push(new TypeDef(typeDef)));

		console.log(this.schemas);
	}

	static addGraphQLSchemas(...schemas) {}
	// getTypeDefs() {}

	// addTypeDef(typeDef) {}

	// removeTypeDef() {}
}

const userDefs = `
	type User {
		_id: ID!
		username: String!
		first_name: String!
		last_name: String!
		email: String!
		password: String!
	}

	input userInput {
		username: String!
		first_name: String!
		last_name: String!
		email: String!
		password: String!
	}

	type Auth {
		token: String!
		user: User
	}

	type Query {
		me: User
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(userInput!): User
	}
`;

new GraphQLSchema(userDefs);

module.exports = GraphQLSchema;
