// CODE here for your Lambda Classes
class Person {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.location = personInfo.location;
    this.gender = personInfo.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name} I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorInfo) {
    super(instructorInfo);
    this.specialty = instructorInfo.specialty;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}






const matt = new Person ({name: 'Matt', age:42, location: 'Aberdeen', gender: 'M'});
matt.speak();

const gabe = new Instructor ({name: 'Gabriel', age:22, location: 'New York', gender: 'M', specialty: 'teaching', favLanguage: 'Javascript', catchPhrase: 'Propaganda'})
gabe.speak();
gabe.demo('debugging');
gabe.grade({name: 'Martin', age: 23}, 'helping classmates');