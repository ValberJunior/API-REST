const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidate, registerValidate} = require('./validate'); //validar os dados do front


const userController = {
    register: async  function (req, res){

        //validar as informações digitadas no front
        const {error} = registerValidate(req.body);
        if (error){
            return res.status(400).send(error.message);
        }

        //Verificar se já existe um usuário com o mesmo dado:
        
        const selectedUser = await User.findOne({email: req.body.email});
        if(selectedUser){
         return res.status(400).send('Email already exists!')
        }
        
        //Pegar os dados que vem no body através do obj json e salvar no user(modelo);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })

        try{
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }

        res.send("Register");
    },
    login: async function (req, res){

        //validar as informações digitadas
        const {error} = loginValidate(req.body);
        if (error){
            return res.status(400).send(error.message);
        }

        //Preciso verificar se existe o email digitado:

        const selectedUser = await User.findOne({email: req.body.email});
        if(!selectedUser){
          return  res.status(400).send('Email or Password Incorrect');
        }

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if(!passwordAndUserMatch){
         return res.status(400).send('Email or Password Incorrect');
        }

        const token = jwt.sign({id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET);

        res.header('authorization-token', token).send("User Logged");

    },
}


module.exports = userController;