var winston = require('winston');

var koaWinston = module.exports = function(winstonInstance) {
  if(!winstonInstance) {
    winstonInstance = winston;
  }

  return function* (next) {
    this.logger = winstonInstance;
    yield next;
  };
};
