const Employee = require('models/Employee');

exports.onRequest = () =>
  Employee.query()
    .select('id', 'firstName', 'lastName', 'jobTitle')
    .orderBy('firstName')
    .orderBy('lastName');
