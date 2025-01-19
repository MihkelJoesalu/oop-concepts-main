class Person {
  // Constructor to initialize the person's name
  constructor(name) {
    this.name = name;
    this.dateOfBirth = null; // Initialize date of birth as null
  }

  // Method to set the date of birth
  setDateOfBirth(year) {
    this.dateOfBirth = year;
  }

  // Method to get the date of birth
  getDateOfBirth() {
    return this.dateOfBirth;
  }

  // Method to calculate and return the person's age
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

// Example usage
const person = new Person("John");
person.setDateOfBirth(1990);
console.log(person.getName()); // Output: John
console.log(person.getDateOfBirth()); // Output: 1990
console.log(person.age()); // Output: Calculated age
console.log(person.description()); // Output: John is a person.

export default Person;