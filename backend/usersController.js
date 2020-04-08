let { getUsers, addUser } = require('./repository');

exports.usersController = (req, res) => {
    if (req.method === "POST") {
        addUser('Lesha')
        res.write(JSON.stringify({ success: true }));
    } else {
        getUsers( (users) => {
            res.write(users);
            res.end();
        })

    }
};