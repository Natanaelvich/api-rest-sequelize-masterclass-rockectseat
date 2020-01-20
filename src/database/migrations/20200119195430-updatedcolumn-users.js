'use strict'

module.exports = {
  /**
   * @typedef {import('sequelize').Sequelize} Sequelize
   * @typedef {import('sequelize').QueryInterface} QueryInterface
   */

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  up: queryInterface => {
    return queryInterface.removeColumn('users', 'age')
  },
  down: queryInterface => {
    return queryInterface.removeColumn('users', 'age')
  },
}
