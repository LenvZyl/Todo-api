// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb')
    }
    console.log('Mongo Connected')
    const db = client.db('TodoApp')
    db.collection('Todos').find({complete: false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to find docs')
    })

    client.close()
})