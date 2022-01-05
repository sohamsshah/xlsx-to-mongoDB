const xlsx = require("xlsx");
const fs = require("fs");

// read data from excel

const wb = xlsx.readFile("./_LMS_ NC 22 STUDENTS.xlsx", { cellDates: true });
const ws = wb.Sheets["Team divison sheet"];

const data = xlsx.utils.sheet_to_json(ws);
const studentData = data.map((d) => {
  if (d["Payment Mode"] === "Financial Aid") {
    d["Payment Mode"] = true;
  }
  d["Payment Mode"] = false;
  return d;
});

module.exports = { studentData };
