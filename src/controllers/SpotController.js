const Spot= require('../models/Spot')


module.exports = {
 async store(req, res) {
  const{filename} = req.file;
  const{company,techs, price} = req.body;
  const {user_id} = req.headers;

  const spot = await Spot.create({
   user: user_id,
   thumbnail: filename,
   company,
   techs: techs.split(',').map(tech=> tech.trim()), //trim tira os espaços em branco
   price,
  })

  return res.json(spot)
 }
}