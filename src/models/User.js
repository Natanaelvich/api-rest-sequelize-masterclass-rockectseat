import { Model, DataTypes } from 'sequelize'

export default class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    )
  }

  static associate(models) {
    this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses' })
    this.belongsToMany(models.Tech, {
      foreignKey: 'user_id',
      through: 'users_techs',
      as: 'techs',
    })
  }
}
