import gql from "@apollo/server";

const userDefs = gql`
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
`;

export default userDefs;
