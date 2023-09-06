const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    isSent: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
