const express = require("express");

const {
  getContacts,
  getAboutUs,
} = require("../controllers/contacts-controller");

const router = express.Router();

router.get("/contacts", getContacts);
router.get("about-us", getAboutUs);

module.exports = router;
