var mongodb = require('mongodb');

module.exports = {
	_db: null,

	connect: function(callback) {
		var that = this;
		console.log('connect to mongo server.');
		mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
		    if(err) throw err;
		    console.log('Mongo server connection ready');
		    that._db = db;
		    callback && callback(db);
	  });
	},

	db: function() {
		return this._db;
	}
}