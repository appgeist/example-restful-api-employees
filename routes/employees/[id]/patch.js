const { object, number, string } = require('yup');
const Employee = require('models/Employee');

exports.paramsSchema = {
  id: number()
    .integer()
    .positive()
};

exports.bodySchema = object({
  departmentId: number()
    .positive()
    .integer()
    .required(),
  hireDate: string()
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
  firstName: string()
    .max(20)
    .required(),
  lastName: string()
    .max(20)
    .required(),
  jobTitle: string()
    .max(20)
    .required()
}).noUnknown();

exports.handler = ({ params: { id }, body }) =>
  Employee.query()
    .updateAndFetchById(id, body)
    .throwIfNotFound();
