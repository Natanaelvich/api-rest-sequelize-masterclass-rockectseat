import User from '../models/User'
import { Op } from 'sequelize'

export default {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ['name', 'email'],

      where: { email: { [Op.like]: '%@rocketseat.com' } },

      include: [
        {
          association: 'addresses',
          where: { street: 'av joao leal' },
          attributes: ['street', 'number'],
        },
        {
          association: 'techs',
          required: false,
          where: { name: { [Op.like]: 'React%' } },
          through: {
            attributes: [],
          },
          attributes: ['name'],
        },
      ],
    })
    return res.json(users)
  },
}
