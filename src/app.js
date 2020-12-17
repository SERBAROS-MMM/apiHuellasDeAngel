import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createRoles} from './libs/initialSetup'

import apiRoutes from './routes/api.routes'

const app = express()
createRoles()
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())

app.use('/API',apiRoutes)

export default app