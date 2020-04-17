const {addUser, getUsers} = require ("./repository");
const express = require('express');
const users = require('./users-router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/users', users);
app.get('/tasks', async  (req, res) => {
    res.send("tasks");
});

app.use((req, res) => {
    res.send(404);
})

app.listen(7542, function () {
    console.log('Example app listening on port 7542!');
});