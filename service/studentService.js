const Student = require("../model/studentModel");
const { readCsvWithPagination } = require("../utils");

class StudentService {
  static async getStudents(pageSize, pageNumber) {
    const students = await readCsvWithPagination(
      "students.csv",
      pageSize,
      pageNumber
    );
    const studentObjects = students.map(
      (student) => new Student({ ...student })
    );
    return studentObjects;
  }
}

module.exports = StudentService;
