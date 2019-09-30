const { number } = require('yup');
const Department = require('models/Department');

exports.paramsSchema = {
  id: number()
    .integer()
    .positive()
};

exports.onRequest = async ({ params: { id } }) =>
  Department.query()
    .findById(id)
    .eager('employees(columns)', {
      columns: (qb) => qb.select('firstName', 'lastName')
    })
    .throwIfNotFound()
    .then((department) => ({
      ...department,
      employees: department.employees.map(({ firstName, lastName }) => `${firstName} ${lastName}`)
    }));
