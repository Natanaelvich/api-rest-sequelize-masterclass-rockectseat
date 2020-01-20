import { Model, DataTypes } from 'sequelize'

export default class Tech extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'techs',
      }
    )
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'tech_id',
      through: 'users_techs',
      as: 'users',
    })
  }
}
