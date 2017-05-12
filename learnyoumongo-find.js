const mongo = require('mongodb').MongoClient;
let collection;

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
    if(err){ console.log(err); }
    collection = db.collection("parrots");
    collection.find({age: {$gt: parseInt(process.argv[2])} }).toArray(function(err, doc){
        if(err){ console.log(err); }
        console.log(doc);
        db.close();
    });
});