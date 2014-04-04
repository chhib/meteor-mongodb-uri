Package.describe({
  summary: 'A helper for parsing MONGO_URL'
});

Npm.depends({
    "mongodb-uri": "0.9.4"
});

Package.on_use(function (api, where) {
  api.add_files('mongodb-uri.js', 'server');
  if (api.export) {
    api.export("MongoDBURI", "server");
  }
});
