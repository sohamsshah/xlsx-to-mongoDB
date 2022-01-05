const mongoose = require("mongoose");
const uri =
  "mongodb+srv://neog-lms:neoglms@cluster0.klfms.mongodb.net/neoglms?retryWrites=true&w=majority";

async function initializeDBConnection() {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("Succesfully connected to the database");
    }
  } catch (error) {
    console.error("Connection failed with database", error);
  }
}

module.exports = { initializeDBConnection };
