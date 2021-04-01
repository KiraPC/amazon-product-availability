const config = require('../config');
const Logger = require('@ptkdev/logger');

const options = {
	language: 'en',
	colors: true,
	debug: config.loggingOptions.debug,
	info: true,
	warning: true,
	error: true,
	sponsor: true,
	write: false,
	type: 'log'
};

const logger = new Logger(options);

module.exports = logger;