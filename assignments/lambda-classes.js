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
  examResult(student, grade) {
    let newGrade = (grade * Math.random());
    console.log(`The final grade of ${student.name} is ${newGrade}`);
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
  graduate () {
    if(this.grade > 70) {
      return (`Congratulations ${this.name}, you can graduate!`);
    }
    return (`Sorry ${this.name} you need more assignments completed to boost your score.  No graduation for you, yet...`);
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
matt.speak();

const gabe = new Instructor ({name: 'Gabriel', age:22, location: 'New York', gender: 'M', specialty: 'teaching', favLanguage: 'Javascript', catchPhrase: 'Propaganda'})
gabe.speak();
gabe.demo('debugging');
gabe.grade({name: 'Martin', age: 23}, 'helping classmates');


const jayne = new Student ({name: 'Jayne', age:21, location: 'Glasgow', grade: 80, gender: 'F', previousBackground: 'Singing Teacher', className: 'WEB EU2', favSubjects: ['Html', 'CSS', 'Javascript', 'Code-along sessions'],  })

const joan = new Student ({name: 'Joan', age:19, location: 'Stirling', grade: 20, gender: 'F', previousBackground: 'Teacher', className: 'WEB EU2', favSubjects: ['Html', 'CSS', 'Javascript', 'Code-along sessions'],  })
joan.speak();
console.log(joan.graduate());
gabe.examResult({name: 'Jayne', age: 21}, jayne.grade);

jayne.speak();
// jayne.demo('debugging');
jayne.listsSubjects();
jayne.PRAssignment('Classes');
jayne.sprintChallenge('Scotland');
jayne.graduate();

const ruairidh = new ProjectManager ({name: 'Ruairidh', age:21, location: 'London', gender: 'M', specialty: 'Lambda school', favLanguage: 'London', catchPhrase: 'Exemplary', gradClassName: 'House of Lambda', favInstructor: 'Gabriel'})
ruairidh.speak();
ruairidh.demo('websites');
// ruairidh.PRAssignment('Orange');
ruairidh.standUp('Web EU2');
ruairidh.debugsCode({name: 'Jayne', age: 22, location: 'UK'}, 'coding typos');


