// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017'
MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.db('TodoApp').collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ba7a19ac4b972128b413306')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.db('TodoApp').collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ba7895f7fbcbc0dd4863ce1')
    }, {
        $set: {
            name: 'Amine'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});