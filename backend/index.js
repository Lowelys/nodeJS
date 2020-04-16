const {addUser, getUsers} = require ("./repository");
const express = require('express');
const app = express();

app.get('/users', async  (req, res) => {
    let users = await getUsers();
    res.send(users);
});

app.post('/users', async  (req, res) => {
    let result = await addUser('Lesha');
    res.send({success: true});
});

app.get('/tasks', async  (req, res) => {
    res.send("tasks");
});

app.use((req, res) => {
    res.send(404);
})

app.listen(7542, function () {
    console.log('Example app listening on port 7542!');
});