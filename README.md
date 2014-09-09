Meteor-mongodb-uri
===============
A wrapper around [mongodb-uri](https://www.npmjs.org/package/mongodb-uri) for use with [Meteor](http://meteor.com)

##Install
``` sh
meteor add chhib:mongodb-uri
```

##Usage

``` js
var mongodbUri = MongoDBURI;
var mongoUrl = mongodbUri.parse(process.env.MONGO_URL);
console.log(mongoUrl.database); // Prints "meteor"
```
