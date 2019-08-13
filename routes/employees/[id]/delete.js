const { number } = require('yup');
const Employee = require('models/Employee');

exports.paramsSchema = {
  id: number()
    .integer()
    .positive()
};

exports.onRequest = async ({ params: { id } }) =>
  Employee.query()
    .deleteById(id)
    .throwIfNotFound()
    .return(undefined);
