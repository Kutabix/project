const router = require('express').Router();
const Todo = require('../model/todo');

router.get('/', async (req, res) => {
    const collection = await Todo.find({});
    res.render('index', {collection});
});

router.post('/new_todo', async (req, res) => {
    if(req.body.new_todo === '') return res.json({ error: true });
    const new_todo = await new Todo({ task: req.body.new_todo }).save(); 
    console.log(new_todo);
    res.redirect('/')
})

router.get('/:specific_todo', async (req, res) => {
    try {
        console.log(req.params.specific_todo)
        const todo = await Todo.deleteOne({ _id: req.params.specific_todo });
        res.redirect('/')
    }
    catch(error) {
        console.log(error.message)
    }
});

module.exports = router;