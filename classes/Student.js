class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }
  getId() {
  return this.id;
  }

  addGrade(course , grade) {
    this.grades.push({course, grade});
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
    return `${this.name} on õpilane.`;
  }
}

export default Student;