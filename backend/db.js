const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin27:adminpass27@cluster0.8dddpvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
console.log('MongoDB connected successfully!');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}