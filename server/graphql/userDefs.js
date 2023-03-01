const userDefs = `
	type User {
		_id: ID!
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
	}
`;

export default userDefs;
