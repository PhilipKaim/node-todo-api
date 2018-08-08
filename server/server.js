const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     createdAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: '    beat them cheeks    ',
//     completed: false,
//     createdAt: new Date()
// });

// newTodo.save().then((doc) => {
//     console.log('new todo saved', doc);
    
// }, (err) => {
//     console.log('unable to save todo', err);
// });

var User = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: '     jhondoe@gmail.com    '
});

newUser.save().then((doc) => {
    console.log('new todo saved', doc);
    
}, (err) => {
    console.log('unable to save todo', err);
});

