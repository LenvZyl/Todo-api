const {mongoose} = require('./../server/db/mongoose')
const {ObjectID} = require('mongodb')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


var id = '5c1b89535c3bc61fa1e06c1b'
if (!ObjectID.isValid(id)) {
    return console.log('id is not valid')
}
//returns array
Todo.find({
    _id: id 
}).then((todos) => {
    console.log(todos)
})

//returns one item
Todo.findOne({  
    _id: id 
}).then((todo) => {
    if (!todo) {
        return console.log('No Id found')
    }
    console.log(todo)
})

//returns one item
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('No Id found')
    }
    console.log(todo)
}).catch((e) => {
    console.log(e)
})

var userId = '5c1a4e2e6c6d2315ba2aa9b8'
if(!ObjectID.isValid(userId)){
    return console.log('UserId invalid')
}
User.findById(userId).then((user) => {
    if(!user){
        return console.log('User does not exist')
    }
    console.log(user)
}).catch((e) => {
    console.log(e)
})

