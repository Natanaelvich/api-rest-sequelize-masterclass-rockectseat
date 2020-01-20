const Sequelize = require('sequelize')
const dbConfig = require('./config/configDatabase')
import User from '../models/User'
import Addresses from '../models/Addresses'
import Tech from '../models/Tech'

const connection = new Sequelize(dbConfig)

User.init(connection)
Addresses.init(connection)
Tech.init(connection)

Addresses.associate(connection.models)
User.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection
