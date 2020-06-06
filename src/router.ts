import Router from 'koa-router'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const router = new Router()

router.get('/', ctx => {
    ctx.body = { message: `Hello World` }
})

router.get('/points', PointsController.index)
router.get('/points/:id', PointsController.find)
router.post('/points', PointsController.store)
router.put('/points/:id', PointsController.update)
router.delete('/points/:id', PointsController.remove)

router.get('/items', ItemsController.index)
router.get('/items/:id', ItemsController.find)
router.post('/items', ItemsController.store)
router.put('/items/:id', ItemsController.update)
router.delete('/items/:id', ItemsController.remove)

export default router.routes()