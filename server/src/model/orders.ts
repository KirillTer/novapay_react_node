import { DataTypes } from 'sequelize'
import sequelizeConnection from'../db'

const Order = sequelizeConnection.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    date: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: "PENDING"},
})

export {
    Order,
}