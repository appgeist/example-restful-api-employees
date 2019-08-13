const { number } = require('yup');
const Employee = require('models/Employee');

exports.paramsSchema = {
  id: number()
    .integer()
    .positive()
};

exports.onRequest = async ({ params: { id } }) =>
  Employee.query()
    .findById(id)
    .eager('department(columns)', {
      columns: qb => qb.select('id', 'name')
    })
    .throwIfNotFound()
    .then(employee => ({
      ...employee,
      departmentId: undefined,
      department: employee.department.name
    }));
