const Contact = require("../models/contact");
const createPath = require("../helpers/create-path");

const getContacts = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => res.render(createPath("contacts"), { contacts, title }))
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"), { title });
    });
};

const getAboutUs = (req, res) => {
  const title = "Contacts";
  res.render(createPath("contacts"), { title });
};

module.exports = {
  getContacts,
  getAboutUs,
};
