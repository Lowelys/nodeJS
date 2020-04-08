//let users = [
 //   { "id": 1, "banned": true, "name": "Sasha" },
 //   { "id": 2, "name": "Max" }
// ];

const fs = require("fs");

const getUsers = (callback) => {


    fs.readFile("users.json", function (err, buf) {
        callback(buf.toString());
    });
};

const addUser = (name) => {
    users.push(users.push({ name: name }));
}

exports.getUsers = getUsers;
exports.addUser = addUser;