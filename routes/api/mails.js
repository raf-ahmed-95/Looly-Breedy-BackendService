const express = require("express");
const router = express.Router();



//Fake Data
const mailsData = require("../../data/Mails");
const messagesData = require("../../data/Messages");


// Get All Contacts
router.get("/", ( request, response ) => {
    return response.send(mailsData)
});

// Get a Single Contact
router.get("/read/", ( request, response ) => {

    const USER_ID = request.query.id;

    const found = messagesData.find( message => message.header.id === parseInt(USER_ID));
    const singleMessage = messagesData.filter( message => message.header.id === parseInt(USER_ID));
    
    if( found ) 
        response.send( singleMessage );
    else
        response.status(400)
            .send({
                message:`No Contact with the ID of ${USER_ID} `
            }); 

    
    // const contactID = request.params.contactID;
    // const found = mailsData.find( contact => contact.id === parseInt(contactID));

    // if( found )
    //     response.send(mailsData.filter( contact => contact.id === parseInt(contactID)));
    // else
    //     response.status(400)
    //         .send({
    //             message:`No Contact with the ID of ${contactID} `
    //         });
 
});



module.exports = router;