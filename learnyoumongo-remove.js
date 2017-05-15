const mongo = require('mongodb').MongoClient;

let second = process.argv[3];
let third = process.argv[4];

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
    if(err){ console.log(err); }
    let collection = db.collection(second);
    collection.remove({_id: third});
    db.close();
});