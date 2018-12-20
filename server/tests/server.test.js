//To Run this test from command line 
//npm run test-watch

const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server')
const {Todo} = require('./../models/todo')

const todos = [{
    text: 'Test Todo'
},
{
    text: 'Test 2 Todo'
}]

beforeEach((done) => {
    //Removes all Todos from database
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then(() => done())
})
describe('POST/todos', () => {
    it('should create new todo', (done) => {
        var text = 'Test'

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1)
                    expect(todos[0].text).toBe(text)
                    done()
                }).catch((e) => done(e))
            })
    }),

    it('should not create todo with invalid data', (done) => {
        request(app)
            .post('/todos')
            .send({text: ""})
            .expect(400)
            .end((err, res) => {
                if(err) {
                    return done(err)
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2)
                    done()
                }).catch((e) => done(e))
            })

    })

})

describe('GET/todos', () => {
    it('get todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                console.log(res.body)
                expect(res.body.todos.length).toBe(2)
            })
            .end(done)
    })
})