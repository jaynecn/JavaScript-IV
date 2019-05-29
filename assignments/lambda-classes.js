// CODE here for your Lambda Classes
class Person {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.location = personInfo.location;
    this.gender = personInfo.gender;
  }
  speak() {
    return `Hello, my name is ${this.name} I am from ${this.location}`;
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
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  
  assessGrade(student){
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let random = getRandomInt(100);
    console.log(random);
    let myGrade = student.grade - random;
    console.log(` ${student.name}: ${myGrade}`);
  }
}

class Student extends Person {
  constructor(studentInfo) {
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
    this.grade = studentInfo.grade;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate(student) {
    if (student.grade > 70) {
      return `Congratulations ${this.name} you can graduate Lambda School`;
    }
    else {
      return `You need to do more assignments to increase your score`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor (PMInfo) {
    super(PMInfo);
    this.gradClassName = PMInfo.gradClassName;
    this.favInstructor = PMInfo.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode (studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
  }
}





const matt = new Person ({name: 'Matt', age:42, location: 'Aberdeen', gender: 'M'});


const gabe = new Instructor ({name: 'Gabriel', age:22, location: 'New York', gender: 'M', specialty: 'teaching', favLanguage: 'Javascript', catchPhrase: 'Propaganda'})


const jayne = new Student ({name: 'Jayne', age:23, grade: 94, location: 'Glasgow', gender: 'F', previousBackground: 'Singing Teacher', className: 'WEB EU2', favSubjects: ['Html', 'CSS', 'Javascript', 'Code-along sessions']})


const anthony = new ProjectManager ({name: 'Anthony', age:20, location: 'The Netherlands', gender: 'M', specialty: 'Lambda school', favLanguage: 'Dutch', catchPhrase: 'Good job', gradClassName: 'House of Lambda', favInstructor: 'Gabriel'})

console.log(matt.speak());
console.log(gabe.speak());
console.log(gabe.demo('debugging'));
console.log(gabe.grade({name: 'Martin', age: 23}, 'helping classmates'));
console.log(gabe.assessGrade(jayne));
console.log(jayne.speak());
console.log(jayne.listsSubjects());
console.log(jayne.PRAssignment('Classes'));
console.log(jayne.sprintChallenge('Scotland'));
console.log(jayne.graduate(jayne));
console.log(anthony.speak());
console.log(anthony.demo('websites'));
// anthony.PRAssignment('Orange');
console.log(anthony.standUp('Web EU2'));
console.log(anthony.debugsCode({name: 'Jayne', age: 22, location: 'UK'}, 'coding typos'));
