const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to mongodb server.');
    const db = client.db('TodoApp');

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectId('5b68acfac01275e2a38e2104')
   }, {
       $set: {
           name: 'Tim'
       },
       $inc: {
           age: 8
       }
   }, {
        returnOriginal: false
   }).then((result) => {
       console.log(result);
       
   });

    client.close();
});