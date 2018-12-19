// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb')
    }
    console.log('Mongo Connected')
    const db = client.db('TodoApp')
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c1267e3ddbba601261e5e19')
    // }, {
    //     $set: {
    //         text: "Take the biggest dump Ever",
    //         complete: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res)
    // },(err) => {
    //     console.log(err)
    // })

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5c1268f5a12983012cf9666b')
    },{
        $set: {
            name: 'Len van Zyl'
        },
        $inc: {
            age: 2
        }
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })

    
    //client.close()
})