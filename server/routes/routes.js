import express from "express";
const router = new express.Router();

import apiRoutes from "./apiRoutes.js";

router.use("/api", apiRoutes);

export default router;
