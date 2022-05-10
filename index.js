const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//Converting all data into JSON format
app.use( express.json());


// Allowing Frontend to Connect to this Endpoints
app.use( ( request, response, next ) => {
    
    //if( process.env.NODE_ENV === "developement" ) {
        response.header("Access-Control-Allow-Origin","*");
        next();
    //}

});


// Routers
const contacts = require("./routes/api/mails");

const profile = require("./routes/api/profile");



// Main Root of the App
app.get("/", ( request, response) => {
    response.send("Breedy App Root")
});

// Contacts Route
app.use("/api/mails", contacts );

//Profile Route
app.use("/profile", profile);



app.listen(PORT, ()=> console.log(`Breedy Server is now Ready on Port ${PORT}`))