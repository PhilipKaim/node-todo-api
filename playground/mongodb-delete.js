const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to mongodb server.');
    const db = client.db('TodoApp');

   // deleteMany
//    db.collection('Users').deleteMany({
//        name: 'Philip'
//    }).then((results) => {
//        console.log(results);
       
//    });

   // findOneAndDelete

   db.collection('Users').findOneAndDelete({
        _id: new ObjectId("5b68a5c1c01275e2a38e1f9c")
    }).then((results) => {
        console.log(results);
    });

    client.close();
});