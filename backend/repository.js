let users = [
    {"id": 1, "banned": true, "name": "Sasha"}, 
    {"id": 2, "name": "Max"}
];

const getUsers = () => {
    return users;
};

const addUser = (name) => {
    users.push(users.push({name: name}));
}

exports.getUsers = getUsers;
exports.addUser = addUser;