class Person {

  constructor(name) {
    this.name = name;
    this.dateOfBirth = null;
  }

  setDateOfBirth(year) {
    this.dateOfBirth = year;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  age() {
    if (this.dateOfBirth === null) {
      return "Date of birth not set";
    }
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth;
  }

  getName() {
    return this.name;
  }

  description() {
    return `${this.name} is a person.`;
  }
}

module.exports = Person;