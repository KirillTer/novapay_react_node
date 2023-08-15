import cors from 'cors'
import dotenv from 'dotenv'
import errorHandler from'./src/middleware/ErrorHandlingMiddleware'
import express from 'express'
import router from'./src/route/index'
import sequelizeConnection from './src/db'

dotenv.config({path:`.${process.env.NODE_ENV}.env`});
const PORT = process.env.PORT || 5003

const app = express()
app.use(cors({credentials: true, origin: process.env.CLIENT_URL}))
app.use(express.json())
app.use('/api', router)

// Error handler
app.use(errorHandler)

const start = async () => {
    try {
        await sequelizeConnection.authenticate()
        await sequelizeConnection.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()