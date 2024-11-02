const { v4: uuidv4 } = require('uuid');

let users = [];

function create({nome, email, nome_curso}){
    const user = {
        id: uuidv4(),
        nome,
        email,
        nome_curso
    };
    users.push(user);
    return user;
}

function update(id,{nome, email, nome_curso}){
    const index = users.findIndex(user => user.id === id);
    if (index === -1){
        return null;
    }
    users[index] ={
        id,
        nome,
        email,
        nome_curso
    }
    return users[index];
}

function remove(id){
    const index = users.findIndex(user => user.id === id);
    if (index === -1){
        return null;
    }
    users.splice(index,1);
    return true;
}

function findAll(){
    return users;
}

module.exports = {
    create,update,remove,findAll
}