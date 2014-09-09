Package.describe({
  name: 'chhib:mongodb-uri',
  version: '0.9.0',
  git: 'https://github.com/chhib/meteor-mongodb-uri.git',
  summary: 'A helper for parsing MONGO_URL'
});
Npm.depends({
    "mongodb-uri": "0.9.7"
});
Package.on_use(function (api, where) {
  api.add_files('mongodb-uri.js', 'server');
  if (api.export) {
    api.export("MongoDBURI", "server");
  }
});
