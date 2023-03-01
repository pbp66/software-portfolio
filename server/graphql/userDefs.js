import gql from "@apollo/server";

const userDefs = gql`
	type User {
		_id: ID!
		uuid: String!
		email: String!
		password: String!
		phone: String!
	}

	type Auth {
		token: String!
		user: User
	}
`;

export default userDefs;
