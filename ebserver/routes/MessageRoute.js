const express = require("express");
const {
  getMessage,
  addMessage,
  deleteAllMsgs,
} = require("../controllers/MessageController");

const router = express.Router();

router.route("/").get(getMessage).post(addMessage).delete(deleteAllMsgs);

module.exports = router;
