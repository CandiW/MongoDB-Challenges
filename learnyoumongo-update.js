const mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
    if(err){ console.log(err); }
    let collection = db.collection('users');
    collection.update({name: "Tina", age: 30, username: "tinatime"},{$set: {age: 40}});
    db.close();
});