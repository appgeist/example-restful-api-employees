const { number } = require('yup');
const Department = require('models/Department');

exports.paramsSchema = {
  id: number()
    .integer()
    .positive()
};

exports.onRequest = async ({ params: { id } }) =>
  Department.query()
    .deleteById(id)
    .throwIfNotFound()
    .return(undefined);
