const express = require('express');
const path = require("path");

let teachers = [
    {
        id: 0,
        name: "Fábio Gostoso",
        classes: ["Visão Computacional", "Desenvolvimento Web"]
    },
    {
        id: 1,
        name: "Anna Vitoria",
        classes: ["Python", "Desenho"]
    },
    {
        id: 2,
        name: "Anna Vitoria",
        classes: ["Pintura", "Desenho"]
    }
];

const app = express();
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// TODO: Pegar o nome de todos os professores.
app.get("/names", (req, res) => {
    let names = [];

    for (let i = 0; i < teachers.length; i++) {
        names.push(teachers[i].name);
    }

    res.json({"names": names});
});

// TODO: Pegar todas as classes.
app.get("/classes", (req, res) => {
    let classes = [];

    for (let i = 0; i < teachers.length; i++) {
        let classes = teachers[i].classes;

        for (let c = 0; c < classes.length; c++) {
            classes.push(classes[c]);
        }
    }

    res.json({"classes": classes});
});

// TODO: Pegar o ID de um professor pelo nome.
app.post("/get-id", (req, res) => {
    let name = req.body.name;
    let id = null;

    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].name === name) {
            id = teachers[i].id;
        }
    }

    if (id === null) {
        res.status(404).json({'response': "Id não encontrado"});
        return;
    }

    res.json({"id": id});
});

// TODO: Pegar quais as classes dadas por um ID.
app.get("/classes/:id", (req, res) => {
    let id = req.params.id;

    if (id == undefined) {
        res.status(400).json({'response': 'id não foi provido no corpo da requisição'});
        return;
    }

    for (let i = 0; i < teachers.length; i++)
    {
        if (teachers[i].id == id)
        {
            res.json({'classes': teachers[i].classes});
            return;
        }
    }

    res.status(404).json({'response': 'id não encontrado'});
});

// TODO: Pegar quais as classes dadas por um nome, por professor.
app.post('/classes-name', (req, res) => {
    let name = req.body.name;
    if (name === undefined || name === null) {
        res.status(400).json({'response': "name não especifcado"});
        return;
    }

    let classes = [];
    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].name === name) {
            classes.push(teachers[i].classes);
        }
    }

    res.json({'classes': classes});
});

// TODO: Adicionar novos professores via JSON com POST.
app.post("/teacher", (req, res) => {
    let name = req.body.name;
    let classes = req.body.classes;

    // TODO: Fazer validação

    teachers.push({id: teachers.length, name: name, classes: classes});
    res.send("Ok");
});

// TODO: Deletar um professor por ID.
app.delete("/teacher/:id", (req, res) => {
    let id = req.params.id;

    if (id == undefined) {
        res.status(400).json({'response': 'id não foi provido no corpo da requisição'});
        return;
    }

    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].id === id) {
            teachers.splice(i, 1);
        }
    }

    res.send("Ok");
});

// TODO: Modificar informações de um professor por ID. Passar {name, classes}.
app.put("/teachers/:id", (req, res) =>  {
    let id = req.params.id;
    let name = req.body.name;
    let classes = req.body.classes;

    if (id === null || id === undefined) {
        res.status(400).json({'response': 'id não foi provido via query parameter'});
        return;
    }

    if (name === null || name === undefined) {
        res.status(400).json({'response': 'name não foi provido via o corpo da requisição'});
        return;
    }

    if (classes === null || classes === undefined) {
        res.status(400).json({'response': 'name não foi provido via o corpo da requisição'});
        return;
    }

    let found = false;

    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].id === id) {
            found = true;
            teachers[i].name = name;
            teachers[i].classes = classes;
        }
    }

    if (!found) {
        res.status(404).json({'response': 'id não encontrado'});
        return;
    }

    res.send('Ok');
});

app.listen(3000, () => {
    console.log("Listening at 3000");
});
