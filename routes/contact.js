const express = require("express");
const { connect } = require("mongoose");
const router = express.Router();
let Contact = require("../Models/Contact");
//CRUD

router.get("/test", (req, res) => {
  res.json("it is working ");
});

//@url: http://localhost:5000/api/contacts/add
//@role:create a new user
//private/public

router.post("/add", async (req, res) => {
  const { name, email, phone } =  req.body;//get the data from the user
  try {
    const newContact = new Contact({ name, email, phone }); //create the new contact depending on the model
    const contact = await newContact.save(); //save the contact in the db
    res.status(200).json(contact); //respond to the sent request
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@url: http://localhost:5000/api/contacts/delete/:id
//@role:delete contact
//private/public
router.get("/", (req, res) => {
  res.json("it is working ");
});

//@url: http://localhost:5000/api/contacts/all
//@role:get all the contacts
//private/public
router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ msg: "here are all the contacts", contacts });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
//@url: http://localhost:5000/api/contacts/delete/:id
//@role:delete contact
//private/public
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const contacts = await Contact.findByIdAndRemove(id);
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@url: http://localhost:5000/api/contacts/edit/:id
//@role:delete contact
//private/public
router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const contact = await Contact.findByIdAndUpdate(id, { $set: req.body })
    res.status(200).json(contact)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
