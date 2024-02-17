
const Spot = require("../models/Spot")
const User = require("../models/User")

module.exports = {
  async index(req, res) {
    const { tech } = req.query

    const spots = await Spot.find({ techs: tech })

    return res.json(spots)
  },

  async store(req, res) {
    const { filename } = req.file
    const { company, techs, price } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)

    if (!user) {
      return res.status(400).json({ error: "User does not exist" })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map((tech) => tech.trim()),
      price,
    })

    return res.json(spot)
  },

  async destroy(req, res) {
    const { id } = req.params
    

    try {
      // Encontrar e remover o spot pelo ID
      const spotId = await Spot.findByIdAndDelete(id)

      if (!spotId) {
        return res.status(404).json({ error: "Spot not found" })
      }

      return res.json({ message: "Spot deleted successfully" })
    } catch (error)
    { 
      return res.status(500).json({ error: "Internal Server Error" })
    }
    
  },
  
}
