const fs = require("fs");

const getUsers = () => {
let promise = new Promise( (resolve, reject) => {
    fs.readFile("users.json", function (err, buf) {
        resolve(JSON.parse(buf.toString()));
    });
});
    return promise;
    
};

const addUser = (name) => {
    let users = await getUsers();
    users.push({ name: name });
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
      return new Promise ( (res, rej) => {
          
      })
}

exports.getUsers = getUsers;
exports.addUser = addUser;