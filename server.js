const express = require('express');
const {create,update,remove,findAll} = require('./repository/userRepository') 
const app = express();
const port = 3000;

app.use(express.json());

app.post('/users', (req,res) => {
    const {nome, email, nome_curso} = req.body;
    const user = create({nome,email,nome_curso});
    res.status(201).json(user);
});

app.get('/users', (req,res)=>{
    const users = findAll();
    res.json(users);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nome_curso } = req.body;
    const updated_user = update(id, { nome, email, nome_curso });
    res.json(updated_user);
});

app.delete('/users', (req,res)=>{
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});