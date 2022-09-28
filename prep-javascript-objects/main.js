const person = {
  firstName: 'Aysha',
  lastName: 'Hussain',
  hobby: 'Reading'
};
console.log(person);
const fullName = person.firstName + person.lastName;
console.log('The persons fullname is:' + fullName);
person.job = 'Tutor';
console.log('The persons job is:' + person.job);
person.previousjob = 'Teacher';
console.log('The persons job was:' + person.previousjob);
console.log(person);
