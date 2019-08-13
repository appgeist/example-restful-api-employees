const Department = require('models/Department');

exports.onRequest = () =>
  Department.query()
    .select('id', 'name')
    .orderBy('name');
