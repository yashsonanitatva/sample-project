const argv = require('yargs').argv;

const log = require('./generate/log');
const generatePage = require('./generate/page/generate');
const generateComponent = require('./generate/component/generate');

log.logo();

module.exports = function (plop) {
  if (argv['generate-component']) {
    generateComponent.setGenerator(plop);
  } else if (argv['generate-page']) {
    generatePage.setGenerator(plop);
  }
};
