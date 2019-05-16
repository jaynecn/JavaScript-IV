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
  
  assessGrade(student){
    function getRandomInt(max) {
      Math.floor(Math.random() * Math.floor(max));
    }
    let random = getRandomInt(100);
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
    console.log(`${this.favSubjects}`);
  }
  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate(student) {
    if (student.grade > 70) {
      console.log(`Congratulations ${this.name} you can graduate Lambda School`);
    }
    else {
      console.log(`You need to do more assignments to increase your score`);
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
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode (studentObj, subject) {
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
  }
}





const matt = new Person ({name: 'Matt', age:42, location: 'Aberdeen', gender: 'M'});


const gabe = new Instructor ({name: 'Gabriel', age:22, location: 'New York', gender: 'M', specialty: 'teaching', favLanguage: 'Javascript', catchPhrase: 'Propaganda'})


const jayne = new Student ({name: 'Jayne', age:23, grade: 94, location: 'Glasgow', gender: 'F', previousBackground: 'Singing Teacher', className: 'WEB EU2', favSubjects: ['Html', 'CSS', 'Javascript', 'Code-along sessions']})


const anthony = new ProjectManager ({name: 'Anthony', age:20, location: 'The Netherlands', gender: 'M', specialty: 'Lambda school', favLanguage: 'Dutch', catchPhrase: 'Good job', gradClassName: 'House of Lambda', favInstructor: 'Gabriel'})

matt.speak();
gabe.speak();
gabe.demo('debugging');
gabe.grade({name: 'Martin', age: 23}, 'helping classmates');
gabe.assessGrade(jayne);
jayne.speak();
jayne.listsSubjects();
jayne.PRAssignment('Classes');
jayne.sprintChallenge('Scotland');
jayne.graduate(jayne);
anthony.speak();
anthony.demo('websites');
// anthony.PRAssignment('Orange');
anthony.standUp('Web EU2');
anthony.debugsCode({name: 'Jayne', age: 22, location: 'UK'}, 'coding typos');
