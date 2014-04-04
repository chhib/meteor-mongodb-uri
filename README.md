Meteor-mongodb-uri
===============
A wrapper around [mongodb-uri](https://github.com/mongolab/mongodb-uri-node) for use with [Meteorite](https://github.com/oortcloud/meteorite) on top of [Meteor](http://meteor.com)

##Install
``` sh
mrt add mongodb-uri
```

##Usage

``` js
var mongodbUri = MongoDBURI;
var mongoUrl = mongodbUri.parse(process.env.MONGO_URL);
console.log(mongoUrl.database); // Prints "meteor"
```