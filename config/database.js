const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/todo-list')
.then(() => console.log("MongoDB Connected.1.2.3"))
.catch((err) => console.log(err))