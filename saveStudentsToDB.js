const { User } = require("./model/user.model");
const { studentData } = require("./excel-json");

function saveStudentsToDB() {
  //   console.log(studentData);
  studentData.forEach(async (item) => {
    try {
      const SaveStudentToDb = new User({
        email: item["Email ID"],
        firstName: item["First Name"],
        lastName: item["Last Name"],
        developerRoute: null,
        developerPlan: null,
        team: item["Team"],
        rollNo: item.rollNumber,
        pod: item["__EMPTY_1"],
        isFA: item["Payment Mode"],
      });
      await SaveStudentToDb.save();
    } catch (error) {
      console.log("Student Data not saved to DB!!", { error });
    }
  });
}

module.exports = { saveStudentsToDB };
