import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createRoles,createEvaluations} from './libs/initialSetup'
import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import apiRoutes from './routes/api.routes' 
import path from 'path'

const app = express()
createRoles()
createEvaluations()

app.use(cors())

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/API',apiRoutes)


export default app