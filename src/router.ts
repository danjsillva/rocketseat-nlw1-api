import Router from 'koa-router'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const router = new Router()

router.get('/', ctx => {
    ctx.body = { message: `Hello World` }
})

router.get('/points', PointsController.index)
router.get('/points/:id', PointsController.show)
router.post('/points', PointsController.create)
router.put('/points/:id', PointsController.update)
router.delete('/points/:id', PointsController.destroy)

router.get('/items', ItemsController.index)
router.get('/items/:id', ItemsController.show)
router.post('/items', ItemsController.create)
router.put('/items/:id', ItemsController.update)
router.delete('/items/:id', ItemsController.destroy)

export default router.routes()