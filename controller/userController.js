 const {sequelize} = require("../models/index");
 async function getAllUsers(req, res) {
   try {
     const users = await sequelize.models.Users.findAll();
     res.send(users);
   } catch (err) {
     res.send(err);
   }
 }

 async function getUserById(req, res) {
   try {
     const user = await sequelize.models.Users.findOne({
       where: {
         id: req.params.id,
       },
     });
     res.status(200).send(user);
   } catch (err) {
     res.send(err);
   }
 }

 async function createUser(req, res) {
    try {
        const user = await sequelize.models.Users.create(req.body);
        res.status(201).send(user);
    } catch (err) {
        res.send(err);
    }
}

async function updateUser(req, res) {
    try {
        const user = await sequelize.models.Users.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send(user);
    } catch (err) {
        res.send(err);
    }
}

async function deleteUser(req, res) {
    try {
        const user = await sequelize.models.Users.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send(user);
    } catch (err) {
        res.send(err);
    }
}


 module.exports = { getAllUsers , getUserById, createUser, updateUser, deleteUser};