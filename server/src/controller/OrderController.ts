import ApiError from '../error/ApiError'
import OrderService from '../service/OrderService'
import { validationResult } from 'express-validator'

class OrderController {
  async create(req, res, next) {
    console.log('OrderController', req.body)
    try {
        let {name, phone, address, date, status} = req.body
        const order = await OrderService.create({name, phone, address, date, status});

        return res.json(order)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  }

  async update(req, res, next) {
    try{
      let {id, name, phone, address, date, status} = req.body
      const order = await OrderService.update({id, name, phone, address, date, status});
      
      return res.json(order)
    } catch(e) {
      next(e)
    }
  }

  async delete(req, res, next) {
    try {
        let {id} = req.body
        const order = await OrderService.delete(id);
        return res.json(order);
    } catch (e) {
        next(e);
    }
  }

  async details(req, res, next) {
    try{
      const statistic = await OrderService.getAllStatistic();
      return res.json(statistic);
    } catch(e) {
      next(e)
    }
  }

  async getOrders(req, res, next) {
    try{
      const users = await OrderService.getAllOrders()
      return res.json(users)
    } catch(e) {
      next(e)
    }
  }
}

export default new OrderController()