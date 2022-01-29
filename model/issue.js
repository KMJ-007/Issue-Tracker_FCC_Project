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

  project_title: {
  type: String,
  default: "Mokey"
  },
  issue_title: {
    type: String,
    required: true
  },
  issue_text: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  updated_on: {
    type: Date,
    default: Date.now
  },
  created_by: {
    type: String,
    required: true
  },
  assigned_to:{
    type: String,
    default: ""
  },
  open:{
    type: Boolean,
    default: true
  },
  status_text:{
    type: String,
    default: ""
  }
})

module.exports = mongoose.model("Issue", issueSchema)