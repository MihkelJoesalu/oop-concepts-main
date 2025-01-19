const Person = require('./classes/Person')
const Student = require('./classes/Student')
const Course = require('./classes/Course')
const School = require(' ./classes/School')
    
const school = new School("Awesome School")
const student1 = new Student("John Smith")
    student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
    student2.setDateOfBirth(2000)
        school.addStudent(student1)
        school.addStudent(student2)
    
        school.addStudent(student1)
        console.log(school.getStudents().length)

const course1 = new Course("Math")
const course2 = new Course("Physics")
    school.addCourse(course1)
    school.addCourse(course2)
    console.log(school)

