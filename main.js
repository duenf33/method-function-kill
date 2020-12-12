/******************
 * YOUR CODE HERE *
 ******************/
const Person = (firstName, lastName, age = 0, married = false ) => {
  return {
    firstName,
    lastName,
    age,
    married,
  
    goingOn() {
      return this.age + 1;
    },
    ageUp() {
      return this.age++;
    },
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    marry() {
      return this.married = true;
    },
    
  }
}

const person1 = Person('Fernando', 'Duenas', 30, true)
person1.firstName//?
person1.lastName //?
// person1.ageZero()//?
// person1.ageZero.ages//?
person1.married //?
// person1.getFullName()//?

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Person === 'undefined') {
  Person = undefined;
}


module.exports = Person;
