var express = require("express");
const { initializeDBConnection } = require("./db/db.connection");
const { saveStudentsToDB } = require("./saveStudentsToDB");
initializeDBConnection();
var app = express();
saveStudentsToDB();
