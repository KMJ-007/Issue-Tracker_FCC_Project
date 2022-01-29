const mongoose = require("mongoose");

const URI=process.env["MONGO_URI"];

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db=mongoose.connection;

db.on("error",()=>{console.log("connection failed to database")})
db.once("open",()=>{console.log("connection successful")});

const issueSchema = new mongoose.Schema({
    issue_title:String,
    created_by:String,
    issue_text:String,
    assigned_to:String,
    status_text:String,
    open:Boolean,
    created_on:Date,
    updated_on:Date,
    project: String,

});


module.exports.Issue= mongoose.model("Issue",issueSchema);
