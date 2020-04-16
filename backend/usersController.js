let { getUsers, addUser } = require("./repository");

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;

const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const DELETE = 'DELETE';


exports.usersController = async (req, res) => {
    switch (req.method) {
        case POST: {
            let result = await addUser('Lesha')
            res.write(JSON.stringify({success: true}));
            res.end();
            break;
        }
        case GET: {
            let users = await getUsers();
            res.write(JSON.stringify(users));
            res.end();
            break;
        }
        default:
    }
};

    




