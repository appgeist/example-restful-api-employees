const Employee = require('models/Employee');

exports.handler = () =>
  Employee.query()
    .select('id', 'firstName', 'lastName', 'jobTitle')
    .orderBy('firstName')
    .orderBy('lastName');
