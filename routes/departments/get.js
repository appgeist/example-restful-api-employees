const Department = require('models/Department');

exports.handler = () =>
  Department.query()
    .select('id', 'name')
    .orderBy('name');
