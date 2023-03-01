import gql from "@apollo/server";

const inquiryDefs = gql`
	type Inquiry {
		_id: ID!
		first_name: String!
		last_name: String!
		email: String!
		phone: String!
		organization: String!
	}
`;

export default inquiryDefs;
