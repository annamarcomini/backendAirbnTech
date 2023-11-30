//index, show.store, update,destroy
const User = require("../models/User")

module.exports = {
  async store(req, res) {
    const email = req.body.email
    console.log((req))
    let user = await User.findOne({ email }) 
    if (!user) {
      
    }

    return res.json(user)
  },
}
