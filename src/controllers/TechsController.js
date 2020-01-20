import User from '../models/User'
import Tech from '../models/Tech'

export default {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      attributes: ['name', 'email'],
      include: {
        association: 'techs',
        attributes: ['name'],
        through: { attributes: [] },
      },
    })

    return res.json(user)
  },
  async store(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'USer not found' })
    }

    const [tech] = await Tech.findOrCreate({
      where: { name },
    })

    await user.addTech(tech)

    return res.json(tech)
  },

  async delete(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'USer not found' })
    }

    const tech = await Tech.findOne({
      where: { name },
    })

    await user.removeTech(tech)

    return res.json()
  },
}
