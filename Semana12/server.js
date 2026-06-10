
const User = require('./src/model/user');
const Sweets = require('./src/model/sweets');
const Historico = require('./src/model/historico');
const { checkUserExists } = require('./src/validations/userValidation');
const { checkSweetsExists } = require('./src/validations/sweetsValidation');

const express = require('express');
let app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Tudo certo");
});

app.post("/user", async (req, res) => {
    let name = req.body.username;
    let cpf = req.body.cpf;
    let password = req.body.password;

    let user = new User({
        username: name,
        cpf: cpf,
        password: password
    });

    await user.save();

    res.status(201).json({user});
});

app.get("/users", async (req, res) => {
    let users = await User.find({}, "username cpf");
    res.status(200).json(users);
});

app.get("/user/:id", async (req, res) => {
    let id = req.params.id;

    let foundUser = await checkUserExists(id);
    if (!foundUser) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    let found = await User.findById(id, "username cpf");

    res.status(200).json(found);
});

app.put("/user/:id", async (req, res) => {
    let id = req.params.id;

    const foundUser = await checkUserExists(id);
    if (!foundUser) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    let newUsername = req.body.username;
    let password = req.body.password;

    let updated = await User.findByIdAndUpdate(id,
        {username: newUsername, password: password});

    res.status(200).json({updated});
})

app.delete("/user/:id", async (req, res) => {
    let id = req.params.id;

    const foundUser = await checkUserExists(id);
    if (!foundUser) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    let deleted = await User.findByIdAndDelete(id);

    res.status(200).json({deleted});
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

// CRUD for sweets
app.post("/sweets", async (req, res) => {
    const { name, description, price, categories } = req.body;

    const sweet = new Sweets({ name, description, price, categories });
    await sweet.save();

    res.status(201).json({sweet});
});

app.get("/sweets", async (req, res) => {
    let sweets = await Sweets.find({}, "name description price categories");
    res.status(200).json(sweets);
});

app.get("/sweets/:id", async (req, res) => {
    let id = req.params.id;

    let foundSweet = await checkSweetsExists(id);
    if (!foundSweet) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    let found = await Sweets.findById(id, "name description price categories");

    res.status(200).json(found);
});

app.put("/sweets/:id", async (req, res) => {
    let id = req.params.id;
    const { name, description, price, categories } = req.body;

    const foundSweet = await checkSweetsExists(id);
    if (!foundSweet) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    let updated = await Sweets.findByIdAndUpdate(id, { name, description, price, categories });

    res.status(200).json({updated});
});

app.delete("/sweets/:id", async (req, res) => {
    let id = req.params.id;

    const foundSweet = await checkSweetsExists(id);
    if (!foundSweet) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    let deleted = await Sweets.findByIdAndDelete(id);

    if (deleted === null || deleted === undefined) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    res.status(200).json({deleted});
});

// CRUD for historico
app.post("/historico", async (req, res) => {
    const { user, sweet, quantity } = req.body;

    //TODO: validações

    let total = quantity * foundSweet.price;

    const record = new Historico({ user, sweet, quantity, total });
    await record.save();

    res.status(201).json({record});
});


app.get("/historico/user/:userId", async (req, res) => {
    let userId = req.params.userId;

    //TODO: validações

    let records = await Historico.find({ user: userId }).populate('sweet', 'name price');

    res.status(200).json(records);
});


app.get("/historico/:id", async (req, res) => {
    let id = req.params.id;
    
    //TODO: validações
    let found = await Historico.findById(id).populate('user', 'username cpf').populate('sweet', 'name price');

    res.status(200).json(found);
});

app.put("/historico/:id", async (req, res) => {
    let id = req.params.id;

    //TODO: validações

    let total = quantity * foundSweet.price;
    let updated = await Historico.findByIdAndUpdate(id, { user, sweet, quantity, total });

    if (updated === null || updated === undefined) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    res.status(200).json({updated});
});

app.delete("/historico/:id", async (req, res) => {
    let id = req.params.id;

    //TODO: validações

    let deleted = await Historico.findByIdAndDelete(id);

    if (deleted === null || deleted === undefined) {
        res.status(404).json({'response': "id não encontrado"});
        return;
    }

    res.status(200).json({deleted});
});


app.listen(3000, () => {
    console.log("Listening 3000");
});