class Student {
  constructor(
    student,
    firstName,
    lastName,
    age,
    gender,
    classLabel,
    gradeMath,
    gradeFrench,
    gradeEnglish,
    attendance,
    enrollmentDate,
    redoublant
  ) {
    this.firstName = student.firstName || firstName;
    this.lastName = student.lastName || lastName;
    this.age = student.age || age;
    this.gender = student.gender || gender;
    this.classLabel = student.classLabel || classLabel;
    this.gradeMath = student.gradeMath || gradeMath;
    this.gradeFrench = student.gradeFrench || gradeFrench;
    this.gradeEnglish = student.gradeEnglish || gradeEnglish;
    this.attendance = student.attendance || attendance;
    this.enrollmentDate = student.enrollmentDate || enrollmentDate;
    this.redoublant = student.redoublant || redoublant;
  }
}

module.exports = Student;
