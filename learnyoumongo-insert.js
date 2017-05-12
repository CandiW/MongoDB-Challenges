const mongo = require('mongodb').MongoClient;
let collection;

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
    if(err){ console.log(err); }
    collection = db.collection('docs');
    let object = {firstName: process.argv[2],lastName: process.argv[3]};
    collection.insert(object);
    console.log(JSON.stringify(object));
    db.close();
});