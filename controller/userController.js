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
  const id =req.params.id
    try {
        const user = await sequelize.models.Users.update(req.body, id);
        res.status(200).json(user);
    } catch (err) {
        res.send(err);
    }
}

//delete user by id from database
async function deleteUser(req, res) {
  const id =req.params.id
    try {
        const user = await sequelize.models.Users.destroy({
            where: {
                id: id
            }
        });
        res.sendStatus(200).json(user);
    } catch (err) {
        res.send(err);
    }
}

module.exports = { getAllUsers , getUserById, createUser, updateUser,deleteUser};