// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017'
MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.db('TodoApp').collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.db('TodoApp').collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.db('TodoApp').collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //deleteMany users
    // db.db('TodoApp').collection('Users').deleteMany({name: 'Amine'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete by ID
    db.db('TodoApp').collection('Users').findOneAndDelete({
        _id: new ObjectID('5ba4e480a660d41ff80c3d85')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});