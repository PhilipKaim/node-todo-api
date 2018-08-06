const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to mongodb server.');
    const db = client.db('TodoApp');

    // db.collection('ToDos').insertOne({
    //     title: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });

    db.collection('Users').insertOne({
        name: 'Philip',
        age: 22,
        location: 'Tampa, FL'
    }, (err, result) => {
        if (err) {
            console.log('Unable to connect to mongodb server.', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        
    });

    client.close();
});