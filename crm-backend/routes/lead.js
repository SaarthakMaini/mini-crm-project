const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

router.get('/', async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.post('/', async (req, res) => {
  const {email} = req.body;
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format');
  }
  if(await Lead.findOne({email})){
    return res.status(400).json({error: "Lead already exists"})
  }

  const newLead = new Lead(req.body);
  const lead = await newLead.save();
  res.status(201).json(lead);
});

module.exports = router;
