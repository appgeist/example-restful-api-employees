require('rootpath')();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const api = require('@appgeist/restful-api');

const ensureDatabase = require('./seed/ensureDatabase');

const [host, port] = ['0.0.0.0', 3000];

(async () => {
  await ensureDatabase();

  express()
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan(process.env.NODE_ENV === 'production' ? 'short' : 'dev'))
    .use(api())
    .listen(port, host, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Server listening on http://${host}:${port}...`);
    });
})();
