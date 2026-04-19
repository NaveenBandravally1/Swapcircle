const Item = require("../models/item")
exports.createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json(item);
};

exports.getItems = async (req, res) => {
  const items = await Item.find({ status: "approved" })
    .sort({ createdAt: -1 });
  res.json(items);
};

exports.contactSeller = async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, {
    $inc: { contactCount: 1 }
  });
  res.sendStatus(200);
};

exports.markSold = async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    { status: "sold" },
    { new: true }
  );
  res.json(item);
};
