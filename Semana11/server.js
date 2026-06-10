// TODO: Criar um sistema de padaria
// 1- CRUD usuarios
// 2- CRUD doces
// 3- CRUD historico de compras

const User = require('./src/model/user');

const express = require('express');
let app = express();

app.use(express.json());

app.post("/user", async (req, res) => {
    let name = req.body.name;
    let cpf = req.body.cpf;
    let password = req.body.password;

    let user = new User({
        username: name,
        cpf: cpf,
        password: password
    });

    await user.save();

    res.send('Ok');
});

app.get("/user/:id", async (req, res) => {
    let id = req.params.id;

    let found = await User.findById(id, "username cpf");

    if (found === null || found === undefined) {
        res.status(404).json({'response': "usuario não encontrado"});
        return;
    }

    res.json({"username": found.username, "cpf": found.cpf});
});

app.put("/user/:id", async (req, res) => {
    let id = req.params.id;
    let newUsername = req.body.username;
    let password = req.body.password;

    let updated = User.findByIdAndUpdate(id,
        {username: newUsername, password: password});

    if (updated === null || updated === undefined) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    res.send('Ok');
})

app.delete("/user/:id", async (req, res) => {
    let id = req.params.id;

    let deleted = User.findByIdAndDelete(id);

    if (deleted === null || deleted === undefined) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    res.send('Ok');
})

app.post("/get-user", async (req, res) => {
    let username = req.body.username;

    let found = await User.findOne({username: username});

    if (found === null || found === undefined) {
        res.status(404).json({'response': "usuario não encontrado"});
        return;
    }

    res.json({"id": found._id});
});

app.listen(3000, () => {
    console.log("Listening 3000");
});