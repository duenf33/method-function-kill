/******************
 * YOUR CODE HERE *
 ******************/
const Person = (firstName, lastName, age, married ) => {
  const person = {
    // this.firstName = firstName,
    // this.lastName = lastName,
    // this.age = age,
    // this.married = married
  //   add: function(input) {
  //     this.firstName.push(input)
  //   },
  //   add: function(input) {
  //     this.lastName.push(input)
  //   },
  //   add: function(input) {
  //     this.age.push(input)
  //   },
  //   add: function(input) {
  //     this.married.push(input)
    // },
  }
  return person;
}
// const human = function (firstName, lastName, age) {
  // Note: Don't worry about 'this' yet. You'll understand it later. Follow along for now.
  // this.firstName = firstName
  // this.lastName = lastName
  // this.age = age

  // this.sayName = function () {
  //   console.log(`I am ${firstName} ${lastName}`)
  // }
// }
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
