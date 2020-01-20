import Addresses from '../models/Addresses'
import User from '../models/User'

export default {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: {
        association: 'addresses',
      },
    })

    return res.json(user)
  },

  async store(req, res) {
    const { user_id } = req.params

    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      res.status(400).json({ error: 'USer not found' })
    }

    const address = await Addresses.create({
      zipcode,
      street,
      number,
      user_id,
    })
    res.json(address)
  },
}
