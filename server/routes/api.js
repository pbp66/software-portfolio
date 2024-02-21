import express from "express";
const router = new express.Router();

router.get("/api", async (req, res) => {
	res.status(200).json({ message: "successfully queried the /api route." });
});
