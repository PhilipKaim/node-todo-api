const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to mongodb server.');
    const db = client.db('TodoApp');

    // db.collection('ToDos').find().toArray().then((doc) => {
    //     console.log(JSON.stringify(doc, undefined, 2));
        
    // }, (err) => {
    //     console.log('Unable to find docs', err);
        
    // });

    db.collection('Users').find({
        name: 'Mike'
    }).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
        
    }, (err) => {
        console.log('Unable to find users', err);
        
    })

    client.close();
});