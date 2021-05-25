const router = require("express").Router();
// defaults to look inside directory for index.js ("./api/index")
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
