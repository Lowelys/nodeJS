const fs = require("fs");

const getUsers = (callback) => {
let promise = new Promise( (resolve, reject) => {
    fs.readFile("users.json", function (err, buf) {
        resolve(buf.toString());
    });
});
    return promise;
    
};

const addUser = (name) => {
    users.push(users.push({ name: name }));
}

exports.getUsers = getUsers;
exports.addUser = addUser;