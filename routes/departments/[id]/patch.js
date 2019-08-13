const { object, number, string } = require('yup');
const Department = require('models/Department');

exports.paramsSchema = {
  id: number()
    .integer()
    .positive()
};

exports.bodySchema = object({
  name: string()
    .max(20)
    .required(),
  description: string()
    .max(1000)
    .nullable()
}).noUnknown();

exports.onRequest = ({ params: { id }, body }) =>
  Department.query()
    .updateAndFetchById(id, body)
    .throwIfNotFound();
