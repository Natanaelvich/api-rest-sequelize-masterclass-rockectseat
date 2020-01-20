'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
  },
  down: queryInterface => {
    return queryInterface.removeColumn('users', 'age')
  },
}
