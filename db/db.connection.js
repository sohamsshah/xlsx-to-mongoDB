const mongoose = require("mongoose");
const uri = "your-mongodb-uri-here";

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
