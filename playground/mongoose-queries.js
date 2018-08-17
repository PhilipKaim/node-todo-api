const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

const id = '5b6b75a996ff4926e4f8e0fc';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('user not found');
    }

    console.log('User by id', user);
}, (e) => {
    console.log(e);
});