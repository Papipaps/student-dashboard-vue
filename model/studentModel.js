class Student {
    constructor(firstName, lastName, age, gender, studentClass, gradeMath, gradeFrench, gradeEnglish, attendance, enrollmentDate, redoublant) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.class = studentClass;
      this.gradeMath = gradeMath;
      this.gradeFrench = gradeFrench;
      this.gradeEnglish = gradeEnglish;
      this.attendance = attendance;
      this.enrollmentDate = enrollmentDate;
      this.redoublant = redoublant;
    }
  }

module.exports = Student