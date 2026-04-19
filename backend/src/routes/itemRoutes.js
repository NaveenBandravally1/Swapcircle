const express = require("express");
const router = express.Router();
const {
  createItem,
  getItems,
  contactSeller,
  markSold
} = require("../controllers/itemController");

router.post("/", createItem);
router.get("/", getItems);
router.post("/:id/contact", contactSeller);
router.patch("/:id/sold", markSold);

module.exports = router;
