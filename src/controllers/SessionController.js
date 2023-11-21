//index, show.store, update,destroy
const User = require('../models/User');

module.exports= {
async store(req, res){
 const email = req.body.email;

 let user= await User.findOne({email}); //verificar se o user existe
 if (!user){ //se n achar o user aí cria
 user = await User.create({ email })
 }
 

 return res.json(user);
}
};