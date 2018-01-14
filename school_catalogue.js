class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(studentNumber){
    if (typeof studentNumber === 'number'){
      this._numberOfStudents = studentNumber;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number');
    }
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students, typically between the ages of ${this.level}`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    let rand = Math.floor(Math.random() * substitueTeachers.length - 1);
    return substituteTeachers[rand];
  }

}

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy){
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, level, numberOfStudents){
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(name, level, numberOfStudents, sportsTeams){
    super(name, level, numberOfStudents);
    this._pickupPolicy = sportsTeams;
  }
}
