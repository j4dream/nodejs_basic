var _ = require('lodash');
var yargs = require('yargs');
var numCPUs = require('os').cpus().length;

var argv;

var config = {
	cpus: numCPUs,
	init: function() {
		var conf = require('./conf').default;
		argv = yargs
			.usage('Usage: $0 --port [num] --mongo-server [str] --mongo-db-name [str]')
			.alias('p', 'port').default('p', conf.port).describe('p', 'Server port')
			.alias('m', 'mongo-server').default('m', conf.mongoServer).describe('m', 'Mongo Server host')
			.alias('d', 'mongo-db-name').default('d', conf.mongoDbName).describe('d', 'Mongo DB name')
			.argv;
		_.assign(config, conf, argv);
		return config;
	},
	getArgv: function() {
		return argv;
	}
}

config.init();

module.exports = config;