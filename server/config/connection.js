import mongoose from "mongoose";

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/software-portfolio",
	{}
);

export default mongoose.connection;
