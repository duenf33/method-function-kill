/******************
 * YOUR CODE HERE *
 ******************/
const Person = (firstName, lastName, age, married ) => {
  return {
    firstName,
    lastName,
    age,
    married,

  }
}

// const person1 = Person()
// person1.add('Fernando')
// person1.name //?
// person1.firstName.add('Fernando')
// person1.firstName //?

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Person === 'undefined') {
  Person = undefined;
}


module.exports = Person;
