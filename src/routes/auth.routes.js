import {Router} from 'express'

const router = Router()

import * as authCtrl from './../controllers/auth.controller'

router.post('/login',authCtrl.loginUser)


export default router