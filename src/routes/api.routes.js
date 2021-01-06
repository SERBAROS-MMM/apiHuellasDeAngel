import {Router} from 'express'
import pkg from './../../package.json'
import personsRoutes from './persons.routes'
import authRoutes from './auth.routes'
import usersRoutes from './users.routes'
import uploadsRoutes from './uploads.routes'

const router = Router()

router.get('/', (req,res) => {
    res.json ({
       name: pkg.name,
       author: pkg.author,
       description: pkg.description,
       version: pkg.version
    })
})

router.use('/auth',authRoutes)
router.use('/users',usersRoutes)
router.use('/persons',personsRoutes)
router.use('/up',uploadsRoutes)


export default router