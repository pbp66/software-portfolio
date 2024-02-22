const router = require("express").Router();
const apiRoutes = require("./apiRoutes.js");
// const router = new express.Router();

router.use("/api", apiRoutes);

module.exports = router;
