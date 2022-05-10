const express = require("express");
const router = express.Router();


//Fake Data
const blockedAccountsData = require("../../data/blockedAccounts");



// Get All Contacts
router.get("/", ( request, response ) => {
    return response.send()
});

//Get Blocked Accounts
router.get("/blockedAccounts/", ( request, response ) => {
    response.send( blockedAccountsData );
});


module.exports = router;