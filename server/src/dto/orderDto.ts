export default class OrderDto {
  id
  name
  phone
  address
  date
  status

  constructor(model) {
    this.id = model.id
    this.name = model.name
    this.phone = model.phone
    this.address = model.address
    this.date = model.date
    this.status = model.status
  }
}