const BaseModel = require('./BaseModel');

module.exports = class Employee extends BaseModel {
  static relationMappings = {
    department: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: 'Department',
      join: {
        from: 'employees.departmentId',
        to: 'departments.id'
      }
    }
  };
};
