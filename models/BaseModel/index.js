const { Model } = require('objection');
const { normalize } = require('path');
const pluralize = require('pluralize');
const { ApiError } = require('@appgeist/restful-api');
const { NOT_FOUND } = require('http-status-codes');

const db = require('models/db');

Model.knex(db);

const modelPath = normalize(`${__dirname}/..`);

module.exports = class BaseModel extends Model {
  static modelPaths = [modelPath];

  static get tableName() {
    return pluralize(this.name.toLowerCase());
  }

  static createNotFoundError = () => new ApiError(NOT_FOUND);
};
