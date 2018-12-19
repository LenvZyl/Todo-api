// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb')
    }
    console.log('Mongo Connected')
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text: 'Take big dump',
        complete: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    // const db = client.db('TodoApp')
    // db.collection('User').insertOne({
    //     name: 'Len',
    //     age: 24,
    //     location: 'No where to be found'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    
    client.close()
})