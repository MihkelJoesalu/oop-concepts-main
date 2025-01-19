const Student = require('./Student');
const Course = require('./Course');

class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.courses = [];
    this.nextStudentId = 1;
  }

  addCourse(course) {
    if (!this.courses.some(existingCourse => existingCourse.name === course.name)) {
      this.courses.push(course);
    }
  }

  addStudent(student) {
    if (student.age >= 7 && student.age <= 21) {
      if (!this.students.some(existingStudent => existingStudent.name === student.name)) {
        student.setId(this.nextStudentId);
        this.nextStudentId++;
        this.students.push(student);
      }
    }
  }

  addStudentGrade(student, course, grade) {
    const foundStudent = this.students.find(existingStudent => existingStudent.name === student.name);
    const foundCourse = this.courses.find(existingCourse => existingCourse.name === course.name);

    if (foundStudent && foundCourse) {
      foundStudent.addGrade(course.name, grade);
      foundCourse.addGrade(student, grade);
    }
  }

  getStudents() {
    return this.students;
  }

  getCourses() {
    return this.courses;
  }

  getStudentsOrderedByAverageGrade() {
    return [...this.students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
  }
}

module.exports = School;