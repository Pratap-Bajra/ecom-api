const express = require("express");
const router = express();
router.get("/", (req, res) => {
  res.send("Welcome to Ecomm Api");
});
module.exports = router;
