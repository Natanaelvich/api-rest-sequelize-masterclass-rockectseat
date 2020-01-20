import User from '../models/User'

export default {
  async index(req, res) {
    const users = await User.findAll()

    res.json(users)
  },

  async store(req, res) {
    const { name, email, age } = req.body

    const user = await User.create({
      name,
      email,
      age,
    })
    return res.json(user)
  },
}
