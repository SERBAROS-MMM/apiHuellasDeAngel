import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import personsRoutes from './routes/persons.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/users.routes'

const app = express()

app.set('pkg',pkg)
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())

app.get('/API', (req,res) => {
    res.json ({
       name: app.get('pkg').name,
       author: app.get('pkg').author,
       description: app.get('pkg').description,
       version: app.get('pkg').version
    })
})

app.use('/API/persons',personsRoutes)
app.use('/API/auth',authRoutes)
app.use('/API/users',usersRoutes)

export default app