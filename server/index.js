const express = require('express');
const {Tasks} = require("./model/Todos");
console.log(Tasks)
console.log("fetch sucsess")
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
const cors = require('cors');

//const {baseUrl} = require('../constants');

const port = 3080;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cookieParser());

const corsOptions = {
    origin: `3000`,
    credentials: true
}

//app.get("/",  (req, res) => {
    //res.send("Welcome to your Wix Enter exam!");
//});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get("/user",  (req, res) => {
    const userId = req.cookies?.userId || uuidv4();
    res.cookie("userId", userId).send({id: userId});
});

app.get('/Tasks',  (req, res) => {
    res.send({Tasks});
});

app.post('/Tasks',  (req, res) => {
    const {Task} = req.body;
    if (!Task) {
        res.status(400).json({message: 'Todo is missing'}).end();
        return;
    }

    const {title} = Task;
    if (!(title)) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }
    const {body} = Task;
    if (!(body)) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }
    const {author} = Task;
    if (!(author)) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }


    const newTask = {
        title, body, author, id: uuidv4(), doneflag: false, done: "Click if done"
    }
    Tasks.push(newTask);
    console.log(newTask)
    res.send({Tasks: newTask}).status(200).end()
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
