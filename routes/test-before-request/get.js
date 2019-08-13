const delay = require('delay');

exports.beforeRequest = async ({ method, url }) => {
  // eslint-disable-next-line no-console
  console.log(`Waiting half a second before responding to ${method} ${url}`);
  await delay(500);
};

exports.onRequest = () => ({ message: 'OK' });
