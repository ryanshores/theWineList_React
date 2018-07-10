let mongoose = require("mongoose");

if(process.env.NODE_ENV !== "test"){
	// use mongoose debug to see connections to DBHOST
	mongoose.set("debug", true);
}
mongoose.connect("mongodb://localhost:27017/theWineList");

mongoose.Promise = Promise;

module.exports.Wine = require("./wines");
