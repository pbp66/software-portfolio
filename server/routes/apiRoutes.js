const router = require("express").Router();
// const router = new express.Router();

router.get("/", async (req, res) => {
	try {
		console.log("Accessing /api route");
		res.status(200).json({
			message: "successfully queried the /api route.",
		});
	} catch (err) {
		console.error(err);
		res.status(500).json(err).send("Internal Server Error");
	}
});

module.exports = router;
