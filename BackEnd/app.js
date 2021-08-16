"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var koa = require('koa');
var cors = require('@koa/cors');
var logger = require('koa-logger');
var KoaBody = require('koa-body');
var Router = require('@koa/router');
var app = new koa();
var router = new Router();
var Sequelize = require("sequelize");
var modelDB = require('./models/tododb');
var DataTypes = require("sequelize").DataTypes;
require('dotenv').config({ path: __dirname + '/.env' });
var dbName = process.env.DB_NAME || 'todoListBase';
var dbLogin = process.env.DB_LOGIN || 'postgres';
var dbPass = process.env.DB_PASSWORD || '5525';
var port = process.env.PORT || 3001;
var sequelize = new Sequelize(dbName, dbLogin, dbPass, {
    dialect: "postgres",
    host: "localhost"
});
app.use(cors());
app.use(logger());
app.use(KoaBody());
app.use(router.routes());
app.use(router.allowedMethods());
var todoModel = modelDB(sequelize, DataTypes);
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
router.post('/tasks/addTask', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var newTask, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                newTask = ctx.request.body.newTodo;
                _a = newTask;
                return [4 /*yield*/, addTask(newTask)];
            case 1:
                _a.id = _b.sent();
                ctx.response.body = newTask;
                return [2 /*return*/];
        }
    });
}); });
router.get('/tasks', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getTasks()];
            case 1:
                tasks = _a.sent();
                if (tasks.length) {
                    ctx.body = tasks;
                }
                else {
                    ctx.status = 204;
                    ctx.body = 'No content';
                }
                return [2 /*return*/];
        }
    });
}); });
router.delete('/tasks/deleteTask/:id', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, taskDestroy(ctx.params.id)];
            case 1:
                _a.sent();
                ctx.body = { id: ctx.params.id };
                return [2 /*return*/];
        }
    });
}); });
router.put('/tasks/renameTask/:id', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var newTitle, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                newTitle = ctx.request.body.description;
                _a = ctx;
                return [4 /*yield*/, renameTask(ctx.params.id, newTitle)];
            case 1:
                _a.body = _b.sent();
                return [2 /*return*/];
        }
    });
}); });
router.put('/tasks/saveCondition/:id', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx;
                return [4 /*yield*/, changeConditions(ctx.params.id, ctx.request.body.taskState)];
            case 1:
                _a.body = _b.sent();
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log('Server running on https://localhost:3001');
});
function getTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var dataBD, tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, todoModel.findAll()];
                case 1:
                    dataBD = _a.sent();
                    tasks = [];
                    dataBD.forEach(function (task) {
                        tasks.push(task.dataValues);
                    });
                    return [2 /*return*/, tasks];
            }
        });
    });
}
function addTask(newTask) {
    return __awaiter(this, void 0, void 0, function () {
        var createdTask;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, todoModel.create({
                        title: newTask.title,
                        checkboxClicked: newTask.checkboxClicked,
                        completed: newTask.completed,
                        rename: newTask.rename
                    })];
                case 1:
                    createdTask = _a.sent();
                    return [2 /*return*/, createdTask.id];
            }
        });
    });
}
function taskDestroy(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, todoModel.destroy({
                        where: {
                            id: id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function renameTask(id, text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, todoModel.update({ title: text }, {
                        where: {
                            id: id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function changeConditions(id, taskState) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, todoModel.update({
                        checkboxClicked: taskState,
                        completed: taskState
                    }, {
                        where: {
                            id: id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
