const StudentModel = require('../model/studentModel');
const { readCsvWithPagination } = require('../utils');

class StudentService {
  static async getStudents(pageSize, pageNumber) {
    const students = await readCsvWithPagination('students.csv', pageSize, pageNumber);

    // Conversion des données CSV en objets Student
    const studentObjects = students.map((student) => new StudentModel(student));
    return studentObjects;
  }
}

module.exports = StudentService;
