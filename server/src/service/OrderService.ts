import ApiError from '../error/ApiError'
import { Order } from '../model/orders'
import OrderDto from '../dto/orderDto'
import { where } from 'sequelize'

class OrderService {
  async create({name, phone, address, date, status}) {
    const candidate = await Order.findOne({where: {name}})
    if(candidate) {
      throw ApiError.badRequest(`Order with name ${name} already exist`)
    }
    const order = await Order.create({name, phone, address, date, status})

    const orderDto = new OrderDto(order)

    return {orderDto}
  }

  async update({id, name, phone, address, date, status}) {
    console.log('OrderService', id, name, phone, address, status)
    const candidate = await Order.findOne({where: {id}})
    if(!candidate) {
      throw ApiError.badRequest(`Order with id ${id} doesn't exist`)
    }
    const order = await Order.update({name, phone, address, date, status}, {where: {id: id}})

    const orderDto = new OrderDto(order)

    return {orderDto}
  }

  async delete(id) {
    const order = await Order.destroy({where: {id}})
    return order;
  }

  async getAllStatistic() {
    const orders = await Order.findAll()
    return orders
  }

  async getAllOrders() {
    const orders = await Order.findAll()
    return orders
  }
}

export default new OrderService()