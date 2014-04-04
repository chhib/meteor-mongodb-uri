Meteor-mongodb-uri
===============
A wrapper around [mongodb-uri](https://github.com/mongolab/mongodb-uri-node) for use with [Meteorite](https://github.com/oortcloud/meteorite) on top of [Meteor](http://meteor.com)

##Install
mrt add mongodb-uri

##Usage

var mongodbUri = MongoDBURI;
var mongoUrl = mongodbUri.parse(process.env.MONGO_URL);
console.log(mongoUrl.database); // Prints "meteor"
<!-- 
See Winston [documentation](https://github.com/flatiron/winston.git) for more details.

Other related projects:

* [meteor-winston-loggly] (https://github.com/tomrogers3/meteor-winston-loggly)
* [meteor-winston-airbrake] (https://github.com/tomrogers3/meteor-winston-airbrake)


 -->