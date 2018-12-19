// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb')
    }
    console.log('Mongo Connected')
    const db = client.db('TodoApp')
    
    //delete many
    // db.collection('Todos').deleteMany({text: "Upskill"}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to delete docs')
    // })

    //delete one
    // db.collection('Todos').deleteOne({text: "Upskill"}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to delete docs')
    // })

    //find one and delete
    db.collection('Todos').findOneAndDelete({_id: ObjectID("5c1a05870eb28d094342d3bf")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    }, (err) => {
        console.log('Unable to delete docs')
    })

    
    //client.close()
})