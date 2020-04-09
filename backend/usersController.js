let { getUsers, addUser } = require('./repository');

exports.usersController = async (req, res) => {
    if (req.method === "POST") {
        addUser('Lesha')
        res.write(JSON.stringify({ success: true }));
        res.end();
    } else {
        let users = await getUsers();
            res.write(users);
            res.end();
 

    }
};