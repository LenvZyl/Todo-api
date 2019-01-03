const {mongoose} = require('../server/db/mongoose')
const {ObjectID} = require('mongodb')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')


// Todo.remove({}).then((result) => {
//     console.log(result)
// })
Todo.findOneAndRemove({_id: '5c2dfe923551cf16df5ae277'}).then((todo) => {
    console.log(todo)
})

Todo.findByIdAndRemove('5c2dfe923551cf16df5ae277').then((todo) => {
    console.log(todo)
})