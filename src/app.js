import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import personsRoutes from './routes/persons.routes'

const app = express()

app.set('pkg',pkg)
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req,res) => {
    res.json ({
       name: app.get('pkg').name,
       author: app.get('pkg').author,
       description: app.get('pkg').description,
       version: app.get('pkg').version
    })
})

app.use('/persons',personsRoutes)

export default app