import OrderController from '../controller/OrderController'
import { Router } from 'express'
import { body } from 'express-validator'

const router = Router()

router.post('/createOrder',
  body('name').isLength({min: 3, max:20}),
  body('phone').isLength({min: 3, max:10}),
  body('address').isLength({min: 3, max:10}),
  body('status').isLength({min: 3, max:10}),
  OrderController.create
)
router.put('/updateOrder', OrderController.update)
// router.delete('/deleteOrder', OrderController.delete)
// router.get('/details', OrderController.details)
// router.get('/orders', OrderController.getOrders)

export default router