class Course {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrade(student, grade) {
    this.grades.push({ student, grade });
  }

  getGrades() {
    return this.grades;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const total = this.grades.reduce((sum, entry) => sum + entry.grade, 0);
    return total / this.grades.length;
  }

  description() {
    return `Course: ${this.name}`;
  } 
  
}

export default Course;