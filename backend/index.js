const express = require("express");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    const todos = await todo.find();

    res.status(200).json({
        todos
    });
});

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.status(200).json({
        message: "Todo created successfully"
    });
});

app.put('/done', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            message: "Incorrect input"
        });
        return;
    }

    await todo.updateOne({
        _id: req.body.id,
    }, {
        completed: true
    });

    res.status(200).json({
        message: "Todo updated successfully"
    })

});

app.delete('/remove', async (req, res) => {
    const deletePayload = req.body;
    const parsedPayload = updateTodo.safeParse(deletePayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            message: "Incorrect input"
        });
        return;
    }

    await todo.deleteOne({
        _id: req.body.id
    });

    res.status(200).json({
        message: "Todo deleted successfully"
    });
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});