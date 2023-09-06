const Message = require("../models/MessageModel");
const asyncHandler = require("express-async-handler");

const getMessage = asyncHandler(async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

const addMessage = asyncHandler(async (req, res) => {
  const { email, message, time, isSent } = req.body;
  if (!email || !message || !time) {
    res.status(404);
    throw new Error("All fields are mandatory");
  }
  const msg = await Message.create({
    email,
    message,
    time,
    isSent,
  });
  res.status(201).json(msg);
});



const deleteAllMsgs = asyncHandler(async (req, res) => {
  try {
    await Message.deleteMany();
    res.json("Database cleared");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

module.exports = { getMessage, addMessage, deleteAllMsgs };
