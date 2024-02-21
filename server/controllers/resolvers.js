import { GraphQLError } from "graphql";
import { User, Inquiry } from "../models/index.js";
import { signToken } from "../utils/auth.js";

function throwUnauthenticatedError() {
	throw new GraphQLError("User is not authenticated", {
		extensions: {
			code: "UNAUTHENTICATED",
			http: { status: 401 },
		},
	});
}

const resolvers = {
	Query: {
		me: async (parent, args, context, info) => {
			if (context.user) {
				return User.findById(context.user._id);
			}
			throwUnauthenticatedError();
		},
	},
	Mutation: {
		login: async (parents, { email, password }, context, info) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new GraphQLError("User is not authenticated", {
					extensions: {
						code: "UNAUTHENTICATED",
						http: { status: 401 },
					},
				});
			}

			const correctPasswordBoolean = await user.isCorrectPassword(
				password
			);

			if (!correctPasswordBoolean) {
				throw new GraphQLError("Wrong Password", {
					extensions: {
						code: "INCORRECT PASSWORD",
						http: { status: 401 },
					},
				});
			}

			const token = signToken(user);
			return { token, user };
		},
	},
};

export default resolvers;
