var mongoose = require("mongoose");
var db = 'mongodb://localhost:27017/honey';

mongoose.connect(db);

mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});
