const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  category: String,
  condition: String,
  price: Number,
  college: String,
  whatsapp: String,
  images: [String],
  status: {
    type: String,
    enum: ["pending", "approved", "sold"],
    default: "approved"
  },
  contactCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);
