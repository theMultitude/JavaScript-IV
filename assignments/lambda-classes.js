class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.speciality = props.speciality;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listSubjects() {
    for (let i = 0, i < this.favSubjects.length; i++) {
      console.log( `${this.name} <3's ${this.favSubjects[i]}`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} begins working hard on ${subject}`);
  }
}
