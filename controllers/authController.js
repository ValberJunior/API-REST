const jwt = require('jsonwebtoken');


module.exports = function (req, res, next)
{

    //Pegar o valor recebido pelo header
    const token = req.header('authorization-token');

    if (!token){
        return res.status(401).send("Acess Denied");
    } 

    //validar token

    try{
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = userVerified;

        next();

    } catch(err){
        res.status(401).send("Access Denied");
    }

}