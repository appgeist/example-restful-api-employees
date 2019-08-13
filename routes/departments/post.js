const { object, string } = require('yup');
const Department = require('models/Department');

exports.bodySchema = object({
  name: string()
    .max(20)
    .required(),
  description: string()
    .max(1000)
    .nullable()
}).noUnknown();

exports.onRequest = ({ body }) => Department.query().insert(body);
