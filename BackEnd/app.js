const koa = require('koa');
const cors = require('@koa/cors');
const logger = require('koa-logger')
const KoaBody = require('koa-body')
const Router = require('@koa/router')
const app = new koa();
const router = new Router();
const Sequelize = require("sequelize");
let modelDB = require('./models/tododb')
const {DataTypes} = require("sequelize");

require('dotenv').config({path: __dirname+'/.env'})
let dbName = process.env.DB_NAME || 'todoListBase'
let dbLogin = process.env.DB_LOGIN || 'postgres'
let dbPass = process.env.DB_PASSWORD || '5525'
let port = +process.env.PORT || 3001

const sequelize = new Sequelize(dbName, dbLogin, dbPass, {
    dialect: "postgres",
    host: "localhost"
});



app.use(cors());
app.use(logger());
app.use(KoaBody());
app.use(router.routes());
app.use(router.allowedMethods())

const todoModel = modelDB(sequelize, DataTypes)
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

router.post('/tasks/addTask', async (ctx)=>{
    let newTask = ctx.request.body.newTodo
    newTask.id = await addTask(newTask)
    ctx.response.body = newTask
})

router.get('/tasks', async (ctx)=>{
    let tasks = await getTasks()
    if (tasks.length) {
        ctx.body = tasks
    } else {
        ctx.status = 204
        ctx.body = 'No content'
    }
})

router.delete('/tasks/deleteTask/:id', async (ctx)=>{
    await taskDestroy(ctx.params.id)
    ctx.body = {id:ctx.params.id};
})

router.put('/tasks/renameTask/:id', async (ctx)=>{
    let newTitle = ctx.request.body.description
    ctx.body = await renameTask(ctx.params.id, newTitle)
})

router.put('/tasks/saveCondition/:id', async (ctx)=>{
    ctx.body = await changeConditions(ctx.params.id,ctx.request.body.taskState)
})

app.listen(port, function(){
    console.log('Server running on https://localhost:3001')
});

async function getTasks() {
    let dataBD = await todoModel.findAll()
    let tasks = []
    dataBD.forEach((task)=>{
        tasks.push(task.dataValues)
    })
    return tasks
}

async function addTask(newTask) {
    let createdTask = await todoModel.create({
        title: newTask.title,
        checkbox_clicked: newTask.checkbox_clicked,
        completed: newTask.completed,
        rename: newTask.rename
    })
    return createdTask.id
}

async function taskDestroy(id) {
    return  await todoModel.destroy({
        where: {
            id: id
        }
    })
}

async function renameTask(id, text) {
    return  await todoModel.update({title: text}, {
        where: {
            id: id
        }
    })
}

async function changeConditions(id, taskState){
    return  await todoModel.update({
        checkbox_clicked: taskState,
        completed: taskState
    }, {
        where: {
            id: id
        }
    })
}
