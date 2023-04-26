const diagnostics = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  res.sendFile(path.join(__dirname, "../db/diagnostics.json"));


});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file

  const newDiagnostic = {
    time: Date.now(),
    error_id: uuidv4(),
    errors: req.body.errors
  }

  console.log(newDiagnostic);

  readAndAppend(newDiagnostic, path.join(__dirname, "../db/diagnostics.json"))

  res.send("Diagnostic ran.")

});

module.exports = diagnostics;
