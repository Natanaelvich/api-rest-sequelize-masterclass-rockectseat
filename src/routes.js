import express from 'express'
import UserController from './controllers/UserController'
import AddressesController from './controllers/AddresessController'
import TechsController from './controllers/TechsController'
import ReposrtController from './controllers/RepostController'

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressesController.index)
routes.post('/users/:user_id/addresses', AddressesController.store)

routes.get('/users/:user_id/techs', TechsController.index)
routes.post('/users/:user_id/techs', TechsController.store)
routes.delete('/users/:user_id/techs', TechsController.delete)

routes.get('/reports', ReposrtController.show)

export default routes
